import {
    evalConditional,
    evaluate,
    apply
} from  './evaluator';

import {
    theGlobalEnvironment
} from './evaluator-global';

import {
    makeName
} from './evaluator-name';

import {
    makeBinaryCombination
} from './evaluator-combination';

import {
    list
} from '../list/list';
import {
    head,
    tail,
    pair,
} from '../pair/pair';

import {
    makeLiteral
} from './evaluator-literal';

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

    it('evaluate name test from enviroment',()=>{
        const headSymbol = makeName('head');
        let value = evaluate(headSymbol,theGlobalEnvironment);
        // 注意这里的取值是primitiveFunctionObjects对象
        expect(head).toEqual(head(tail(value)));

        const pairSymbol = makeName('pair');
        value =  evaluate(pairSymbol,theGlobalEnvironment);
        expect(pair).toEqual(head(tail(value)));
    });

    it('evaluate isOperatorCombination test from enviroment',()=>{
        const plus = makeName('+');
        const literal5 = makeLiteral(5);
        const literal3 = makeLiteral(3)
        const binaryCombination = makeBinaryCombination(plus,literal5,literal3);
        let value = evaluate(binaryCombination,theGlobalEnvironment);
        expect(value).toEqual(8);

        const pairSymbol = makeName('&&');
        const pairCombination = makeBinaryCombination(pairSymbol,literal5,literal3);
        value = evaluate(pairCombination,theGlobalEnvironment);
        expect(value).toEqual(3);
    });
});