import {
    wave,

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

    it('segmentToPainter test',()=> {
        const topLeft = makeVect(0.0,1.0);
        const topRight = makeVect(1.0,1.0);
        const bottomLeft = makeVect(0.0,0.0);
        const bottomRight = makeVect(1.0,0.0);
        const topSegment = makeSegment(topLeft,topRight);
        const leftSegment = makeSegment(bottomLeft,topLeft);
        const bottomSegment = makeSegment(bottomLeft,bottomRight);
        const rightSegment = makeSegment(bottomRight,topRight);
        const painer1 = segmentToPainter(list(topSegment,leftSegment,bottomSegment,rightSegment));

        const frame1 = makeFrame(makeVect(1,1), makeVect(1,2),makeVect(2,1));
        painer1(frame1);
        const frame2 = makeFrame(makeVect(0,0), makeVect(1,0),makeVect(0,1));
        painer1(frame2);
        const frame3 = makeFrame(makeVect(1,1), makeVect(1,0),makeVect(0,1));
        painer1(frame3);
    })
});