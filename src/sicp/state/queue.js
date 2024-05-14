import {
    pair,
    tail,
    head,
    setHead,
    setTail
} from '../pair/pair';

import {
    error
} from '../utils/utils';

import {
    list 
} from  '../list/list';

//下面的前端指针和后端指针对pair形成抽象屏障
const makeQueue = ()=>{
    return pair(null,null);
}

const frontPtr = q => {
    return head(q);
}

const rearPtr = q => {
    return tail(q);
}

const setFrontPtr = (q, item) => {
    setHead(q,item);
    return q;
}
const setRearPtr = (q, item) => {
    setTail(q,item);
    return q;
}

//下面的对列操作对上面的过程形成依赖,实际上是一种抽象屏障 

const isEmptyQueue = q=> {
    return null === frontPtr(q);
}

const frontQueue = q => {
    return isEmptyQueue(q) 
        ? error(q, "front_queue called with an empty queue")
    : head(frontPtr(q));
}

const insertQueue = (q, item) => {
    let newPair = pair(item,null);
    if (isEmptyQueue(q)) {
        setFrontPtr(q, newPair);
        setRearPtr(q, newPair);
    } else {
        setTail(rearPtr(q), newPair);
        setRearPtr(q, newPair);
    }
    return q;
}

const deleteQueue = q => {
    if (isEmptyQueue(q)) {
        error(q, "delete_queue called with an empty queue");
    } else {
        setFrontPtr(q, tail(frontPtr(q)));
        return q;
    }
}

const printQueue = q => {
    let temp = head(q);
    if (null != temp) {
        console.log(temp);
    } else {
        return null;
    }
    temp = tail(q);
    printQueue(temp);
}

const displayQueue = q => {
    const iter = (q,result)=> {
        if (null != head(q)) {
            result.push(head(q));
        } else {
            return result;
        }
        return iter(tail(q), result);
    }
    return iter(q,[])
}

const makeQueueNew = ()=> {
    let frontPtr = null;
    let rearPtr = null;
    const isEmptyQueue = () => {
        return null === frontPtr;
    }

    const insertQueue = (item) => {
        if (isEmptyQueue()) {
            const initList = list(item);
            frontPtr = initList;
            rearPtr = initList;
            return frontPtr;
        } else {
            const newItem = list(item);
            setTail(rearPtr,newItem);
            rearPtr = newItem;
            return frontPtr
        }
    }
    const deleteQueue = () => {
        if (isEmptyQueue()) {
            error(q, "delete_queue called with an empty queue");
        } else {
            frontPtr = tail(frontPtr);
            return frontPtr;
        }
    }

    const dispatch = (m) => {
        if (m=== 'insertQueue') {
            return insertQueue;
        } else if ('deleteQueue' === m) {
            return deleteQueue;
        } else if ('emptyQueue' === m) {
            return isEmptyQueue;
        } else {
            error(m,'Unknow operation -- DISPATCH');
        }
    }
    return dispatch;
}

module.exports = {
    makeQueue,
    insertQueue,
    deleteQueue,
    isEmptyQueue,
    frontQueue,
    printQueue,
    displayQueue,
    makeQueueNew,

    frontPtr
}