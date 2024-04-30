import {
    pair,
    tail,
    head,
    setHead,
    setTail,
    error
} from '../data-abstract/sicp';

const makeQueue = ()=>{
    return pair(null,null);
}

const isEmptyQueue = q=> {
    return null === frontPtr(q);
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

module.exports = {
    makeQueue,
    insertQueue,
    deleteQueue,
    isEmptyQueue,
    frontQueue
}