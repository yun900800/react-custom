import { 
    head,
    pair,
    tail
 } from '../pair/pair';
import {
    list,
    printList,
    isList,
    listRef,
    length,
    reverse,
    sameParity,
    squareList,
    squareListWithMap,
    squareListWithIter,
    squareListWithIterRightOrder,
    squareListWithIterLeftOrder,
    squareListWithIter1
} from './list';

import {
    printTree
} from '../tree/tree'

describe('list test', ()=> {
    it('make list test',()=> {
        const list1 = list(1,2,3,4);
        expect('1,2,3,4').toEqual(printList(list1));
    });

    it('isList and printList test',()=> {
        const list1 = list(1,2,3,4);
        expect(isList(list1)).toBeTruthy();
        const list2 = list(6,list1);
        expect(isList(list2)).toBeTruthy();
        expect(6).toEqual(head(list2));
        //这里的tail返回的值是一个list,需要head才能获取最新的值
        expect('1,2,3,4').toEqual(printList(head(tail(list2))));
    });

    it('list pair test',()=> {
        const list1 = list(1,2,3,4);
        const list2 = pair(10,list1);
        expect('10,1,2,3,4').toEqual(printList(list2));
    });

    it('listRef test',()=> {
        const list1 = list(1,2,3,4);
        const list2 = pair(10,list1);
        expect(3).toEqual(listRef(list2,3));
        expect(10).toEqual(listRef(list2,0));

        expect(listRef(list1,1)).toEqual(listRef(list2,2));
    });

    it('length test',()=>{
        const list1 = list(1,2,3,4);
        const list2 = pair(10,list1);
        expect(length(list1)).toEqual(4);
        expect(length(list2)).toEqual(5);
    });

    it('reverse test',()=> {
        const list1 = list(1,2,3,4);
        const list2 = pair(10,list1);
        const reverseList1 = reverse(list1);
        const reverseList2 = reverse(list2);
        expect('4,3,2,1').toEqual(printList(reverseList1));
        expect('4,3,2,1,10').toEqual(printList(reverseList2));
    });

    it('sameParity test',()=>{
        let result = sameParity(1,2,3,4,5,6,7);
        expect('1,3,5,7').toEqual(printList(result));
        result = sameParity(2,3,4,5,6,7);
        expect('2,4,6').toEqual(printList(result));
    });

    it('squareList test',()=> {
        const list1 = list(1,2,3,4);
        expect(printList(squareList(list1))).toEqual('1,4,9,16')
    });

    it('squareListWithMap test',()=> {
        const list1 = list(2,4,8,16);
        expect(printList(squareListWithMap(list1))).toEqual('4,16,64,256')
    });

    it('squareListWithIter test',()=>{
        const list1 = list(2,4,8,16);
        const list2 = squareListWithIter(list1);
        expect('256,64,16,4').toEqual(printList(list2));
    });
    it('squareListWithIterRightOrder test',()=>{
        const list1 = list(2,4,8,16);
        const list2 = squareListWithIterRightOrder(list1);
        expect('4,16,64,256').toEqual(printList(list2));
    });
    it('squareListWithIterLeftOrder test',()=>{
        const list1 = list(2,4,8,16);
        const list2 = squareListWithIterLeftOrder(list1);
        expect('4,16,64,256').toEqual(printList(list2));
    });
    it('squareListWithIter1 test',()=>{
        const list1 = list(2,4,8,16);
        const list2 = squareListWithIter1(list1);
        printTree(list2);
    })

});