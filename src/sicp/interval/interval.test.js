import {
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
} from './interval';

describe('interval test',()=> {
    it('addInterval test',()=>{
        const interval1 = makeInterval(3,5);
        const interval2 = makeInterval(4,7);

        const result = addInterval(interval1,interval2);
        expect(lowerBound(result)).toEqual(7);
        expect(upperBound(result)).toEqual(12);
    });
    it('subInterval test',()=>{
        const interval1 = makeInterval(3,5);
        const interval2 = makeInterval(4,7);

        const result = subInterval(interval1,interval2);
        expect(lowerBound(result)).toEqual(-4);
        expect(upperBound(result)).toEqual(1);
    });
    it('mulInterval test',()=>{
        const interval1 = makeInterval(3,5);
        const interval2 = makeInterval(4,7);

        const result = mulInterval(interval1,interval2);
        expect(lowerBound(result)).toEqual(12);
        expect(upperBound(result)).toEqual(35);
    });

    it('divInterval test',()=>{
        const interval1 = makeInterval(3,5);
        const interval2 = makeInterval(4,7);

        const result = divInterval(interval1,interval2);
        expect(lowerBound(result)).toEqual(0.42857142857142855);
        expect(upperBound(result)).toEqual(1.25);
    });

    it('makeCenterWidth test',()=> {
        const interval1 = makeCenterWidth(3,0.5);
        const interval2 = makeCenterWidth(4,0.2);
        expect(lowerBound(interval1)).toEqual(2.5);
        expect(upperBound(interval1)).toEqual(3.5);

        expect(center(interval2)).toEqual(4);
        expect(width(interval2)).toEqual(0.20000000000000018);
    });

    it('makeCenterPercent test',()=> {
        const interval1 = makeCenterPercent(3,0.1);
        expect(lowerBound(interval1)).toEqual(2.7);
        expect(upperBound(interval1)).toEqual(3.3);

        expect(percent(interval1)).toEqual(0.09999999999999994);
    });
});