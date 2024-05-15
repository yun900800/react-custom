import { 
    head,
    pair, 
    setHead, 
    setTail, 
    tail
} from '../pair/pair';
import {
    error
} from '../utils/utils';

import {
    list
} from '../list/list';

import {
    makeQueue,
    insertQueue,
    frontQueue,
    deleteQueue,
    isEmptyQueue
} from '../state/queue';

const callEach = (procedures) => {
    if(null === procedures) {
        return 'done';
    }
    head(procedures)();
    return callEach(tail(procedures));
}

/**
 * 定义最底层的抽象
 */
const makeWire = ()=>{
    let signalValue = 0;
    let actionFns = null;

    const setMySignal = (newValue) => {
        if (signalValue !== newValue) {
            signalValue = newValue;
            return callEach(actionFns);
        }
        return 'done';
    }

    const acceptActionFn = (fn) => {
        actionFns = pair(fn,actionFns);
        fn();
    }

    const dispatch = m => {
        return m === "getSignal"
               ? signalValue
               : m === "setSignal"
               ? setMySignal
               : m === "addAction"
               ? acceptActionFn
               : error(m, "unknown operation -- wire");
    }
    return dispatch;
}

const getSignal = wire => {
    return wire('getSignal');
}

const setSignal = (wire, newValue) =>{
    return wire('setSignal')(newValue);
}

const addAction = (wire, fns) => {
    return wire("addAction")(fns);
}

/**
 * 定义上层的抽象
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 */

const inverterDelay = 2;
const andGateDelay = 3;
const orGateDelay = 5;
const orGate = (a,b,c) => {
    const orActionFn = () => {
        const newValue = logicOr(getSignal(a), getSignal(b));
        afterDelay(orGateDelay,()=>{
            setSignal(c, newValue);
        })
    }

    const logicOr = (s1,s2) => {
        if(s1 === 0 && s2 === 0) {
            return 0
        }
        return 1;
    }
    addAction(a, orActionFn);
    addAction(b, orActionFn);
    return 'ok';
}

const andGate = (a1,a2,output) => {
    const addActionFn = () =>{
        const newValue = logicAnd(getSignal(a1), getSignal(a2));
        afterDelay(andGateDelay, ()=>{
            setSignal(output, newValue);
        });
    }

    const logicAnd = (s1,s2) => {
        if (s1 === 1 && s2 === 1) {
            return 1;
        }
        return 0;
    }
    addAction(a1, addActionFn);
    addAction(a2, addActionFn);
    return 'ok';
}

const inverter = (input,output) => {
    const invertInput = () => {
        const newValue = logicNot(getSignal(input));
        afterDelay(inverterDelay,()=>{
            setSignal(output,newValue);
        });
    }

    const logicNot = (s) => {
        if (s === 0) {
            return 1
        }
        if (s === 1) {
            return 0;
        }
        error('invalid signal',s)
    }
    addAction(input,invertInput);
    return 'ok';
}

const halfAdder = (a,b,s,c) => {
    const d = makeWire();
    const e = makeWire();
    orGate(a,b,d);
    andGate(a,b,c);
    inverter(c,e);
    andGate(d,e,s);
    return 'ok';
}

const fullAdder = (a,b,cIn,sum,cOut) => {
    const s = makeWire();
    const c1 = makeWire();
    const c2 = makeWire();
    halfAdder(b,cIn,s,c1);
    halfAdder(a,s,sum,c2);
    orGate(c1,c2,cOut);
    return 'ok';
}


const makeTimeSegment = (time, queue) => {
    return pair(time,queue);
}

const segmentTime = s => head(s)
const segmentQueue = s => tail(s)


/**
 * 定义基础过程抽象
 */
const makeAgenda = () => {
    return list(0,null);
}

const currentTime = agenda => {
    return head(agenda);
}

const setCurrentTime = (agenda, time)=> {
    return setHead(agenda, time);
}

const segments = agenda => {
    return tail(agenda);
}

const setSegments = (agenda,segments) => {
    return setTail(agenda,segments);
}

const firstSegment = (agenda)=> {
    return head(segments(agenda));
}

const restSegments = (agenda)=> {
    return tail(segments(agenda));
}

//以上是选择函数,change函数和构造函数

const isEmptyAgenda = agenda => {
    return null === segments(agenda);
}

const firstAgendaItem = agenda => {
    if (isEmptyAgenda(agenda)) {
        error("agenda is empty -- first_agenda_item");
    } else {
        const first_seg = firstSegment(agenda);
        setCurrentTime(agenda, segmentTime(first_seg));
        return frontQueue(segmentQueue(first_seg));
    }
}

const removeFirstAgendaItem = agenda => {
    const q = segmentQueue(firstSegment(agenda));
    deleteQueue(q);
    if (isEmptyQueue(q)) {
        setSegments(agenda, restSegments(agenda));
    }
}

const addToAgenda = (time,action, agenda) => {
    const belongsBefore = (segs) => {
        return null=== segs || time < segmentTime(head(segs));
    }

    const makeNewTimeSegment = (time,action) => {
        const q = makeQueue();
        insertQueue(q, action);
        return makeTimeSegment(time, q);
    }

    const addToSegments = (segs) => {
        if (segmentTime(head(segs)) === time) {
            insertQueue(segmentQueue(head(segs)), action);
        } else{
            const rest = tail(segs);
            if (belongsBefore(rest)) {
                setTail(segs, pair(makeNewTimeSegment(time, action),
                                    tail(segs)));
            } else {
                addToSegments(rest);
            }
        }
    }
    const segs = segments(agenda);
    if (belongsBefore(segs)) {
        setSegments(agenda,
                    pair(makeNewTimeSegment(time, action), segs));
    } else {
        addToSegments(segs);
    }
}



const theAgenda = makeAgenda();

const afterDelay = (delay, action) => {
    addToAgenda(delay + currentTime(theAgenda),
                  action,
                  theAgenda);
}

const propagate = () => {
    if (isEmptyAgenda(theAgenda)) {
        return 'done';
    }
    const firstItem = firstAgendaItem(theAgenda);
    firstItem();
    removeFirstAgendaItem(theAgenda);
    return propagate();
}

const display = s => {
    console.log(s);
}

const prob = (name, wire) => {
    addAction(wire, 
        () => display(name + " " +
                      JSON.stringify(currentTime(theAgenda)) + 
                      ", new value = " + 
                      JSON.stringify(getSignal(wire))));
}



module.exports = {
    makeWire,
    getSignal,
    setSignal,
    addAction,

    makeTimeSegment,
    segmentTime,
    segmentQueue,

    makeAgenda,
    currentTime,
    setCurrentTime,
    segments,
    setSegments,
    firstSegment,
    restSegments,
    isEmptyAgenda,
    firstAgendaItem,
    removeFirstAgendaItem,

    addToAgenda,

    orGate,
    andGate,
    inverter,
    halfAdder,
    fullAdder,

    prob,
    propagate
}