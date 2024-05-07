import {
    sumOddSquare,
    evenFib,
    sumOddSquareNew,
    evenFibNew,
    listFibSquare,
    hornorEval,
    headN,
    tailN,
    acculatorN,
    dotProduct,
    matrixTimesVector,
    transpose
} from './conventional';

import {
    list,
    printList
}  from '../list/list';

import {
    printTrees
} from '../tree/tree';

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

    it('headN test',()=> {
        const tree1 = list(list(1,2,3),list(4,5,6),list(7,8,9),list(10,11,12));
        const list1 = headN(tree1);
        const result = printList(list1);
        expect('1,4,7,10').toEqual(result);
    });
    it('tailN test',()=> {
        const tree1 = list(list(1,2,3),list(4,5,6),list(7,8,9),list(10,11,12));
        const list1 = tailN(tree1);
        let result = printTrees(list1);
        expect('2 ===> 3 ===> 5 ===> 6 ===> 8 ===> 9 ===> 11 ===> 12').toEqual(result);
        const list2 = tailN(list1);
        result = printTrees(list2);
        expect('3 ===> 6 ===> 9 ===> 12').toEqual(result);
    });

    it('acculatorN test',()=> {
        const tree1 = list(list(1,2,3),list(4,5,6),list(7,8,9),list(10,11,12));
        const list1 = acculatorN((a,b)=>a+b,0,tree1);
        const result = printList(list1);
        expect('22,26,30').toEqual(result);
    });

    it('dotProduct test',()=> {
        const v1 = list(1,2,3,4);
        const w1 = list(5,6,7,8);
        const result = dotProduct(v1,w1);
        expect(result).toEqual(70);
    });
    it('matrixTimesVector test',()=> {
        const m1 = list(list(1,2,3,4),list(4,5,6,6),list(6,7,8,9));
        const v1 = list(1,2,3,4);
        const list1 = matrixTimesVector(m1,v1);
        expect('30,56,80').toEqual(printList(list1));
    });

    it('transpose test',()=> {
        const m1 = list(list(1,2,3,4),list(4,5,6,6),list(6,7,8,9));
        const m2 = transpose(m1);
        const result = printTrees(m2);
        expect('1 ===> 4 ===> 6 ===> 2 ===> 5 ===> 7 ===> 3 ===> 6 ===> 8 ===> 4 ===> 6 ===> 9').toEqual(result);
    });
});