import {
    makeRectangle,
    printRectangle,
    perimeter,
    areaRectangle
} from './rectangle';

import {
    makeSegment
} from './segment';

import {
    makePoint
} from './point';

describe('rectangle test',()=> {
    const createRectangle = ()=> {
        const l1 = makeSegment(makePoint(1,4),makePoint(4,4));
        const l2 = makeSegment(makePoint(1,2),makePoint(4,2));
        const w1 = makeSegment(makePoint(1,2),makePoint(1,4));
        const w2 = makeSegment(makePoint(4,2),makePoint(4,4));
        const rectangle = makeRectangle(l1,l2,w1,w2);
        return rectangle;
    }
    it('makeRectangle test',()=> {
        const rectangle = createRectangle();
        printRectangle(rectangle);
    });

    it('perimeter test',()=> {
        const rectangle = createRectangle();
        expect(perimeter(rectangle)).toEqual(10)
    });
    it('areaRectangle test',()=> {
        const rectangle = createRectangle();
        expect(areaRectangle(rectangle)).toEqual(6)
    });
});