import {
    head,
    pair,
    tail
} from '../pair/pair';
import {
    gcd
} from '../utils/utils'
const makeRat = (x,y) => {
    const ndGcd = gcd(x,y);
    x = x / ndGcd;
    y = y / ndGcd;
    if (y < 0){
        return new pair(-x,-y)
    }
    return pair(x,y);
}

const numer = z => head(z)
const denom = z => tail(z)

const addRat = function(x,y) {
    return makeRat(numer(x)* denom(y) + numer(y)* denom(x), denom(x)* denom(y));
}

const subRat = function(x,y) {
    return makeRat(numer(x)* denom(y) - numer(y)* denom(x), denom(x)* denom(y));
}

const mulRat = function(x,y) {
    return makeRat(numer(x) * numer(y), denom(x) * denom(y));
}

const divRat = function(x,y) {
    return makeRat(numer(x) * denom(y), denom(x) * numer(y))
}

const equal = function (x,y) {
    return numer(x)* denom(x) == numer(y)* denom(y);
}

const printRat = function(x) {
    console.log('');
    console.log('%s/%s',numer(x),denom(x));
}

//数据抽象的本质是为每一类数据对象标识出一组操作(makeRat,number,denom),使得对这类数据对象的所有操作都可以基于它们表示
//而且在操作这些对象的时候只有使用它们
//理解什么是水平抽象屏障
// -----------------------
// --- 使用有理数的程序  ---
// -----------------------
//     问题域中的有理数
// -----------------------
// --- addRat, subRat  ---
// -----------------------
//   作为分子和分母的有理数
// -----------------------
// --- makeRat, number, denon ---
// -----------------------
//   作为序对的有理数或者类的有理数
// -----------------------
// --- class Cons      ---
// -----------------------

//把对具体表示方式的依赖性限制到少数几个界面过程,不但有助于程序修改
//而且有助于程序设计,能保留程序设计不用实现方式的灵活性

module.exports = {
    addRat,
    subRat,
    mulRat,
    divRat,
    equal,
    printRat,
    makeRat,
    numer,
    denom
}