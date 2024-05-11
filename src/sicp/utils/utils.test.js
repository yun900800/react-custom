import {
    map,
    append,
    forEach,
    filter,
    acculator,
    gcd,
    lastPair,
    fibIter,
    enumerate,
    enumerateTree,

    anotherMap,
    anotherAppend,
    anotherLength,

    foldLeft,
    foldRight,

    generatePair,
    primeSumPair,
    permutations,
    uniquePair,
    primeSumPairNew,

    isEmptyList,
    apply_in_underlying_javascript
} from './utils';

import {
    list,
    printList
} from '../list/list';

import {
    head,
    pair
} from '../pair/pair';

import {
    printTrees
} from '../tree/tree'

describe('utils test',()=> {
    it('list map to another list',()=>{
        const list1 = list(1,2,3,4);
        const list2 = map(item=>item*item, list1);
        const result = printList(list2);
        expect('1,4,9,16').toEqual(result);

        const list3 = list(1,2,null,4)
        const list4 = map(item=>item*item, list3);
        const result1 = printList(list4);
        expect('1,4,0,16').toEqual(result1);

        const list5 = list(-11,-2,null,4);
        const list6 = map(Math.abs, list5);
        const result2 = printList(list6);
        expect('11,2,0,4').toEqual(result2);
    });

    it('append test', ()=> {
        const list1 = list(1,2,3,4);
        const list2 = map(item=>item*item, list1);
        const list3 = append(list1,list2);
        const result = printList(list3);
        expect('1,2,3,4,1,4,9,16').toEqual(result);
    });

    it('forEach test',()=> {
        const list1 = list(1,2,3,4);
        const list2 = map(item=>item*item, list1);
        forEach(item=>{
            item = item*10;
        },
        list2);
    });
    it('filter test',()=> {
        const list1 = list(1,2,3,4);
        const list2 = map(item=>item*item, list1);
        const list3 = append(list1,list2);
        const result = filter(item=> item %2 ===1, list3);
        expect('1,3,1,9').toEqual(printList(result));

        const list5 = list(null);
        expect(list5).toBeNull();
    });

    it('acculator test',()=> {
        const list1 = list(1,2,3,4);
        const list2 = map(item=>item*item, list1);
        const list3 = append(list1,list2);
        const result = acculator((a,b)=>a+b,0,list3);
        expect(result).toEqual(40);

        const list4 = acculator(pair,null, list(1,2,3,4));
        expect('1,2,3,4').toEqual(printList(list4))
    });

    it('gcd test',()=> {
        let result = gcd(4,8);
        expect(4).toEqual(result);
        result = gcd(3,7);
        expect(1).toEqual(result);
        result = gcd(0,3);
        expect(3).toEqual(result);
        result = gcd(null,3);
        expect(3).toEqual(result);
        expect(()=>{
            gcd(undefined,3)
        }).toThrow('Maximum call stack size exceeded');
    
    });

    it('lastPair test',()=> {
        const list1 = list(1,2,3,4);
        expect(head(lastPair(list1))).toEqual(4)
    });

    it('fibIter test',()=> {
        const fib4 = fibIter(4);
        expect(5).toEqual(fib4);
    });
    it('enumerate test',()=> {
        const list1 = enumerate(1,10);
        expect('1,2,3,4,5,6,7,8,9,10').toEqual(printList(list1));
    });
    it('enumerate foreach test',()=> {
        const list1 = enumerate(1,10);

        const list2 = map(item=>{
            return fibIter(item);
        },list1);
        expect('1,2,3,5,8,13,21,34,55,89').toEqual(printList(list2));
    });

    it('enumerateTree test',()=> {
        const list1 = enumerateTree(list(1, list(2, list(3,4)), 5));
        expect('1,2,3,4,5').toEqual(printList(list1));
    });

    it('anotherMap test',()=>{
        const list1 = list(1,2,3,4,5);
        const list2 = anotherMap(item=>item*10, list1);
        expect('10,20,30,40,50').toEqual(printList(list2))
    });

    it('anotherAppend test',()=> {
        const list1 = list(1,2,3);
        const list2 = list(4,5,6);
        const list3 = anotherAppend(list1,list2);
        expect('1,2,3,4,5,6').toEqual(printList(list3))
    });
    it('anotherLength test',()=> {
        const list1 = list(1,2,3);
        expect(anotherLength(list1)).toEqual(3)
    });

    it('foldLeft test',()=> {
        const leftValue = foldLeft((a,b)=>a/b, 1, list(1,2,3));
        expect(0.16666666666666666).toEqual(leftValue);

        const list1 = foldLeft(list,null,list(1,2,3));
        expect('1 ===> 2 ===> 3').toEqual(printTrees(list1));
    });

    it('foldRight test',()=> {
        const rightValue = foldRight((a,b)=>a/b, 1, list(1,2,3));
        expect(1.5).toEqual(rightValue);
        const list1 = foldRight(list,null,list(1,2,3));
        expect('1 ===> 2 ===> 3').toEqual(printTrees(list1));
    });

    it('generatePair test',()=> {
        const list1 = generatePair(3);
        const result = printTrees(list1);
        expect('2 ===> 1 ===> 3 ===> 1 ===> 3 ===> 2').toEqual(result);
    });

    it('primeSumPair test',()=> {
        const list1 = primeSumPair(6);
        const result = printTrees(list1);
        expect('2 ===> 1 ===> 3 ===> 3 ===> 2 ===> 5 ===> 4 ===> 1 ===> 5 ===> 4 ===> 3 ===> 7 ===> 5 ===> 2 ===> 7 ===> 6 ===> 1 ===> 7 ===> 6 ===> 5 ===> 11')
            .toEqual(result);
    });

    it('permutations test',()=> {
        const list1 = permutations(list(1,2,3));
        const result = printTrees(list1);
        expect('1 ===> 2 ===> 3 ===> empty ===> 1 ===> 3 ===> 2 ===> empty ===> 2 ===> 1 ===> 3 ===> empty ===> 2 ===> 3 ===> 1 ===> empty ===> 3 ===> 1 ===> 2 ===> empty ===> 3 ===> 2 ===> 1 ===> empty')
            .toEqual(result);
    });
    it('uniquePair test',()=> {
        const tree1 = uniquePair(4);
        let result = printTrees(tree1);
        expect('2 ===> 1 ===> 3 ===> 1 ===> 3 ===> 2 ===> 4 ===> 1 ===> 4 ===> 2 ===> 4 ===> 3').toEqual(result);
        const tree2 = uniquePair(6);
        result = printTrees(tree2);
        expect(
            '2 ===> 1 ===> 3 ===> 1 ===> 3 ===> 2 ===> 4 ===> 1 ===> 4 ===> 2 ===> 4 ===> 3 ===> 5 ===> 1 ===> 5 ===> 2 ===> 5 ===> 3 ===> 5 ===> 4 ===> 6 ===> 1 ===> 6 ===> 2 ===> 6 ===> 3 ===> 6 ===> 4 ===> 6 ===> 5'
        ).toEqual(result);
    });

    it('primeSumPairNew test',()=>{
        const list1 = primeSumPairNew(6);
        const result = printTrees(list1);
        expect('2 ===> 1 ===> 3 ===> 3 ===> 2 ===> 5 ===> 4 ===> 1 ===> 5 ===> 4 ===> 3 ===> 7 ===> 5 ===> 2 ===> 7 ===> 6 ===> 1 ===> 7 ===> 6 ===> 5 ===> 11')
            .toEqual(result);
    });

    it('isEmptyList test',()=> {
        expect(isEmptyList([])).toBeTruthy();
        expect(isEmptyList(null)).toBeTruthy();
        expect(isEmptyList(undefined)).toBeTruthy();
    });

    it('apply_in_underlying_javascript test',()=>{
        const result = apply_in_underlying_javascript((a,b,c)=>{
            return a*b*c;
        },list(3,5,8));
        expect(result).toEqual(120);
    })
});