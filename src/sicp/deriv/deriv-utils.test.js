import {
    isString,
    isNumber,
    isVariable,
    isSameVariable,
    isSum,
    isProduct,
    isInteger,
    singleOperand
} from './deriv-utils';

import {
    list
} from '../list/list'

describe('deriv-utils test',()=>{
    it('isNumber test',()=>{
        expect(isNumber(5)).toBeTruthy();
        expect(isNumber(0)).toBeTruthy();
        expect(isNumber(null)).toBeFalsy();
        expect(isNumber(undefined)).toBeFalsy();
        expect(isNumber('5')).toBeFalsy();
    });
    it('isString test',()=>{
        expect(isString(5)).toBeFalsy();
        expect(isString('test')).toBeTruthy();
        expect(isString('%aaa')).toBeTruthy();
    });

    it('isVariable test',()=>{
        expect(isVariable(5)).toBeFalsy();
        expect(isVariable('test')).toBeTruthy();
        expect(isVariable('var a')).toBeTruthy();
    });

    //这里判断一个字符是否变量需要优化
    it('isSameVariable test',()=> {
        expect(isSameVariable('a1','a2')).toBeFalsy();
        expect(isSameVariable('5','5')).toBeTruthy();
        expect(isSameVariable('x','x')).toBeTruthy();
        expect(isSameVariable(5,5)).toBeFalsy();
    });

    it('isSum test',()=>{
        const sumList = list('+','x',3);
        expect(isSum(sumList)).toBeTruthy();
        const unumList = list('-','x',3);
        expect(isSum(unumList)).toBeFalsy();
        const unumList1 = list('+','x');
        expect(isSum(unumList1)).toBeTruthy();
    });

    it('isProduct test',()=>{
        const sumList = list('*','x',3);
        expect(isProduct(sumList)).toBeTruthy();
        const unumList = list('/','x',3);
        expect(isProduct(unumList)).toBeFalsy();
        const unumList1 = list('*','x');
        expect(isProduct(unumList1)).toBeTruthy();
    });

    it('isInteger test',()=> {
        expect(isInteger('5')).toBeTruthy();
        expect(isInteger('a')).toBeFalsy();
    });

    it('singleOperand test',()=> {
        expect(singleOperand(list('a',null))).toBeTruthy();
    })

});