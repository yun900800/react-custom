import {
    mutablePair,
    head,
    tail,
    setHead,
    setTail
} from './mutable-pair';

describe('mutable-pair test',()=>{
    it('mutablePair test',()=>{
        const mutable1 = mutablePair(3,5);
        expect(head(mutable1)).toEqual(3);
        expect(tail(mutable1)).toEqual(5);
        setHead(mutable1,4);
        expect(head(mutable1)).toEqual(4);
        setTail(mutable1,6);
        expect(tail(mutable1)).toEqual(6);
    });
});

// function MutablePair(a, b) {
//     return (fn) => {
//         let x;
//         [a, b, x] = fn(a, b)
//         return x;
//     }
// }

// function getLeft(a, b) {
//     return [a, b, a];
// }

// function getRight(a, b) {
//     return [a, b, b];
// }

// function setLeft(value) {
//     return (a, b) => [value, b, a]
// }

// function setRight(value) {
//     return (a, b) => [a, value, b]
// }

// let mp = MutablePair(1, 2);

// console.log(mp(getLeft)); // 1
// console.log(mp(getRight)); // 2
// console.log(mp(setLeft(5))); // 1
// console.log(mp(getLeft)); // 5