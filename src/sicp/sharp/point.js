import {
    head,
    pair,
    tail
} from '../pair/pair';
const makePoint = (x,y) => {
    return pair(x,y);
}
const xPoint = (p) => {
    return head(p);
}

const yPoint = (p) => {
    return tail(p);
}
const printPoint = (p) => {
    console.log('(%s,%s)',xPoint(p), yPoint(p));
}

const point = p => {
    return '('+xPoint(p) +',' +yPoint(p)+')';
}

module.exports = {
    makePoint,
    xPoint,
    yPoint,
    printPoint,
    point
}