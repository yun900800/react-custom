import {
    installRectangularPackage,
    installPolarPackage,
    applyGeneric,
    makeFromRealImag,
    makeFromMagAng,
    realPart,
    imagPart,
    magnitude,
    angle
} from './data-directed';
import {
    list
} from '../list/list';
describe('data-directed test',()=> {
    installRectangularPackage();
    installPolarPackage();

    it('applyGeneric test',()=> {
        const z = makeFromRealImag(3,4);
        let result = applyGeneric('real_part',list(z));
        expect(result).toEqual(3)
        result = applyGeneric('imag_part',list(z));
        expect(result).toEqual(4);
        result = applyGeneric('magnitude',list(z));
        expect(result).toEqual(5);
        result = applyGeneric('angle',list(z));
        expect(result).toEqual(0.9272952180016122);

        const z1 = makeFromMagAng(1,Math.PI/4);
        result = applyGeneric('magnitude',list(z1));
        expect(result).toEqual(1)
        result = applyGeneric('angle',list(z1));
        expect(result).toEqual(Math.PI/4);
        result = applyGeneric('imag_part',list(z1));
        expect(result).toEqual(0.7071067811865475);
        result = applyGeneric('real_part',list(z1));
        expect(result).toEqual(0.7071067811865476);
    });

    it('realPart test',()=> {
        const z = makeFromRealImag(3,4);
        const z1 = makeFromMagAng(1,Math.PI/4);
        expect(realPart(z)).toEqual(3);
        expect(realPart(z1)).toEqual(0.7071067811865476)
    });

    it('imagPart test',()=> {
        const z = makeFromRealImag(3,4);
        const z1 = makeFromMagAng(1,Math.PI/4);
        expect(imagPart(z)).toEqual(4);
        expect(imagPart(z1)).toEqual(0.7071067811865475)
    });

    it('magnitude test',()=> {
        const z = makeFromRealImag(3,4);
        const z1 = makeFromMagAng(1,Math.PI/4);
        expect(magnitude(z)).toEqual(5);
        expect(magnitude(z1)).toEqual(1)
    });

    it('angle test',()=> {
        const z = makeFromRealImag(3,4);
        const z1 = makeFromMagAng(1,Math.PI/4);
        expect(angle(z)).toEqual(0.9272952180016122);
        expect(angle(z1)).toEqual(Math.PI/4)
    });
});