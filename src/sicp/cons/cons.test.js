import {
    cons,
    cons1,
    car,
    cdr,
    isCons,
    listFromCons,
    printList,
    display,
    isList
} from './cons';

describe('cons test',()=> {
    it('make cons test',()=> {
        const c1 = cons('a','b');
        expect('a').toEqual(car(c1));
    });
    it('car cons test',()=> {
        const c1 = cons('a1','b');
        expect('a1').toEqual(car(c1));
    });
    it('cdr cons test',()=> {
        const c1 = cons('a1','b');
        expect('b').toEqual(cdr(c1));
    });

    it('isCons predict test',()=> {
        const c1 = cons('a1','b');
        expect(isCons(c1)).toBeTruthy();
    });

    it('cons1 test',()=>{
        const c1 = cons1('a','b');
        expect('a').toEqual(car(c1));
    });

    it('listFromCons and printList',()=> {
        const list1 = listFromCons(1,2,3,4);
        expect('1,2,3,4').toEqual(printList(list1));
    });

    it('display list',()=> {
        const list1 = listFromCons(1,2,3,4);
        display('('+ printList(list1)+')');
    });

    it('isList test', ()=> {
        const list1 = listFromCons(1,2,3,4);
        expect(isList(list1)).toBeTruthy();
        const list2 = listFromCons(list1, 5,6,7);
        expect(isList(list2)).toBeFalsy();
    });
});