import {
    head,
    tail
} from '../pair/pair';

import {
    list
} from '../list/list';
import {
    isTaggedList
} from  './evaluator-utils';

const makeBlock = (...blockbody) => {
    return list('block',blockbody);
}

const isBlock = component =>{
    return isTaggedList(component,'block');
}

const blockBody = component => {
    return head(tail(component));
}

const listOfUnassigned = symbols => {
    return map(symbol => "*unassigned*", symbols);
}

module.exports = {
    makeBlock,
    isBlock,
    blockBody,
    listOfUnassigned
}