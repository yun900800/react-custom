import {
    makeFromRealImag,
    makeFromMagAng,
    applyGeneric,
    realPart,
    imagPart,
    magnitude,
    angle
} from './message-passing';
import {
    list
} from '../list/list';
describe('message-passing',()=>{
    it('makeFromRealImag test',()=> {
        const z1 = makeFromRealImag(3,4);
        expect(3).toEqual(z1('real_part'));
        expect(4).toEqual(z1('imag_part'));
        expect(5).toEqual(z1('magnitude'));
        expect(0.9272952180016122).toEqual(z1('angle'));
    });
    it('makeFromMagAng test',()=> {
        const z1 = makeFromMagAng(1,Math.PI/4);
        expect(0.7071067811865476).toEqual(z1('real_part'));
        expect(0.7071067811865475).toEqual(z1('imag_part'));
        expect(1).toEqual(z1('magnitude'));
        expect(Math.PI/4).toEqual(z1('angle'));
    });

    it('applyGeneric test',()=>{
        const z1 = makeFromRealImag(3,4);
        let real = applyGeneric('real_part',list(z1));
        expect(real).toEqual(3);
        const z2= makeFromMagAng(1,Math.PI/4);
        real = applyGeneric('real_part',list(z2));
        expect(real).toEqual(0.7071067811865476);
    });
    it('realPart test',()=>{
        const z1 = makeFromRealImag(3,4);
        const real = realPart(z1);
        expect(real).toEqual(3);
    });
    it('imagPart test',()=>{
        const z1 = makeFromRealImag(3,4);
        const real = imagPart(z1);
        expect(real).toEqual(4);
    });
    it('magnitude test',()=>{
        const z1 = makeFromRealImag(3,4);
        const real = magnitude(z1);
        expect(real).toEqual(5);
    });
    it('angle test',()=>{
        const z1 = makeFromRealImag(3,4);
        const real = angle(z1);
        expect(real).toEqual(0.9272952180016122);
    });
});