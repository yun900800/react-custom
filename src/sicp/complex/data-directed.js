import {
    put,
    get
} from '../state/table';
import {
    head,
    tail,
    pair
} from '../pair/pair';

import {
    map,
    apply_in_underlying_javascript
} from '../utils/utils';

import {
    list
} from '../list/list';

import {
    typeTag,
    contents,
    attachTag
} from './complex-utils';

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
        return Math.atan( imagPart(z) / realPart(z));
    }

    const makeFromMagAng = (r, a) => {
        return pair(r * Math.cos(a), r * Math.sin(a));
    }

    const tag = x => {
        return attachTag("rectangular", x); 
    }

    put("real_part", list("rectangular"), realPart);
    put("imag_part", list("rectangular"), imagPart);
    put("magnitude", list("rectangular"), magnitude);
    put("angle", list("rectangular"), angle);
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
                    Math.atan(y, x));
    }

    const tag = x => { return attachTag("polar", x); }
    put("real_part", list("polar"), realPart);
    put("imag_part", list("polar"), imagPart);
    put("magnitude", list("polar"), magnitude);
    put("angle", list("polar"), angle);
    put("make_from_real_imag", "polar", 
        (x, y) => tag(makeFromRealImag(x, y)));
    put("make_from_mag_ang", "polar",
        (r, a) => tag(makeFromMagAng(r, a)));
    return "done";
}

const applyGeneric = (op, args) => {
    const typeTags = map(typeTag, args);
    const fun = get(op, typeTags);
    return undefined !== fun
           ? apply_in_underlying_javascript(fun, map(contents, args))
           : error(list(op, typeTags),
                   "no method for these types -- apply_generic");
}

const makeFromRealImag = (real,imag) => {
    return get('make_from_real_imag','rectangular')(real,imag);
}

const makeFromMagAng = (mag,ang) => {
    return get('make_from_mag_ang','polar')(mag,ang)
}

const realPart = z => {
    return applyGeneric('real_part',list(z));
}

const imagPart = z => {
    return applyGeneric('imag_part',list(z));
}

const magnitude = z => {
    return applyGeneric('magnitude',list(z));
}

const angle = z => {
    return applyGeneric('angle',list(z));
}

module.exports = {
    installRectangularPackage,
    installPolarPackage,
    applyGeneric,
    makeFromRealImag,
    makeFromMagAng,
    realPart,
    imagPart,
    magnitude,
    angle
}