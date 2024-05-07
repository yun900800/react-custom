import { 
    list 
} from "../list/list";

import {
    head,
    tail
} from '../pair/pair';

import {
    forEach
} from  '../utils/utils'

// import {
//     makeSegment,
//     printSegment,
//     startPoint,
//     endPoint
// } from '../sharp/segment';

/**
 * painter is the base element
 */
const wave = (el, frame) => {
    console.log('draw element:',el, frame)
    return 'draw element:' + el + " in:" + frame+'.'
}
/**
 * 第一个画家的左边部分和第二个画家的右边部分
 * 合并成一幅新的图画, 返回一个新的画家
 * @param {*} wave1 
 * @param {*} wave2 
 */
const beside = (wave1,wave2) => {
    //return is left wave1 and right wave2
}

/**
 * 第一个画家图像在第二个画家图像的下面
 * 返回一个新的组合画家
 * @param {*} wave1 
 * @param {*} wave2 
 */
const below = (wave1, wave2) => {
    //return is upper wave2 and bottom wave1
}

/**
 * 上下颠倒
 * @param {*} wave 
 * @returns 
 */
const flip_vert = wave => {
    //wave 上下颠倒
}
/**
 * 左右反转
 * @param {*} wave 
 * @returns 
 */
const flip_horiz = wave => {
    // wave 左右反转
}

/**
 * 以基本画家为蓝图,组合产生新的画家
 * 这个组合的特点是 画家的左边是原来的画,右边是颠倒的话
 */
const wave2 = beside(wave, flip_vert(wave));
/**
 * 将wave2生成的话分成上下两部分
 */
const wave4 = below(wave2,wave2);
//这里的特点是画家wave在有关语言或者操作下，仍然是封闭的,
//就是说，返回的结果仍然是画家

/**
 * 画家的左边和画家颠倒的右边组合成新画家
 * 同时新画家在另一个新画家的下面
 * @param {*} painter 
 * @returns 
 */
const flip_pairs = painter => {
    const painter2 = beside(painter, flip_vert(painter));
    return below(painter2, painter2);
}

const right_split = (painter, n) => {
    if (n === 0) {
        return painter;
    } else {
        const smaller = right_split(painter, n - 1);
        return beside(painter, below(smaller, smaller));
    }
}

const up_split = (painter, n) => {
    if (n === 0) {
        return painter;
    } else {
        const smaller = up_split(painter, n - 1);
        return below(painter, beside(smaller, smaller));
    }
}

const corner_split = (painter, n) => {
    if (n === 0) {
        return painter;
    } else {
        const up = up_split(painter, n - 1);
        const right = right_split(painter, n - 1);
        const top_left = beside(up, up);
        const bottom_right = below(right, right);
        const corner = corner_split(painter, n - 1);
        return beside(below(painter, top_left),
                      below(bottom_right, corner));
    }
}
const square_limit = (painter,n) => {
    const quarter = corner_split(painter, n);
    const half = beside(flip_horiz(quarter), quarter);
    return below(flip_vert(half), half);
}

const square_of_four = (tl, tr, bl, br) => painter =>{
    const top = beside(tl(painter), tr(painter));
    const bottom = beside(bl(painter), br(painter));
    return below(bottom, top);
}

const identity = v=>v;
const rotate180 = v=>v

const flipped_pairs_new = painter=> {
    const combine4 = square_of_four(identity, flip_vert, 
        identity, flip_vert);
    return combine4(painter);
}

const square_limit_new = painter => {
    const combine4 = square_of_four(flip_horiz, identity, 
        rotate180, flip_vert);
    return combine4(corner_split(painter, n));
}

const split = (bigCombiner,smallCombiner) => (painter, n)=>{
    if (n=== 0) {
        return painter;
    }
    const smaller = split(bigCombiner,smallCombiner)(painter, n-1);
    return bigCombiner(painter, smallCombiner(smaller,smaller));
}

//前面主要定义对画家的过程操作组合以及高阶过程组合

const makeFrame = (origin, edge1, edge2)=> list(origin, edge1, edge2);
const originFrame = frame=> head(frame);
const edge1Frame = frame=> head(tail(frame));
const edge2Frame = frame=> head(tail(tail(frame)));

const makeVect = (xcor,ycor)=>list(xcor,ycor)
const xcorVect = vect=>head(vect);
const ycorVect = vect=>head(tail(vect));

const vector = v => {
    return '(' + xcorVect(v)+ ','+ ycorVect(v) + ')';
}

const addVect = (vect1,vect2) => {
    return makeVect(xcorVect(vect1)+ xcorVect(vect2),
        ycorVect(vect1)+ ycorVect(vect2)
    );
}

const subVect = (vect1,vect2) => {
    return makeVect(xcorVect(vect1)- xcorVect(vect2),
        ycorVect(vect1)- ycorVect(vect2)
    );
}

const scaleVect = (vect,factor) => {
    return makeVect(xcorVect(vect)* factor,
        ycorVect(vect) * factor
    );
}

const makeSegment = (start, end) => list(start, end);
const startSegment = segment => head(segment);
const endSegment = segment => head(tail(segment));

const printSegment = segment => {
    console.log('%s===>%s', vector(startSegment(segment)), vector(endSegment(segment)));
}

//这个操作是建立在向量操作的基础之上,因此与底层的向量形成了抽象屏障
const frameCoordMap = (frame) => vect => {
    return addVect(
        originFrame(frame), 
        addVect(
            scaleVect(edge1Frame(frame), xcorVect(vect)), 
            scaleVect(edge2Frame(frame), ycorVect(vect))
        )
    );
}

const drawLine = (start, end)=> {
    const segment = makeSegment(start, end);
    printSegment(segment);
}

const segmentToPainter = segmentList => frame => {
    forEach(segment=>{
        const start = frameCoordMap(frame)(startSegment(segment));
        const end = frameCoordMap(frame)(endSegment(segment));
        drawLine(start, end);
    }, segmentList);
}

module.exports = {
    wave,
    flip_pairs,
    right_split,
    up_split,
    corner_split,
    square_limit,
    square_of_four,
    split,

    makeFrame,
    originFrame,
    edge1Frame,
    edge2Frame,

    makeVect,
    xcorVect,
    ycorVect,
    addVect,
    scaleVect,
    subVect,
    vector,

    makeSegment,
    startSegment,
    endSegment,

    frameCoordMap,
    segmentToPainter
}