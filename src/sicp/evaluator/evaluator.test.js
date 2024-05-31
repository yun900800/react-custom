import {
    evalConditional,
    evaluate,
    apply
} from  './evaluator';

import {
    list
} from '../list/list';

describe('evaluator test',()=>{


    it('makeApplication test',()=>{
        expect(true).toBeTruthy();
    });
});

describe('evaluate test',()=>{
    it('evaluate literal test',()=>{
        let component = list('literal',1);
        expect(evaluate(component, null)).toEqual(1);
        component = list('literal','hello world');
        expect(evaluate(component, null)).toEqual('hello world');
        component = list('literal',null);
        expect(evaluate(component, null)).toBeNull();
    });
});