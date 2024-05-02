import {
    cons,
    cons1,
    car,
    cdr,
    isCons,
    setCar,
    setCdr,
    cons2,
    setCar2,
    car2
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
});