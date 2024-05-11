import {
    pair,
    head,
    tail
} from '../pair/pair';

import {
    attachTag
} from './complex-utils';

const realPartRectangular = z => {
    return head(z);
}
const imagPartRectangular = z => {
    return tail(z);
}

const magnitudeRectangular = z => {
    return Math.sqrt(
        realPartRectangular(z) * realPartRectangular(z) 
        + 
        imagPartRectangular(z) * imagPartRectangular(z)
    );
}

const angleRectangular = z => {
    return Math.atan(imagPartRectangular(z) / realPartRectangular(z));;
}

const makeFromRealImagRectangular = (real, imag)=>{
    return attachTag('rectangular',pair(real,imag));
}

const makeFromMagAngRectangular = (mag, ang) => {
    return attachTag('rectangular',pair(mag * Math.cos(ang), mag * Math.sin(ang)));
}

module.exports = {
    makeFromRealImagRectangular,
    makeFromMagAngRectangular,
    realPartRectangular,
    imagPartRectangular,
    magnitudeRectangular,
    angleRectangular
}