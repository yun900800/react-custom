import { printListJs, head, tail, listJs } from './sicp';
import {
    put,
    get
} from '../state/table'

import {
    addComplex,
    subComplex,
    mulComplex,
    divComplex,
    makeFromMagAng,
    makeFromRealImag,
    contents,
    installRectangularPackage,
    installPolarPackage,
    applyGeneric
} from './complex';

describe('complext test' ,()=>{
    
    it('addComplex test',()=>{ 
        const complex1 = makeFromRealImag(3,5);
        const complex2 = makeFromRealImag(4,6);
        const added = addComplex(complex1,complex2);
        const complex3 = contents(added);
        expect(7).toEqual(head(complex3));
        expect(11).toEqual(tail(complex3));
    });

    it('subComplex test',()=>{ 
        const complex1 = makeFromRealImag(3,5);
        const complex2 = makeFromRealImag(4,6);
        const added = subComplex(complex1,complex2);
        const complex3 = contents(added);
        expect(-1).toEqual(head(complex3));
        expect(-1).toEqual(tail(complex3));
    });

    it('mulComplex test',()=>{
        const complex1 = makeFromMagAng(3,5);
        const complex2 = makeFromMagAng(4,6);
        const added = mulComplex(complex1,complex2);
        const complex3 = contents(added);
        expect(12).toEqual(head(complex3));
        expect(11).toEqual(tail(complex3));
    });

    it('divComplex test',()=>{
        const complex1 = makeFromMagAng(3,5);
        const complex2 = makeFromMagAng(4,6);
        const added = divComplex(complex1,complex2);
        const complex3 = contents(added);
        expect(0.75).toEqual(head(complex3));
        expect(-1).toEqual(tail(complex3));
    });

    it('addComplex two different test ',()=>{
        const complex1 = makeFromRealImag(3,5);
        const complex2 = makeFromMagAng(4,6);
        const added = addComplex(complex1,complex2);
        const complex3 = contents(added);
        expect(6.840681146601464).toEqual(head(complex3));
        expect(3.8823380072042966).toEqual(tail(complex3));
    })
});

describe('applyGeneric function test',()=> {
    
    it('applyGeneric test',()=> {
        installRectangularPackage();
        installPolarPackage();
        const z1 = get("make_from_real_imag", "rectangular")(5, 8);
        expect('rectangular').toEqual(head(z1));
        expect(5).toEqual(head(tail(z1)));
        expect(8).toEqual(tail(tail(z1)));
        const result = applyGeneric("real_part", listJs(z1));
        expect(5).toEqual(result);
    });
})