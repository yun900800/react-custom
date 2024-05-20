import {
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

    addToAgenda,

    isEmptyAgenda,
    firstAgendaItem,
    removeFirstAgendaItem,

    orGate,
    andGate,
    inverter,
    halfAdder,
    fullAdder,

    prob,
    propagate
} from './simulator';

import {
    makeQueue
} from '../state/queue';

import { 
    pair, 
} from '../pair/pair';

describe('simulator test',()=>{
    it('makeWire getSignal setSignal test',()=>{
        const wire1 = makeWire();
        expect(wire1).not.toBeNull();
        expect(getSignal(wire1)).toEqual(0);
        setSignal(wire1,1);
        expect(getSignal(wire1)).toEqual(1);
    });

    it('makeWire addAction test',()=>{
        const wire1 = makeWire();
        const fn1 = jest.fn();
        addAction(wire1,fn1);
        expect(fn1).toBeCalledTimes(1)
        expect(wire1('getSignal')).toEqual(0);
        setSignal(wire1,1);
        expect(fn1).toBeCalledTimes(2);
    });

    it('makeTimeSegment test',()=>{
        const timeSegments = makeTimeSegment(5, null);
        expect(segmentTime(timeSegments)).toEqual(5);
        expect(segmentQueue(timeSegments)).toBeNull();

        const queue1 = makeQueue();
        const timeSegments1 = makeTimeSegment(6, queue1);
        expect(segmentTime(timeSegments1)).toEqual(6);
        expect(segmentQueue(timeSegments1)).toEqual(queue1);
    });

    it('segmentTime test',()=> {
        const timeSegments = makeTimeSegment(6, null);
        expect(segmentTime(timeSegments)).toEqual(6);
        const timeSegments1 = makeTimeSegment(6);
        expect(segmentTime(timeSegments1)).toEqual(6);

    })

    it('makeAgenda test',()=>{
        const agenda1 = makeAgenda();
        expect(currentTime(agenda1)).toEqual(0);
        expect(isEmptyAgenda(agenda1)).toBeTruthy();

        setCurrentTime(agenda1,2);
        expect(currentTime(agenda1)).toEqual(2);
    });

    it('setSegments test',()=>{
        const agenda1 = makeAgenda();
        const fn1 = jest.fn();
        const segment1 = makeTimeSegment(5,fn1);
        setSegments(agenda1,pair(segment1,null));
        const segment2 = firstSegment(agenda1);
        expect(segment1).toEqual(segment2);

        expect(restSegments(agenda1)).toBeNull();
    });

    it('prob test',()=>{
        const sum = makeWire();
        prob('sum',sum);

        const carry = makeWire();
        prob('carry',carry);

        const input1 = makeWire();
        const input2 = makeWire();
        halfAdder(input1,input2,sum,carry);
        setSignal(input1,1);
        propagate();
        setSignal(input2,1);
        propagate();
    });

    it('inverter test',()=>{
        const input = makeWire();
        const output = makeWire();
        inverter(input,output);
        prob('inverter output',output);
        setSignal(input,0);
        propagate();
        expect(getSignal(output)).toEqual(1);
        //这里会重新添加到agenda中
        setSignal(input,1);
        propagate();
        expect(getSignal(output)).toEqual(0);      
    });

    it('orGate test',()=>{
        const wireA = makeWire();
        const wireB = makeWire();
        const output = makeWire();
        orGate(wireA,wireB,output);

        prob('orGate output',output);
        setSignal(wireA,1);
        propagate();
        setSignal(wireB,1);
        propagate();
        setSignal(wireA,0);
        setSignal(wireB,0);
        propagate();
    });

    it('andGate test',()=>{
        const wireA = makeWire();
        const wireB = makeWire();
        const output = makeWire();
        andGate(wireA,wireB,output);
        prob('andGate output',output);
        setSignal(wireA,1);
        propagate();
        setSignal(wireB,1);
        propagate();
        setSignal(wireA,0);
        propagate();
    });

    it('halfAdder test',()=>{
        const wireA = makeWire();
        const wireB = makeWire();
        const wireS = makeWire();
        const wireC = makeWire();
        halfAdder(wireA,wireB,wireS,wireC);
        prob('halfAdder wireS',wireS);
        prob('halfAdder wireC',wireC);
        setSignal(wireA,1);
        propagate();
        setSignal(wireB,1);
        propagate();

    })


});