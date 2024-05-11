import {
    pair,
    head,
    tail
} from '../pair/pair';

import {
    attachTag
} from './complex-utils';

const magnitudePolar = z => {
    return head(z);
}
const anglePolar = z => {
    return tail(z);
}

const realPartPolar = z => {
    return magnitudePolar(z) * Math.cos(anglePolar(z));
}

const imagPartPolar = z => {
    return magnitudePolar(z)* Math.sin(anglePolar(z));
}

const makeFromRealImagPolar = (real, imag) => {
    return attachTag("polar",
    pair(Math.sqrt(real*real + imag*imag),
        Math.atan2(imag, real)));
}

function makeFromMagAngPolar(r, a) {
    return attachTag("polar", pair(r, a));
}

module.exports = {
    magnitudePolar,
    anglePolar,
    imagPartPolar,
    realPartPolar,
    makeFromMagAngPolar,
    makeFromRealImagPolar
}