import { 
    head,
    tail
 } from '../pair/pair';
import {
    list,
    printList,
    isList
} from './list';

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
});