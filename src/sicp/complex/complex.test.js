import {
    makeFromRealImag,
    makeFromMagAng,
    realPart,
    imagPart,
    magnitude,
    angle,
    addComplex,
    subComplex,
    mulComplex,
    divComplex,
} from './complex';

import {
    contents
} from './complex-utils';

describe('complex test',()=>{
    it('makeFromRealImag test',()=> {
        const complex1 = makeFromRealImag(3,4);
        expect(realPart(complex1)).toEqual(3);
        expect(imagPart(complex1)).toEqual(4);
        expect(magnitude(complex1)).toEqual(5);
        expect(angle(complex1)).toEqual(0.9272952180016122);
    });
    it('makeFromMagAng test',()=> {
        const complex1 = makeFromMagAng(1,Math.PI/4);
        expect(realPart(complex1)).toEqual(0.7071067811865476);
        expect(imagPart(complex1)).toEqual(0.7071067811865475);
        expect(magnitude(complex1)).toEqual(1);
        expect(angle(complex1)).toEqual(Math.PI/4);
    });

    it('addComplex test',()=>{ 
        const complex1 = makeFromRealImag(3,5);
        const complex2 = makeFromRealImag(4,6);
        const added = addComplex(complex1,complex2);
        expect(7).toEqual(realPart(added));
        expect(11).toEqual(imagPart(added));
    });

    it('subComplex test',()=>{ 
        const complex1 = makeFromRealImag(3,5);
        const complex2 = makeFromRealImag(4,6);
        const added = subComplex(complex1,complex2);
        expect(-1).toEqual(realPart(added));
        expect(-1).toEqual(imagPart(added));
    });

    it('mulComplex test',()=>{
        const complex1 = makeFromMagAng(3,5);
        const complex2 = makeFromMagAng(4,6);
        const added = mulComplex(complex1,complex2);
        expect(12).toEqual(magnitude(added));
        expect(11).toEqual(angle(added));
    });

    it('divComplex test',()=>{
        const complex1 = makeFromMagAng(3,5);
        const complex2 = makeFromMagAng(4,6);
        const added = divComplex(complex1,complex2);
        expect(0.75).toEqual(magnitude(added));
        expect(-1).toEqual(angle(added));
    });

    it('addComplex two different test ',()=>{
        const complex1 = makeFromRealImag(3,5);
        const complex2 = makeFromMagAng(4,6);
        const added = addComplex(complex1,complex2);
        expect(6.840681146601464).toEqual(realPart(added));
        expect(3.8823380072042966).toEqual(imagPart(added));
    });

    it('mulComplex two different test', ()=> {
        const complex1 = makeFromRealImag(3,5);
        const complex2 = makeFromMagAng(4,6);
        const added = mulComplex(complex1,complex2);
        expect(23.323807579381203).toEqual(magnitude(added));
        expect(7.0303768265243125).toEqual(angle(added));
    })
});