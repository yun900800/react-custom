import {
    map,
    append,
    forEach,
    filter,
    acculator
} from './utils';

import {
    list,
    printList
} from '../list/list';

describe('utils test',()=> {
    it('list map to another list',()=>{
        const list1 = list(1,2,3,4);
        const list2 = map(item=>item*item, list1);
        const result = printList(list2);
        expect('1,4,9,16').toEqual(result);
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
});