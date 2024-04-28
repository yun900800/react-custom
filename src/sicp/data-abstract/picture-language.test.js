import {
    makeVect,
    xcorVect,
    ycorVect, 
    addVect,
    subVect, 
    scaleVect,

    makeFrame,
    originFrame,
    edge1Frame,
    edge2Frame,

    makeSegment,
    startSegment,
    endSegment,

    frameCoordMap,
    segmentToPainter
} from './picture-language';
import {listJs, printListJs} from './sicp';

describe('makeVect test',()=> {
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
    })
});

describe('makeFrame test',()=>{
    it('build frame test',()=>{
        const origin = makeVect(1,1);
        const edge1 = makeVect(1,2);
        const edge2 = makeVect(3,3);
        const frame = makeFrame(origin,edge1,edge2);
        expect(origin).toEqual(originFrame(frame));
        expect(edge1).toEqual(edge1Frame(frame));
        expect(edge2).toEqual(edge2Frame(frame))
    });
});

describe('makeSegment test', ()=>{
    it('build segment test',()=>{
        const startP = makeVect(0.5,0.0);
        const endP = makeVect(1,1);
        const segment = makeSegment(startP, endP);
        expect(startP).toEqual(startSegment(segment));
        expect(endP).toEqual(endSegment(segment));
    });
});

describe('frameCoordMap test', ()=>{
    it('frameCoordMap test is ok', ()=>{
        const vect1 = makeVect(5,5);
        const origin = makeVect(1,1);
        const edge1 = makeVect(1,2);
        const edge2 = makeVect(3,3);
        const frame = makeFrame(origin,edge1,edge2);
        const result = frameCoordMap(frame)(vect1);
        expect(21).toEqual(xcorVect(result));
        expect(26).toEqual(ycorVect(result));
    })
});

describe('segmentToPainter test',()=>{
    it('segmentToPainter test is OK', ()=>{
        const topLeft = makeVect('0.0','1.0');
        const topRight = makeVect('1.0','1.0');
        const bottomLeft= makeVect('0.0','0.0');
        const bottomRight= makeVect('1.0','0.0');

        const top = makeSegment(topLeft,topRight);

        const left = makeSegment(topLeft,bottomLeft);
        const bottom = makeSegment(bottomLeft,bottomRight);
        const right = makeSegment(topRight,bottomRight);

        const origin = makeVect('1','1');
        const edge1 = makeVect('1','2');
        const edge2 = makeVect('3','3');
        const frame = makeFrame(origin,edge1,edge2);

        const painter = segmentToPainter(listJs(top, left,bottom,right));
        painter(frame);
    });
});