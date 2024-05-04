import {
    head,
    pair,
    tail
} from '../pair/pair';

import {
    point,
    xPoint,
    yPoint,
    makePoint
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

const midPointSegment = (line) => {
    const stPoint = startPoint(line);
    const enPoint = endPoint(line);
    return makePoint(
        (xPoint(stPoint)+ xPoint(enPoint)) / 2,
        (yPoint(stPoint) + yPoint(enPoint)) / 2
    );
}

module.exports = {
    makeSegment,
    startPoint,
    endPoint,
    printSegment,
    segment,
    midPointSegment
}