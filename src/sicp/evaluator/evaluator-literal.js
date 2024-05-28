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
 * component是否是一个字面量,比如string number
 * @param {*} component 
 */
const isLiteral = component => {
    return isTaggedList(component, "literal");
}
/**
 * 获取字面量的值
 * @param {*} component 
 * @returns 
 */
const literalValue = component => {
    return head(tail(component));
}

/**
 * 构建字面量对象
 * @param {*} value 
 * @returns 
 */
const makeLiteral = (value) => {
    return list("literal", value);
}

module.exports = {
    isLiteral,
    literalValue,
    makeLiteral
}