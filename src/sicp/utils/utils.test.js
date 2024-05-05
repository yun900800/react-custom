import {
    map,
    append,
    forEach,
    filter,
    acculator,
    gcd,
    lastPair
} from './utils';

import {
    list,
    printList
} from '../list/list';

import {
    head
} from '../pair/pair'

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
    });

    it('acculator test',()=> {
        const list1 = list(1,2,3,4);
        const list2 = map(item=>item*item, list1);
        const list3 = append(list1,list2);
        const result = acculator((a,b)=>a+b,0,list3);
        expect(result).toEqual(40);
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
});