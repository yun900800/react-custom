import { 
    pair, 
    head,
    tail 
} from "../pair/pair";

import {
    segment,
    startPoint,
    endPoint
} from './segment'

import {
    xPoint,
    yPoint
} from './point';

/**
 * 使用两对线段
 */
const makeRectangle = (l1,l2,w1,w2) => {
    return pair(pair(l1,l2), pair(w1,w2));
}
const lr1 = rectangle => {
    return head(head(rectangle));
}

const lr2 = rectangle => {
    return tail(head(rectangle));
}

const wr1 = rectangle => {
    return head(tail(rectangle));
}

const wr2 = rectangle => {
    return tail(tail(rectangle));
}

const printRectangle = rectangle => {
    const l1 = lr1(rectangle);
    const l2 = lr2(rectangle);
    const w1 = wr1(rectangle);
    const w2 = wr2(rectangle);
    console.log('l1:',segment(l1));
    console.log('l2:',segment(l2));
    console.log('w1:',segment(w1));
    console.log('w2:',segment(w2));
}

/**
 * 选择函数
 */
const lengthOfRactangle = (r) => {
    const l1 = lr1(r);
    const start = startPoint(l1);
    const end = endPoint(l1);
    return xPoint(end) - xPoint(start);
}

/**
 * 选择函数
 */
const widthOfRectangle = (r) => {
    const l1 = wr1(r);
    const start = startPoint(l1);
    const end = endPoint(l1);
    return yPoint(end) - yPoint(start);
}

const perimeter = (rectangle) => {
    return 2 * (lengthOfRactangle(rectangle) + widthOfRectangle(rectangle));
}

const areaRectangle = (rectangle) => {
    return lengthOfRactangle(rectangle) * widthOfRectangle(rectangle);
}

module.exports = {
    makeRectangle,
    printRectangle,
    perimeter,
    areaRectangle
}