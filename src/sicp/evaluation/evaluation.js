const p = ()=> p();
const test = (x,y) => {
    return x === 0 ? 0 : y;
}

const conditional = (predicate, thenClause, elseClause)=> {
    return predicate ? thenClause : elseClause;
}

function sqrt_iter(guess, x) {
    let newGuess = improve(guess, x);
    return good_enough(guess, newGuess)
           ? newGuess
           : sqrt_iter(newGuess, x);
    // return conditional(is_good_enough(guess, x),
    //                    guess,
    //                    sqrt_iter(improve(guess, x),
    //                              x));
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function average(x, y) {
    return (x + y) / 2;
}

const square = x => x*x;

function is_good_enough(guess, x) {
    return Math.abs(square(guess) - x) < 0.001;
}

function good_enough(oldGuess , newGuess) {
    return Math.abs( (newGuess-oldGuess) / oldGuess) < 0.01
}

/**
 * 递归计算过程
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const plus = (a,b) => {
    if (a === 0) {
        return b;
    }
    return inc(plus(dec(a), b)); 
}

/**
 * 迭代计算过程
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const plus_one = (a,b) => {
    return a === 0 ? b : plus_one(dec(a), inc(b));
}   

const inc = x => x + 1;
const dec = x => x - 1;


function sqrt(x) {
    return sqrt_iter(1, x);
}

module.exports = {
    test,
    p,
    conditional,
    sqrt,
    plus,
    plus_one
}