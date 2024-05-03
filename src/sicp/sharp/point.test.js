import {
    makePoint,
    xPoint,
    yPoint,
    printPoint
} from './point';

describe('point test',()=> {
    it('makePoint test',()=> {
        const p1 = makePoint(-5,8);
        expect(xPoint(p1)).toEqual(-5);
        expect(yPoint(p1)).toEqual(8);
        printPoint(p1);
    });
});