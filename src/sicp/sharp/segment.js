import {
    head,
    pair,
    tail
} from '../pair/pair';

import {
    point
} from './point'

const makeSegment = (startPoint, endPoint) => {
    return pair(startPoint,endPoint);
}
const startPoint = (line)=> {
    return head(line);
}
const endPoint = (line) => {
    return tail(line);
}

const printSegment = (line) => {
    console.log('%s===>%s', point(startPoint(line)), point(endPoint(line)))
}

const segment = line => {
    return point(startPoint(line)) + "===>"+ point(endPoint(line));
}

module.exports = {
    makeSegment,
    startPoint,
    endPoint,
    printSegment,
    segment
}