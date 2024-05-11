
import { head } from '../pair/pair';
import {
    isEqual,
    error
} from '../utils/utils';

import {
    list
} from '../list/list';

const makeFromRealImag = (real, imag) => {
    const dispatch = op => {
        if (isEqual(op,'real_part')) {
            return real;
        }
        if (isEqual(op,'imag_part')) {
            return imag;
        }
        if (isEqual(op,'magnitude')) {
            return Math.sqrt(real*real+ imag*imag);
        }
        if (isEqual(op,'angle')) {
            return Math.atan(imag/real);
        }
        error('unknown op -- makeFromRealImag',op)
    }
    return dispatch;
}

const makeFromMagAng = (mag, ang) => {
    const dispatch = op => {
        if (isEqual(op,'real_part')) {
            return mag*Math.cos(ang);
        }
        if (isEqual(op,'imag_part')) {
            return mag*Math.sin(ang);
        }
        if (isEqual(op,'magnitude')) {
            return mag;
        }
        if (isEqual(op,'angle')) {
            return ang;
        }
        error('unknown op -- makeFromMagAng',op)
    }
    return dispatch;
}

const applyGeneric = (op,arg) =>{
    return head(arg)(op);
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
    makeFromRealImag,
    makeFromMagAng,
    applyGeneric,
    realPart,
    imagPart,
    magnitude,
    angle
}