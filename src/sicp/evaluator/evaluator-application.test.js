import {
    makeApplication,
    isApplication, 
    functionExpression,
    argExpressions
} from './evaluator-application';

import {
    makeName
} from './evaluator-name';
import {
    list
} from '../list/list';
describe('evaluator-application test',()=>{
    it('makeApplication test',()=>{
        const application1 = makeApplication('fn',5);
        expect(isApplication(application1));
        expect(functionExpression(application1)).toEqual('fn');
        expect(argExpressions(application1)).toEqual(5);
    });

    it('makeApplication with symbol test',()=>{
        const fnSymbol = makeName('createOrder');
        const argExps = list(5,8);
        const createOrderApp = makeApplication(fnSymbol,argExps);
        expect(isApplication(createOrderApp));
        expect(functionExpression(createOrderApp)).toEqual(fnSymbol);
        expect(argExpressions(createOrderApp)).toEqual(argExps);
    });
})