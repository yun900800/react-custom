import {
    pair,
    head,
    tail,
    setHead,
    setTail,
    isPair,
    isSimplePair
} from './pair';

describe('pair test',()=> {
    it('make pair test',()=> {
        const p1 = pair(3,5);
        expect(p1).not.toBeNull();
        expect(p1).not.toBeUndefined();
        expect(p1).toBeInstanceOf(Function);
    });

    it('make pair parameter test',()=> {
        const p1 = pair(3,'a');
        expect(p1).toBeInstanceOf(Function);
    });

    it('head(pair) test',()=> {
        const p1 = pair(3,'a');
        expect(head(p1)).toEqual(3);
        const p2 = pair(null,'a');
        expect(head(p2)).toBeNull();

        const p3 = pair(undefined,'a');
        expect(head(p3)).toBeUndefined();
    });

    it('tail(pair) test',()=> {
        const p1 = pair(3,'a');
        expect(tail(p1)).toEqual('a');
        const p2 = pair('a',null);
        expect(tail(p2)).toBeNull();

        const p3 = pair('c',undefined);
        expect(tail(p3)).toBeUndefined();
    });

    it('setHead test', () => {
        const p1 = pair(3,'a');
        expect(head(p1)).toEqual(3);
        setHead(p1, 5);
        expect(head(p1)).toEqual(5);
        setHead(p1, null);
        expect(head(p1)).toBeNull();
        setHead(p1, undefined);
        expect(head(p1)).toBeUndefined();
    });

    it('setTail test',()=>{
        const p1 = pair(3,'a');
        expect(tail(p1)).toEqual('a');
        setTail(p1, 5);
        expect(tail(p1)).toEqual(5);
        setTail(p1, null);
        expect(tail(p1)).toBeNull();
        setTail(p1, undefined);
        expect(tail(p1)).toBeUndefined();
    });

    it('isPair test',()=> {
        const p1 = pair(3,'a');
        expect(isPair(p1)).toBeTruthy();
        const p2 = pair(null,'a');
        expect(isPair(p2)).toBeTruthy();
        const p3 = pair(3,undefined);
        expect(isPair(p3)).toBeTruthy();
        const p4 = pair(undefined,undefined);
        expect(isPair(p4)).toBeTruthy();

        const p5 = pair(p1,p2);
        expect(isPair(p5)).toBeTruthy();
    });

    it('isSimplePair test',()=> {
        const p1 = pair(3,'a');
        expect(isSimplePair(p1)).toBeTruthy();
        const p2 = pair(null,'a');
        expect(isSimplePair(p2)).toBeTruthy();
        const p5 = pair(p1,p2);
        expect(isSimplePair(p5)).toBeFalsy();
    });

});