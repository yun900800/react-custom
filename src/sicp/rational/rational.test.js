import {
    addRat,
    subRat,
    mulRat,
    divRat,
    equal,
    printRat,
    makeRat,
    numer,
    denom
} from './rational';

describe('rational test',()=> {
    it('makeRat test',()=> {
        const rat1 = makeRat(4,6);
        expect(numer(rat1)).toEqual(2);
        expect(denom(rat1)).toEqual(3);

        const rat2 = makeRat(null,3);
        expect(numer(rat2)).toEqual(0);
        expect(denom(rat2)).toEqual(1);
        
        expect(()=>{
            makeRat(undefined,3)
        }).toThrow('Maximum call stack size exceeded');
    });
    it('addRat test',()=> {
        const rat1 = makeRat(4,6);
        const rat2 = makeRat(4,5);
        const result = addRat(rat1,rat2);
        expect(numer(result)).toEqual(22);
        expect(denom(result)).toEqual(15);
    });
    it('mulRat test',()=> {
        const rat1 = makeRat(4,6);
        const rat2 = makeRat(4,5);
        const result = mulRat(rat1,rat2);
        expect(numer(result)).toEqual(8);
        expect(denom(result)).toEqual(15);
    });
    
    it('subRat test',()=> {
        const rat1 = makeRat(4,6);
        const rat2 = makeRat(4,5);
        const result = subRat(rat1,rat2);
        expect(numer(result)).toEqual(-2);
        expect(denom(result)).toEqual(15);
    });

    it('divRat test',()=> {
        const rat1 = makeRat(4,6);
        const rat2 = makeRat(4,5);
        const result = divRat(rat1,rat2);
        expect(numer(result)).toEqual(5);
        expect(denom(result)).toEqual(6);
    });

    it('equal test',()=> {
        const rat1 = makeRat(4,6);
        const rat2 = makeRat(2,3);
        expect(equal(rat1,rat2)).toBeTruthy();
    });
    
    it('printRat test',()=> {
        const rat1 = makeRat(4,37);
        const rat2 = makeRat(2,3);
        printRat(divRat(rat1,rat2));
    });
});