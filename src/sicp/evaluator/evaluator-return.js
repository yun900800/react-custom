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

const makeReturnValue = value => {
    return list('return_value', value);
}

const isReturnStatement = component =>{
    return isTaggedList(component, "return_value");
}

const returnExpression = component => {
    return head(tail(component))
}

module.exports = {
    makeReturnValue,
    isReturnStatement,
    returnExpression
}

