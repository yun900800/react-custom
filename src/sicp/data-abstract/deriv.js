const sicp = require('./sicp');

const isString = value => typeof value === 'string'
const isNumber = value => typeof value === 'number'
const isVariable = value => isString(value)
const isSameVariable = (val1, val2) => isVariable(val1) && isVariable(val2) && val1 === val2
const isPair = value => null!== value;
const isSum = value => isPair(value) &&sicp.head(value)==='+'
const makeSum = (a1,a2) => {
    return numberEqual(a1, 0)
           ? a2
           : numberEqual(a2, 0)
           ? a1
           : isNumber(a1) && isNumber(a2)
           ? a1 + a2
           : sicp.listJs('+',a1,a2);
}
const addend = s => sicp.head(sicp.tail(s))
const augend = s => sicp.head(sicp.tail(sicp.tail(s)))
const isProduct = s  => isPair(s) &&sicp.head(s)==='*'
const makeProcut =  (m1,m2) => {
    return numberEqual(m1, 0) || numberEqual(m2, 0)
           ? 0
           : numberEqual(m1, 1)
           ? m2
           : numberEqual(m2, 1)
           ? m1
           : isNumber(m1) && isNumber(m2)
           ? m1 * m2
           : sicp.listJs('*',m1,m2);
}
const multiplier = s =>sicp.head(sicp.tail(s))
const multiplicand = s =>sicp.head(sicp.tail(sicp.tail(s)))
const numberEqual = (exp,num) => isNumber(exp) && exp === num

const deriv = (exp, variable) => {
    return isNumber(exp) 
        ? 0
        : isVariable(exp)
        ? isSameVariable(exp,variable) ? 1 : 0
        : isSum(exp)
        ? makeSum(deriv(addend(exp),variable), 
                deriv(augend(exp), variable))
        : isProduct(exp)
        ? makeSum(makeProcut(multiplier(exp), deriv(multiplicand(exp),variable)),
            makeProcut(multiplicand(exp), deriv(multiplier(exp),variable))
        )
        : sicp.error(exp, "unknown expression type -- deriv");
}

let result = isVariable('define');
console.log(result);

result = isVariable(result);
console.log(result);
result = deriv(sicp.listJs("+", "x", 3), "x");
console.log(result);

result = deriv(sicp.listJs("*", "x", "y"), "x");
console.log(result);

result = deriv(sicp.listJs("*", sicp.listJs("*", "x", "y"), sicp.listJs("+", "x", 3)), "x");
console.log(sicp.head(result));
console.log(sicp.head(sicp.head(sicp.tail(result))));
