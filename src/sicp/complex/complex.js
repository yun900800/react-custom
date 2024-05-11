import {
    makeFromRealImagRectangular,
    makeFromMagAngRectangular,
    realPartRectangular,
    imagPartRectangular,
    magnitudeRectangular,
    angleRectangular
} from './rectangular-complex';

import {
    magnitudePolar,
    anglePolar,
    imagPartPolar,
    realPartPolar,
    makeFromMagAngPolar,
    makeFromRealImagPolar
} from './polar-complex';

import {
    error
} from '../utils/utils';

import {
    isRectangular,
    isPolar,
    contents
} from './complex-utils';



/**
 * 定义一个实部虚部的构造过程
 * @param {*} real 
 * @param {*} imag 
 */
const makeFromRealImag = (real, imag) => {
    return makeFromRealImagRectangular(real,imag);
}
/**
 * 定义一个模幅角的构造过程
 * @param {*} mag 
 * @param {*} ang 
 */
const makeFromMagAng = (mag, ang) => {
    return makeFromMagAngPolar(mag,ang);
}
/**
 * 实部选择函数
 * @param {*} z 
 */
const realPart = z => {
    if (isRectangular(z)){
        return realPartRectangular(contents(z));
    }
    if (isPolar(z)) {
        return realPartPolar(contents(z));
    }
    error('unknow type --real-part',z);
}
/**
 * 虚部选择函数
 * @param {*} z 
 */
const imagPart = z => {
    if (isRectangular(z)){
        return imagPartRectangular(contents(z));
    }
    if (isPolar(z)) {
        return imagPartPolar(contents(z));
    }
    error('unknow type --imag-part',z);
}

/**
 * 模 选择函数
 * @param {*} z 
 */
const magnitude = z => {
    if (isRectangular(z)){
        return magnitudeRectangular(contents(z))
    }
    if (isPolar(z)) {
        return magnitudePolar(contents(z));
    }
    error('unknow type --magnitude',z);
}

/**
 * 幅角 选择函数
 * @param {*} z 
 */
const angle = z => {
    if (isRectangular(z)){
        return angleRectangular(contents(z))
    }
    if (isPolar(z)) {
        return anglePolar(contents(z));
    }
    error('unknow type --angle',z);
}

const addComplex = (z1,z2) => {
    return makeFromRealImag(realPart(z1) + realPart(z2),
    imagPart(z1) + imagPart(z2));
}

const subComplex = (z1,z2) => {
    return makeFromRealImag(realPart(z1) - realPart(z2),
    imagPart(z1) - imagPart(z2));
}

const mulComplex = (z1,z2) => {
    return makeFromMagAng(magnitude(z1) * magnitude(z2),
                             angle(z1) + angle(z2));
}

const divComplex = (z1,z2) => {
    return makeFromMagAng(magnitude(z1) / magnitude(z2),
                             angle(z1) - angle(z2));
}

module.exports = {
    makeFromRealImag,
    makeFromMagAng,
    realPart,
    imagPart,
    magnitude,
    angle,
    addComplex,
    subComplex,
    mulComplex,
    divComplex
}

