import { 
    pair,
    head,
    tail
 }  from "../pair/pair";

const makeInterval = (lower,upper) => {
    return  pair(lower,upper);
}

const lowerBound = (interval) => {
    return head(interval);
}
const upperBound = (interval) =>{
    return tail(interval);
}

const addInterval = (x,y) => {
    const lowerX = lowerBound(x)+lowerBound(y);
    const lowerY = upperBound(x)+upperBound(y);
    return makeInterval(lowerX, lowerY)
}

const subInterval = (x,y) => {
    const lowerX = lowerBound(x) - upperBound(y);
    const lowerY = upperBound(x) - lowerBound(y);
    return makeInterval(lowerX, lowerY)
}

const mulInterval = (x,y) => {
    let p1 = lowerBound(x) * lowerBound(y);
    let p2 = lowerBound(x) * upperBound(y);
    let p3 = upperBound(x) * lowerBound(y);
    let p4 = upperBound(x) * upperBound(y);
    return makeInterval(Math.min(p1,p2,p3,p4), Math.max(p1,p2,p3,p4));
}

const divInterval = (x,y) => {
    if (upperBound(y) / lowerBound(y) < 0) {
        return 0;
    }
    return mulInterval(x, makeInterval(1/upperBound(y), 1/lowerBound(y)))
}

/**
 * c代表中心点,w代表宽度
 *
 * @param {*} c 
 * @param {*} w 
 */
const makeCenterWidth = (c,w) => {
    return makeInterval(c-w,c+w);
}

const center = (internal) => {
    return (lowerBound(internal) + upperBound(internal)) / 2.0;
}

const width = (internal) => {
    return (upperBound(internal) - lowerBound(internal)) / 2.0;;
}

const makeCenterPercent = (c,p) => {
    return makeCenterWidth(c, c*p);
}

const percent = (internal) => {
    return width(internal) / center(internal);
}

module.exports = {
    addInterval,
    subInterval,
    mulInterval,
    divInterval,
    makeInterval,
    lowerBound,
    upperBound,
    makeCenterWidth,
    center,
    width,
    makeCenterPercent,
    percent
}