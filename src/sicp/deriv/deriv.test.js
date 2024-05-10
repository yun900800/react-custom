import {
    numberEqual,
    makeSum,
    addend,
    augend,
    makeProcut,
    multiplier,
    multiplicand,
    makeExponentiation,
    base,
    exponent,
    deriv,

    makeSumNew,
    addendNew,
    aguendNew,
    sumNew
} from './deriv';

import {
    list,
    printList
} from '../list/list';

import {
    printTrees
} from '../tree/tree'
describe('deriv test',()=>{

    it('numberEqual test',()=>{
        expect(numberEqual(5,5.0)).toBeTruthy();
        expect(numberEqual(0,null)).toBeFalsy();
        expect(numberEqual(0,undefined)).toBeFalsy();
        expect(numberEqual(5,'5')).toBeFalsy();
    });

    it('makeSum, addend, augend test',()=> {
        const listSum = makeSum('x','5');
        expect(addend(listSum)).toEqual('x');
        expect(augend(listSum)).toEqual('5')
    })

    it('makeProcut, multiplier, multiplicand test',()=> {
        const listProduct = makeProcut('x','5');
        expect(multiplier(listProduct)).toEqual('x');
        expect(multiplicand(listProduct)).toEqual('5')
    });

    it('makeExponentiation, base, exponent test',()=> {
        const listExponentiation = makeExponentiation('x','5');
        expect(base(listExponentiation)).toEqual('x');
        expect(exponent(listExponentiation)).toEqual('5')
    });

    it('deriv test',()=>{
        const exp1 = list("+", "x", 3);
        let result = deriv(exp1, "x");
        expect(result).toEqual(1)
        const exp2 = list("*", "x", "y");
        result = deriv(exp2, "x");
        expect(result).toEqual('y');
        result = deriv(exp2, "y");
        expect(result).toEqual('x');

        const exp3 = list('*',list('*','x','y'), list('+','x','3'));
        result = deriv(exp3, "y");
        expect('* ===> + ===> x ===> 3 ===> x').toEqual(printTrees(result));
        result = deriv(exp3, "x");
        expect('+ ===> * ===> x ===> y ===> * ===> + ===> x ===> 3 ===> y').toEqual(printTrees(result));
    });

    it('deriv exponent test', ()=> {
        const exp1 = list('**','x','5');
        let result = deriv(exp1, "x");
        expect('* ===> 5 ===> ** ===> x ===> 4').toEqual(printTrees(result));

        const exp2 = list('**','x','y');
        result = deriv(exp2, "x");
        expect('* ===> y ===> ** ===> x ===> y-1').toEqual(printTrees(result));

    });

    it('makeSumNew, addendNew, aguendNew test',()=> {
        const listSum = makeSumNew('x','5');
        expect(addendNew(listSum)).toEqual('x');
        expect(aguendNew(listSum)).toEqual('5');

        const listSum1 = makeSumNew('x','y','8');
        expect(addendNew(listSum1)).toEqual('x');
        const sumTemp = aguendNew(listSum1);
        expect(addendNew(sumTemp)).toEqual('y');
        expect(aguendNew(sumTemp)).toEqual('8');
    })
})