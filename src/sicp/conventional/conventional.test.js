import {
    sumOddSquare,
    evenFib,
    sumOddSquareNew,
    evenFibNew,
    listFibSquare,
    hornorEval
} from './conventional';

import {
    list,
    printList
}  from '../list/list';

describe('conventional test',()=> {
    it('sumOddSquare test',()=> {
        const tree1 = list(1, list(2,3),4);
        const sum1 = sumOddSquare(tree1);
        expect(sum1).toEqual(10);
    });
    it('evenFib test',()=> {
        const list1 = evenFib(10);
        expect('2,8,34').toEqual(printList(list1));
        const list2 = evenFib(20);
        expect('2,8,34,144,610,2584,10946').toEqual(printList(list2));
    });

    it('sumOddSquareNew test',()=>{
        const tree1 = list(1, list(2,3),4,5);
        const sum1 = sumOddSquareNew(tree1);
        expect(sum1).toEqual(35);
    });
    it('evenFibNew test',()=> {
        const list1 = evenFibNew(10);
        expect('2,8,34').toEqual(printList(list1));
        const list2 = evenFibNew(20);
        expect('2,8,34,144,610,2584,10946').toEqual(printList(list2));
    });

    it('listFibSquare test',()=> {
        const list1 = listFibSquare(10);
        expect('1,1,4,9,25,64,169,441,1156,3025,7921').toEqual(printList(list1));
    });

    it('hornorEval test',()=>{
        const result = hornorEval(2, list(1,3,0,5,0,1));
        expect(result).toEqual(79);
    });
});