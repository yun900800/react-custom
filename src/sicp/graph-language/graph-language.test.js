import {
    wave,
    flip_vert,
    shrinkToUpperRight,
    rotate90,
    beside,
    flip_horiz,

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

    segmentToPainter
} from './graph-language';


import {
    list
} from '../list/list'
describe('graph language test',()=>{
    it('wave test',()=> {
        const result = wave('flower','canvas');
        expect(result).toEqual('draw element:flower in:canvas.');
    });

    it('build vect test',()=>{
        const vect = makeVect(0.5,1.0);
        expect(0.5).toEqual(xcorVect(vect));
        expect(1.0).toEqual(ycorVect(vect));
    });

    it('addVect test',()=>{
        const vect1 = makeVect(0.5,1.0);
        const vect2 = makeVect(1.5,2.5);
        const result = addVect(vect1, vect2);
        expect(2.0).toEqual(xcorVect(result));
        expect(3.5).toEqual(ycorVect(result));
    });

    it('subVect test',()=>{
        const vect1 = makeVect(0.5,1.0);
        const vect2 = makeVect(1.5,2.5);
        const result = subVect(vect1, vect2);
        expect(-1).toEqual(xcorVect(result));
        expect(-1.5).toEqual(ycorVect(result));
    });
    it('scaleVect test',()=>{
        const vect1 = makeVect(0.5,1.0);
        const result = scaleVect(vect1, 10);
        expect(5).toEqual(xcorVect(result));
        expect(10).toEqual(ycorVect(result));
    });

    it('vector test',()=> {
        const vect1 = makeVect(0.5,1.0);
        const result = scaleVect(vect1, 10);
        expect('(5,10)').toEqual(vector(result));
    });

    it('makeFrame test',()=> {
        const frame1 = makeFrame(makeVect(1,1), makeVect(1,2),makeVect(2,1));
        const origin = originFrame(frame1);
        expect('(1,1)').toEqual(vector(origin));
        const edge1 = edge1Frame(frame1);
        expect('(1,2)').toEqual(vector(edge1));
        const edge2 = edge2Frame(frame1);
        expect('(2,1)').toEqual(vector(edge2));
    });

    const createPainter =() => {
        const topLeft = makeVect(0.0,1.0);
        const topRight = makeVect(1.0,1.0);
        const bottomLeft = makeVect(0.0,0.0);
        const bottomRight = makeVect(1.0,0.0);
        const topSegment = makeSegment(topLeft,topRight);
        const leftSegment = makeSegment(bottomLeft,topLeft);
        const bottomSegment = makeSegment(bottomLeft,bottomRight);
        const rightSegment = makeSegment(bottomRight,topRight);
        const painer1 = segmentToPainter(list(topSegment,leftSegment,bottomSegment,rightSegment));
        return painer1;
    }

    it('segmentToPainter test',()=> {
        const topLeft = makeVect(0.0,1.0);
        const topRight = makeVect(1.0,1.0);
        const bottomLeft = makeVect(0.0,0.0);
        const bottomRight = makeVect(1.0,0.0);
        const painer1 = createPainter();

        const frame1 = makeFrame(makeVect(1,1), makeVect(1,2),makeVect(2,1));
        painer1(frame1);
        const frame2 = makeFrame(makeVect(0,0), makeVect(1,0),makeVect(0,1));
        painer1(frame2);
        const frame3 = makeFrame(makeVect(1,1), makeVect(1,0),makeVect(0,1));
        painer1(frame3);

        const leftTopToTightBottom = makeSegment(topLeft, bottomRight);
        const rightTopToLeftBottom = makeSegment(topRight, bottomLeft);

        const painer4 = segmentToPainter(list(leftTopToTightBottom,rightTopToLeftBottom));
        painer4(frame2);

        const topMid = makeVect(0.5,1);
        const bottomMid = makeVect(0.5,0);
        const rightMid = makeVect(1,0.5);
        const leftMid = makeVect(0,0.5);
        const line1 = makeSegment(topMid,rightMid);
        const line2 = makeSegment(rightMid,bottomMid);
        const line3 = makeSegment(bottomMid, leftMid);
        const line4 = makeSegment(leftMid, topMid);

        const painer5 = segmentToPainter(list(line1,line2,line3,line4));
        painer5(frame2);
    });

    it('flip_vert test',()=> {
        const painer1 = createPainter();
        const frame1 = makeFrame(makeVect(1,1), makeVect(1,2),makeVect(2,1));
        console.log('painter1,frame1');
        painer1(frame1);

        const painter2 = flip_vert(painer1);
        console.log('painter2,frame1');
        painter2(frame1);
    });

    it('shrinkToUpperRight test',()=> {
        const painer1 = createPainter();
        const frame1 = makeFrame(makeVect(0,0), makeVect(1,0),makeVect(0,1));
        painer1(frame1);
        const painter2 = shrinkToUpperRight(painer1);
        painter2(frame1);

    });

    it('rotate90 test',()=>{
        const painer1 = createPainter();
        const frame1 = makeFrame(makeVect(0,0), makeVect(1,0),makeVect(0,1));
        painer1(frame1);
        const painter2 = rotate90(painer1);
        painter2(frame1);
    });

    it('beside test', ()=>{
        const painer1 = createPainter();
        const frame1 = makeFrame(makeVect(0,0), makeVect(1,0),makeVect(0,1));
        const painter2 = beside(painer1, painer1);
        console.log('beside  test');
        painter2(frame1);
    });

    it('flip_horiz test', ()=>{
        const painer1 = createPainter();
        const frame1 = makeFrame(makeVect(0,0), makeVect(1,0),makeVect(0,1));
        const painter2 = flip_horiz(painer1);
        console.log('flip_horiz  test');
        painter2(frame1);
    })

});