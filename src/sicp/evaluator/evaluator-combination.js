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

import { symbolOfName } from './evaluator-name';

const makeUnaryCombination = (unaryOperator,expression) => {
    // unaryOperator = ! and - 
    return list('unary_operator_combination',unaryOperator,list(expression))
}

const makeBinaryCombination = (binaryOperator,expression1, expression2) => {
    // binaryOperator = +, -, *, /, %, ===, !==, >, <, >= or <=
    return list('binary_operator_combination',binaryOperator,list(expression1,expression2))
}

const isUnaryOperatorCombination = component => {
    return isTaggedList(component,'unary_operator_combination');
}

const isBinaryOperatorCombination = component => {
    return isTaggedList(component,'binary_operator_combination');
}

const isOperatorCombination = component =>{
    return isUnaryOperatorCombination(component) || isBinaryOperatorCombination(component);
}

const operatorSymbal = component => {
    return symbolOfName(head(tail(component)));
}

const firstOperand = component => {
    return head(head(tail(tail(component))));
}

const secondOperand = component => {
    return head(tail(head(tail(tail(component)))));
}

module.exports = {
    makeUnaryCombination,
    makeBinaryCombination,
    isUnaryOperatorCombination,
    isBinaryOperatorCombination,
    isOperatorCombination,
    operatorSymbal,
    firstOperand,
    secondOperand
}