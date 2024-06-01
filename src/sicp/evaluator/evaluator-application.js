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

/**
 * 构建函数对象
 * @param {*} functionExpression 
 * @param {*} argumentExpressions 
 * @returns 
 */
const makeApplication = (functionExpression, argumentExpressions) =>{
    return list('application',functionExpression, argumentExpressions);
}

const isApplication = component => {
    return isTaggedList(component, "application");
}

const functionExpression = component => {
    return head(tail(component));
}

const argExpressions = component => {
    return head(tail(tail(component)))
}

module.exports = {
    makeApplication,
    isApplication, 
    functionExpression,
    argExpressions
}