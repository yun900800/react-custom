import {
    makeLambdaExpression,
    isLambdaExpression,
    lambdaBody,
    lambdaParameterSymbols,
    lambdaParameters
} from './evaluator-lambda';

import {
    makeName
} from './evaluator-name';

import {
    head,
    tail
} from '../pair/pair';

import {
    list
} from '../list/list';

import {
    makeBinaryCombination
} from './evaluator-combination';

describe('evaluator-lambda test',()=>{
    it('makeLambdaExpression test',()=>{
        const symbolParameter1 = makeName('parameter1');
        const symbolParameter2 = makeName('parameter2');
        const parameters = list(symbolParameter1,symbolParameter2);

        const plus = makeName('+');
     
        const binaryCombination = makeBinaryCombination(plus,symbolParameter1,symbolParameter2);

        const lambda1 = makeLambdaExpression(parameters,binaryCombination);
        expect(isLambdaExpression(lambda1)).toBeTruthy();
        expect(lambdaParameters(lambda1)).toEqual(parameters);
        const listParameters = lambdaParameterSymbols(lambda1);
        expect(head(listParameters)).toEqual('parameter1');
        expect(head(tail(listParameters))).toEqual('parameter2');
        expect(lambdaBody(lambda1)).toEqual(binaryCombination);
    });
});