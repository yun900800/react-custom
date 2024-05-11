import {
    magnitudePolar,
    anglePolar,
    imagPartPolar,
    realPartPolar,
    makeFromMagAngPolar,
    makeFromRealImagPolar
} from './polar-complex';
import {
    contents
} from './complex-utils';
describe('polar-complex test',()=> {
    it('makeFromMagAngPolar test',()=> {
        const rComplex = contents(makeFromMagAngPolar(1,Math.PI/4));
        expect(magnitudePolar(rComplex)).toEqual(1);
        expect(anglePolar(rComplex)).toEqual(Math.PI/4);
        expect(realPartPolar(rComplex)).toEqual(0.7071067811865476);
        expect(imagPartPolar(rComplex)).toEqual(0.7071067811865475);
    });

    it('makeFromRealImagPolar test',()=> {
        const rComplex = contents(makeFromRealImagPolar(3,4));
        expect(magnitudePolar(rComplex)).toEqual(5);
        expect(anglePolar(rComplex)).toEqual(0.9272952180016122);
        expect(realPartPolar(rComplex)).toEqual(3.0000000000000004);
        expect(imagPartPolar(rComplex)).toEqual(3.9999999999999996);
    });
})
