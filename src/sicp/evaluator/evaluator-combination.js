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

const makeUnaryCombination = expression => {
    return list('unary_operator_combination','unary-operator',list(expression))
}

const makeBinaryCombination = (expression1, expression2) => {
    return list('binary_operator_combination','binary-operator',list(expression1,expression2))
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
    return head(tail(component))
}

const firstOperand = component => {
    return head(tail(tail(component)))
}

const secondOperand = component => {
    return tail(tail(tail(component)))
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