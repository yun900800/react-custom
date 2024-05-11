import {
    makeFromRealImagRectangular,
    makeFromMagAngRectangular,
    realPartRectangular,
    imagPartRectangular,
    magnitudeRectangular,
    angleRectangular
} from './rectangular-complex';

import {
    contents
} from './complex-utils';

describe('rectangular-complex test',()=> {
    it('makeFromRealImagRectangular test',()=> {
        const rComplex = contents(makeFromRealImagRectangular(3,4));
        expect(realPartRectangular(rComplex)).toEqual(3);
        expect(imagPartRectangular(rComplex)).toEqual(4);
        expect(magnitudeRectangular(rComplex)).toEqual(5);
        expect(angleRectangular(rComplex)).toEqual(0.9272952180016122);
    });

    it('makeFromMagAngRectangular test',()=> {
        const rComplex = contents(makeFromMagAngRectangular(1,Math.PI/4));
        expect(magnitudeRectangular(rComplex)).toEqual(1);
        expect(angleRectangular(rComplex)).toEqual(Math.PI/4);
        expect(realPartRectangular(rComplex)).toEqual(0.7071067811865476);
        expect(imagPartRectangular(rComplex)).toEqual(0.7071067811865475);
    })
})
