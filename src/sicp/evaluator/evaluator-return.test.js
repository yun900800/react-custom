import {
    makeReturnValue,
    isReturnStatement,
    returnExpression
} from './evaluator-return';

describe('evaluator-return test',()=>{
    it('makeReturnValue test',()=>{
        const returnValue = makeReturnValue('undefined');
        expect(isReturnStatement(returnValue)).toBeTruthy();
        expect(returnExpression(returnValue)).toEqual('undefined'); 
    });
});