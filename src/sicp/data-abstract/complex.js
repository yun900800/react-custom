import { pair, head, tail, isPair, error} from './sicp';

const makeFromRealImagRectangular = (real, imag)=>{
    return attachTag('rectangular',pair(real,imag));
}

const makeFromRealImagPolar = (mag, ang) => {
    return attachTag("polar",
    pair(Math.sqrt(Math.square(mag) + Math.square(ang)),
        Math.atan2(ang, mag)));
}

const realPartRectangular = z => {
    return head(z);
}

const realPartPolar = z => {
    return magnitudePolar(z) * Math.cos(anglePolar(z));
}

const imagPartRectangular = z => {
    return tail(z);
}

const imagePartPolar = z => {
    return magnitudePolar(z)* Math.sin(anglePolar(z));
}

const makeFromMagAngRectangular = (mag, ang) => {
    return attachTag('rectangular',pair(mag * Math.cos(ang), mag * Math.sin(ang)));
}

function makeFromMagAngPolar(r, a) {
    return attachTag("polar", pair(r, a));
}



const magnitudePolar = z => {
    return head(z);
}

const magnitudeRectangular = z => {
    return Math.sqrt(
        realPartRectangular() * realPartRectangular(z) 
        + 
        imagPartRectangular() * imagPartRectangular(z)
    );
}

const anglePolar = z => {
    return tail(z);
}

const angleRectangular = z => {
    return Math.atan2(imagPartRectangular(z) / realPartRectangular(z));
}

const addComplex = (z1,z2) => {
    debugger
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

const attachTag = (tagType, contents) => {
    return pair(tagType,contents);
}

const tagType = datum => {
    return isPair(datum) ? head(datum): error(datum, "bad tagged datum -- type_tag");
}

const contents = datum => {
    return isPair(datum) ? tail(datum): error(datum, "bad tagged datum -- contents");
}

const isRectangular = z => {
    return tagType(z) === 'rectangular';
}

const isPolar = z => {
    return tagType(z) === 'polar';
}

const realPart = z =>{
    if (isRectangular(z)) {
        return realPartRectangular(contents(z));
    } else {
        return realPartPolar(contents(z));
    }
}
const imagPart = z => {
    if (isRectangular(z)) {
        return imagPartRectangular(contents(z));
    } else {
        return imagePartPolar(contents(z));
    }
} 

const magnitude = z => isRectangular(z) ? magnitudeRectangular(contents(z)): magnitudePolar(contents(z));
const angle = z => isRectangular(z) ? angleRectangular(contents(z)) : anglePolar(contents(z));

const makeFromRealImag = (x , y ) => {
    return makeFromRealImagRectangular(x,y);
}

const makeFromMagAng = (r,a) => {
    return makeFromMagAngPolar(r,a);
}

module.exports = {
    addComplex,
    subComplex,
    mulComplex,
    divComplex,
    makeFromMagAng,
    makeFromRealImag,
    contents
};