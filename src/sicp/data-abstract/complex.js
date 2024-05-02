import { 
    pair, 
    head, 
    tail, 
    isPair, 
    error, 
    listJs,
    apply_in_underlying_javascript,
    mapJs,
    printListJs
} from './sicp';

import {
    put,
    get
} from '../state/table'

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

const typeTag = datum => {
    return isPair(datum) ? head(datum): error(datum, "bad tagged datum -- type_tag");
}

const contents = datum => {
    return isPair(datum) ? tail(datum): error(datum, "bad tagged datum -- contents");
}

const isRectangular = z => {
    return typeTag(z) === 'rectangular';
}

const isPolar = z => {
    return typeTag(z) === 'polar';
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


const installRectangularPackage = () => {

    const realPart = z => {
        return head(z);
    }

    const imagPart = z => {
        return tail(z);
    }

    const makeFromRealImag = (x, y) => {
        return pair(x,y);
    }

    const magnitude = z => {
        return Math.sqrt(realPart(z) * realPart(z) + imagPart(z) * imagPart(z));
    }

    const angle = z => {
        return Math.atan2( imagPart(z) / realPart(z));
    }

    const makeFromMagAng = (r, a) => {
        return pair(r * Math.cos(a), r * Math.sin(a));
    }

    const tag = x => {
        return attachTag("rectangular", x); 
    }

    put("real_part", listJs("rectangular"), realPart);
    put("imag_part", listJs("rectangular"), imagPart);
    put("magnitude", listJs("rectangular"), magnitude);
    put("angle", listJs("rectangular"), angle);
    put("make_from_real_imag", "rectangular",
        (x, y) => tag(makeFromRealImag(x, y)));
    put("make_from_mag_ang", "rectangular",
        (r, a) => tag(makeFromMagAng(r, a)));
    return "done";
}

const installPolarPackage = () => {
    const magnitude = z => { return head(z); }
    const angle = z => { return tail(z); }
    const makeFromMagAng = (r, a) => {
        return pair(r,a);
    }

    const realPart = z => {
        return magnitude(z) * Math.cos(angle(z));
    }

    const imagPart = z => {
        return magnitude(z) * Math.sin(angle(z));
    }

    const makeFromRealImag = (x , y) => {
        return pair(Math.sqrt(x*x + y*y),
                    Math.atan2(y, x));
    }

    const tag = x => { return attachTag("polar", x); }
    put("real_part", listJs("polar"), realPart);
    put("imag_part", listJs("polar"), imagPart);
    put("magnitude", listJs("polar"), magnitude);
    put("angle", listJs("polar"), angle);
    put("make_from_real_imag", "polar", 
        (x, y) => tag(makeFromRealImag(x, y)));
    put("make_from_mag_ang", "polar",
        (r, a) => tag(makeFromMagAng(r, a)));
    return "done";
}

const applyGeneric = (op, args) => {
    const typeTags = mapJs(typeTag, args);
    const fun = get(op, typeTags);
    return undefined !== fun
           ? apply_in_underlying_javascript(fun, mapJs(contents, args))
           : error(listJs(op, typeTags),
                   "no method for these types -- apply_generic");
}

module.exports = {
    addComplex,
    subComplex,
    mulComplex,
    divComplex,
    makeFromMagAng,
    makeFromRealImag,
    contents,
    installRectangularPackage,
    installPolarPackage,
    applyGeneric
};