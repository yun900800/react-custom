import {
    makeUnaryCombination,
    makeBinaryCombination,
    isUnaryOperatorCombination,
    isBinaryOperatorCombination,
    isOperatorCombination,
    operatorSymbal,
    firstOperand,
    secondOperand
} from './evaluator-combination';

import {
    makeName
} from './evaluator-name';

describe('evaluator-combination test',()=>{
    it('makeUnaryCombination test',()=>{
        const negative = makeName('-');
        const unaryCombination = makeUnaryCombination(negative,5);
        expect(isUnaryOperatorCombination(unaryCombination)).toBeTruthy();
        expect(isBinaryOperatorCombination(unaryCombination)).toBeFalsy();
        expect(isOperatorCombination(unaryCombination)).toBeTruthy();
        expect(operatorSymbal(unaryCombination)).toEqual('-');
        expect(firstOperand(unaryCombination)).toEqual(5);
    });

    it('makeBinaryCombination test',()=>{
        const plus = makeName('+');
        const binaryCombination = makeBinaryCombination(plus,5,3);
        expect(isUnaryOperatorCombination(binaryCombination)).toBeFalsy();
        expect(isBinaryOperatorCombination(binaryCombination)).toBeTruthy();
        expect(isOperatorCombination(binaryCombination)).toBeTruthy();
        expect(operatorSymbal(binaryCombination)).toEqual('+');
        expect(firstOperand(binaryCombination)).toEqual(5);
        expect(secondOperand(binaryCombination)).toEqual(3);
    });
});