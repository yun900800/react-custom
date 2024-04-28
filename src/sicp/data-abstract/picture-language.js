import {listJs, head, tail, forEach} from './sicp'

/**
 * painter is the base element
 */

const wave = (el, frame) => console.log('draw element:',el, frame)

/**
 * 第一个画家的左边部分和第二个画家的右边部分
 * @param {*} wave1 
 * @param {*} wave2 
 * @returns 
 */
const beside = (wave1, wave2) => wave1
/**
 * 第一个画家图像在第二个画家图像的下面
 * @param {*} wave1 
 * @param {*} wave2 
 * @returns 
 */
const below = (wave1, wave2) => wave2

/**
 * 上下颠倒
 * @param {*} wave 
 * @returns 
 */
const flip_vert = wave => wave
/**
 * 左右反转
 * @param {*} wave 
 * @returns 
 */
const flip_horiz = wave => wave

const identity = v=>v

const rotate180 = v=>v

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

const split = (bigCombiner,smallCombiner) => (painter, n)=>{
    if (n=== 0) {
        return painter;
    }
    const smaller = split(bigCombiner,smallCombiner)(painter, n-1);
    return bigCombiner(painter, smallCombiner(smaller,smaller));
}

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

const makeFrame = (origin, edge1, edge2)=> listJs(origin, edge1, edge2)
const originFrame = frame=> head(frame);
const edge1Frame = frame=> head(tail(frame));
const edge2Frame = frame=> head(tail(tail(frame)));

const frameCoordMap = (frame) => vect => {
    return addVect(
        originFrame(frame), 
        addVect(
            scaleVect(edge1Frame(frame), xcorVect(vect)), 
            scaleVect(edge2Frame(frame), ycorVect(vect))
        )
    );
}

const makeVect = (xcor,ycor)=>listJs(xcor,ycor)
const xcorVect = vect=>head(vect);
const ycorVect = vect=>head(tail(vect));

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

const makeSegment = (start, end) => listJs(start, end);
const startSegment = segment => head(segment);
const endSegment = segment => head(tail(segment));

const drawLine = (startPoint, endPont)=> {
    console.log('draw startPoint:', startPoint, ' and endPont:', endPont);
}

const segmentToPainter = segmentList => frame => {

    forEach(segment=>{
        drawLine(frameCoordMap(frame)(startSegment(segment)), frameCoordMap(frame)(endSegment(segment)));
    }, segmentList);
}

const transformPainter = (painter, origin, corner1, corner2) => {
    return frame=> {
        const m = frameCoordMap(frame);
        const newOrigin = m(origin);
             return painter(makeFrame(
                newOrigin,
                subVect(m(corner1), newOrigin),
                subVect(m(corner2), newOrigin)));
    }
}

module.exports = {
    makeVect,
    xcorVect,
    ycorVect,
    addVect,
    subVect,
    scaleVect,
    segmentToPainter,
    makeFrame,
    originFrame,
    edge1Frame,
    edge2Frame,
    makeSegment,
    startSegment,
    endSegment,
    frameCoordMap,
    transformPainter
}