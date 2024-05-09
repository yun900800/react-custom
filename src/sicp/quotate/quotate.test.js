import {
    member,
    isEqual
} from './quotate';
import {
    list,
    printList,
    isList
} from '../list/list';

describe('quotate test',()=>{

    it('member test',()=>{
        const list1 = list('pear','banana','prune');
        const x = 'apple';
        expect(member(x,list1)).toBeFalsy();
        const list2 = list('x', list('apple','sauce'),'y','apple','pear');
        const list3 = member(x,list2);
        expect(list3).toBeTruthy();
        const result = printList(list3);
        expect('apple,pear').toEqual(result);
    });

    it('isEqual test',()=>{
        expect(isEqual('3','3')).toBeTruthy();
        expect(isEqual(list(1,2,3),list(1,2,3))).toBeTruthy();
    });
    it('isList test',()=>{
        const list1 = list(1,2,3);
        expect(isList(list1)).toBeTruthy();
        expect(isList(3)).toBeFalsy();
    });
});