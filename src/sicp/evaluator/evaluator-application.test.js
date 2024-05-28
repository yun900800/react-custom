import {
    makeApplication,
    isApplication, 
    functionExpression,
    argExpressions
} from './evaluator-application';
describe('evaluator-application test',()=>{
    it('makeApplication test',()=>{
        const application1 = makeApplication('fn',5);
        expect(isApplication(application1));
        expect(functionExpression(application1)).toEqual('fn');
        expect(argExpressions(application1)).toEqual(5);
    });
})