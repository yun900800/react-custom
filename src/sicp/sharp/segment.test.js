import {
    makeSegment,
    startPoint,
    endPoint,
    printSegment,
    segment,
    midPointSegment
} from './segment';

import {
    makePoint,
    printPoint,
    point
} from './point';

describe('segment test',()=> {
    it('makeSegment test',()=> {
        const p1 = makePoint(-1,1);
        const p2 = makePoint(1,1);
        const s1 = makeSegment(p1,p2);
        expect(startPoint(s1)).toEqual(p1);
        expect(endPoint(s1)).toEqual(p2);

        printSegment(s1);
        expect('(-1,1)===>(1,1)').toEqual(segment(s1));
    });

    it('midPointSegment test',()=>{
        const p1 = makePoint(-1,-1);
        const p2 = makePoint(1,1);
        const s1 = makeSegment(p1,p2);
        const midPoint = midPointSegment(s1);
        printPoint(midPoint);
        expect('(0,0)').toEqual(point(midPoint));
    });
});