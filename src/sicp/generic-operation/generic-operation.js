import {
    attachTag
} from '../complex/complex-utils';

import {
    head,
    tail,
    pair
} from '../pair/pair';

import {
    put,
    get
} from '../state/table';

import {
    gcd
} from '../utils/utils';

import {
    list
} from '../list/list';

import {
    realPart,
    imagPart,
    magnitude,
    angle,
} from '../complex/complex'

import {
    installRectangularPackage,
    installPolarPackage,
    applyGeneric
} from '../complex/data-directed';
const installJsNumberPackage = () => {
    const tag = x => {
        return attachTag('javascript_number',x)
    }
    put("add", list("javascript_number", "javascript_number"), 
        (x, y) => tag(x + y));
        put("sub", list("javascript_number", "javascript_number"), 
        (x, y) => tag(x - y));
    put("mul", list("javascript_number", "javascript_number"), 
        (x, y) => tag(x * y));
    put("div", list("javascript_number", "javascript_number"), 
        (x, y) => tag(x / y));
    put("make", "javascript_number", 
        x => tag(x));
    return "done";
}
const makeJsNumber = n => {
    return get("make", "javascript_number")(n);
}

const installRationalNumber = () => {
    const numer = (x) => { return head(x); }
    const denom = (x) => { return tail(x); }
    function make_rat(n, d) {
        const g = gcd(n, d);
        return pair(n / g, d / g);
    }
    const add_rat = (x, y) => {
        return make_rat(numer(x) * denom(y) + numer(y) * denom(x),
                        denom(x) * denom(y));
    }
    const sub_rat = (x, y) => {
        return make_rat(numer(x) * denom(y) - numer(y) * denom(x),
                        denom(x) * denom(y));
    }
    const mul_rat = (x, y) => {
        return make_rat(numer(x) * numer(y),
                        denom(x) * denom(y));
    }
    const div_rat = (x, y) => {
        return make_rat(numer(x) * denom(y),
                        denom(x) * numer(y));
    }
    // interface to rest of the system
    const tag = (x) => {
        return attachTag("rational", x);
    }
    put("add", list("rational", "rational"),
        (x, y) => tag(add_rat(x, y)));
    put("sub", list("rational", "rational"),
        (x, y) => tag(sub_rat(x, y)));
    put("mul", list("rational", "rational"),
        (x, y) => tag(mul_rat(x, y)));
    put("div", list("rational", "rational"),
        (x, y) => tag(div_rat(x, y)));
    put("make", "rational",
        (n, d) => tag(make_rat(n, d)));
    return "done";  
}

const makeRational = (n, d) => {
    return get("make", "rational")(n, d);
}

const installComplexPackage = () => {
    installRectangularPackage();
    installPolarPackage();
    function make_from_real_imag(x, y) {
        return get("make_from_real_imag", "rectangular")(x, y);
    }
    function make_from_mag_ang(r, a) {
        return get("make_from_mag_ang", "polar")(r, a);
    }
    // internal functions
    function add_complex(z1, z2) {
        return make_from_real_imag(realPart(z1) + realPart(z2),
                                   imagPart(z1) + imagPart(z2));
    }
    function sub_complex(z1, z2) {
        return make_from_real_imag(realPart(z1) - realPart(z2),
                                   imagPart(z1) - imagPart(z2));
    }
    function mul_complex(z1, z2) {
        return make_from_mag_ang(magnitude(z1) * magnitude(z2),
                                 angle(z1) + angle(z2));
    }
    function div_complex(z1, z2) {
        return make_from_mag_ang(magnitude(z1) / magnitude(z2),
                                 angle(z1) - angle(z2));
    }

    function add_complex_to_shcemenum(z,x) {
        return make_from_real_imag(realPart(z) + x, imagPart(z));
    }
    // interface to rest of the system
    function tag(z) { return attachTag("complex", z); }
    // 复数加上一个整数
    put('add',list('complex','scheme-number',
        (z,x)=> tag(add_complex_to_shcemenum(z,x))));
    put("add", list("complex", "complex"), 
        (z1, z2) => tag(add_complex(z1, z2)));
    put("sub", list("complex", "complex"), 
        (z1, z2) => tag(sub_complex(z1, z2)));
    put("mul", list("complex", "complex"), 
        (z1, z2) => tag(mul_complex(z1, z2)));
    put("div", list("complex", "complex"), 
        (z1, z2) => tag(div_complex(z1, z2)));
    put("make_from_real_imag", "complex", 
        (x, y) => tag(make_from_real_imag(x, y)));
    put("make_from_mag_ang", "complex", 
        (r, a) => tag(make_from_mag_ang(r, a)));
    put("real_part", list("complex"), realPart);
    put("imag_part", list("complex"), imagPart);
    put("magnitude", list("complex"), magnitude);
    put("angle",     list("complex"), angle);
    return "done";  
}

const makeComplexFromRealImag = (x, y) => {
    return get("make_from_real_imag", "complex")(x, y);
}
const makeComplexFromMagAng = (r, a) => {
    return get("make_from_mag_ang", "complex")(r, a);
}

//通用计算界面
const add = (x,y) => {
    return applyGeneric("add", list(x, y));
}

const sub = (x,y) => {
    return applyGeneric("sub", list(x, y));
}

const mul = (x,y) => {
    return applyGeneric("mul", list(x, y));
}

const div = (x,y) => {
    return applyGeneric("div", list(x, y));
}

const realPartComplex = z => {
    return applyGeneric('real_part',list(z));
}

const imagPartComplex = z => {
    return applyGeneric('imag_part',list(z));
}

const magnitudeComplex = z => {
    return applyGeneric('magnitude',list(z));
}

const angleComplex = z => {
    return applyGeneric('angle',list(z));
}

module.exports = {
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
}