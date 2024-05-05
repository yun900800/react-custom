import {
    printTree,
    countTree,
    printTrees
} from './tree';

import {
    pair
} from '../pair/pair';

import {
    list,
    squareListWithIter1,
    printList
} from '../list/list';

import {
    append
} from '../utils/utils'

describe('tree test',()=> {
    it('countTree test',()=>{
        const list1 = list(2,4,8,16);
        const list2 = squareListWithIter1(list1);
        expect(countTree(list2)).toEqual(4);
    });

    it('printTrees test',()=>{
        const list1 = list(2,4,8,16);
        const list2 = squareListWithIter1(list1);
        let result = printTrees(list2);
        expect('4 ===> 16 ===> 64 ===> 256').toEqual(result);

        const list3 = list(1, list(2, list(3, 4)));
        result = printTrees(list3);
        expect('1 ===> 2 ===> 3 ===> 4').toEqual(result);
    });

    it('pair append list test',()=> {
        const list1 = list(1,2,3);
        const list2 = list(4,5,6);
        const list3 = append(list1,list2);
        expect('1,2,3,4,5,6').toEqual(printList(list3));

        const list4 = pair(list1,list2);
        let result = printTrees(list4);
        expect('1 ===> 2 ===> 3 ===> 4 ===> 5 ===> 6').toEqual(result);
        
        const list5 = list(list1,list2);
        result = printTrees(list5);
        expect('1 ===> 2 ===> 3 ===> 4 ===> 5 ===> 6').toEqual(result);
    })
});