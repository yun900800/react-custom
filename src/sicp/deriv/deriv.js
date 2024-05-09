import {
    isNumber,
    isVariable,
    isInteger,
    isSameVariable,
    isSum,
    isProduct,
    isExponentiation,
    error
} from './deriv-utils';
import {
    list
} from '../list/list';
import {
    head,
    tail
} from '../pair/pair'

const numberEqual = (exp,num) => isNumber(exp) && exp === num;

/**
 * 定义了和对象过程
 * @param {*} a1 
 * @param {*} a2 
 * @returns 
 */
const makeSum = (a1,a2) => {
    return numberEqual(a1, 0)
           ? a2
           : numberEqual(a2, 0)
           ? a1
           : isNumber(a1) && isNumber(a2)
           ? a1 + a2
           : list('+',a1,a2);
}

const addend = s => head(tail(s));
const augend = s => head(tail(tail(s)));

/**
 * 定义乘积对象过程
 * @param {*} m1 
 * @param {*} m2 
 * @returns 
 */
const makeProcut =  (m1,m2) => {
    return numberEqual(m1, 0) || numberEqual(m2, 0)
           ? 0
           : numberEqual(m1, 1)
           ? m2
           : numberEqual(m2, 1)
           ? m1
           : isNumber(m1) && isNumber(m2)
           ? m1 * m2
           : list('*',m1,m2);
}
const multiplier = s =>head(tail(s))
const multiplicand = s =>head(tail(tail(s)));

//扩充求幂函数的导数
const makeExponentiation = (base,exponent) => {
    if (exponent===0) {
        return 1;
    }
    if (exponent===1) {
        return base;
    }
    return list('**', base, exponent);
}

const base = s => head(tail(s));
const exponent = s => head(tail(tail(s)));
/**
 * 说明,谓词函数包括isVariable,isNumber,isSameVariable,isSum, 
    isProduct, numberEqual
 * 
 * @param {*} exp 
 * @param {*} variable 
 */
const deriv = (exp, variable) => {
    return isNumber(exp) 
        ? 0
        : isVariable(exp)
        ? isSameVariable(exp,variable) ? 1 : 0
        : isSum(exp)
        ? makeSum(
            deriv(addend(exp),variable),
            deriv(augend(exp),variable) 
        )
        : isProduct(exp)
        ? makeSum(
            makeProcut(
                multiplier(exp),
                deriv(multiplicand(exp),variable)
            ),
            makeProcut(
                multiplicand(exp),
                deriv(multiplier(exp),variable)
            )
        )
        : isExponentiation(exp)
        ? makeProcut(
            exponent(exp),
            makeProcut(
                makeExponentiation(
                    base(exp),
                    isInteger(exponent(exp)) ? exponent(exp)-1 :
                    exponent(exp)+'-1'
                ),
                deriv(base(exp), variable)
            )
    
        )
        : error(exp, "unknown expression type -- deriv");
}

module.exports = {
    numberEqual,
    makeSum,
    addend,
    augend,
    makeProcut,
    multiplier,
    multiplicand,
    makeExponentiation,
    base,
    exponent,
    deriv
}