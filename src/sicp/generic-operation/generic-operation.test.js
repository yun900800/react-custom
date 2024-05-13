import {
    installJsNumberPackage,
    makeJsNumber,
    installRationalNumber,
    makeRational,
    installComplexPackage,
    makeComplexFromRealImag,
    makeComplexFromMagAng,

    add,
    sub,
    mul,
    div,

    realPartComplex,
    imagPartComplex,
    magnitudeComplex,
    angleComplex
} from './generic-operation';

import {
    contents
} from '../complex/complex-utils';

import {
    printRat
} from '../rational/rational';
// import {
//     realPart,
//     imagPart,
//     magnitude,
//     angle,
// } from '../complex/complex'
describe('generic-operation test',()=> {
    installJsNumberPackage();
    installRationalNumber();
    installComplexPackage();
    it('number add sub mul div test',()=> {
        const number1 = makeJsNumber(5);
        const number2 = makeJsNumber(8);
        let result = add(number1,number2);
        expect(contents(result)).toEqual(13)
        result = sub(number1,number2);
        expect(contents(result)).toEqual(-3);
        result = mul(number1,number2);
        expect(contents(result)).toEqual(40)
        result = div(number1,number2);
        expect(contents(result)).toEqual(0.625)
    });

    it('rational add sub mul div test',()=> {
        const number1 = makeRational(5,8);
        const number2 = makeRational(8,12);
        let result = add(number1,number2);
        printRat(contents(result))
        result = sub(number1,number2);
        printRat(contents(result))
        result = mul(number1,number2);
        printRat(contents(result))
        result = div(number1,number2);
        printRat(contents(result))
    });

    it('complex add sub mul div test',()=> {
        const number1 = makeComplexFromRealImag(5,8);
        const number2 = makeComplexFromRealImag(8,12);
        let result = add(number1,number2);
        console.log(realPartComplex(result));
        console.log(imagPartComplex(result));
        result = sub(number1,number2);
        console.log(realPartComplex(result));
        console.log(imagPartComplex(result));
        result = mul(number1,number2);
        console.log(realPartComplex(result));
        console.log(imagPartComplex(result));
        result = div(number1,number2);
        console.log(realPartComplex(result));
        console.log(imagPartComplex(result));
    });
})