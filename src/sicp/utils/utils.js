import {
    head,
    isPair,
    pair,
    tail
} from '../pair/pair';

import {
    list,
    printList
} from '../list/list'

const map = (func,items)=> {
    if (null == items) {
        return null;
    }
    return pair(func(head(items)), map(func, tail(items)));
}

const append = (items0, items1) =>
        items0 === null ?
            items1 :
            pair(head(items0), append(tail(items0), items1));

            
const lastPair = (list) => {
    if (list == null) {
        return 'empty';
    }
    if (null == tail(list)) {
        return list;
    }
    return lastPair(tail(list));
}

const forEach = (func,list) => {
    if (null!== list) {
        func(head(list));
        forEach(func, tail(list));
    }
}

const filter = function(predicate,sequence) {
    if (null== sequence) {
        return null;
    }
    if (predicate(head(sequence))) {
        return pair(head(sequence), filter(predicate,tail(sequence)));
    } else {
        return filter(predicate,tail(sequence));
    }
}

const acculator = function(op, initial, sequence) {
    if (null===sequence ){
        return initial;
    } else {
        return op(head(sequence), acculator(op,initial,tail(sequence)));
    }
}

const foldLeft = (op,init, seqs) => {
    const iter = (result,rest) => {
        if (null === rest) {
            return result;
        }
        return iter(op(result, head(rest)), tail(rest));
    }
    return iter(init,seqs);
}

const foldRight = acculator;

const anotherMap = (p,sequence) => {
    return acculator((x,y)=>pair(p(x),y), null,sequence);
}

const anotherAppend = (seq1,seq2) =>{
    return acculator(pair, seq2,seq1);
}

const anotherLength = seq => {
    return acculator((x,y)=>y+1,0,seq);
}

const gcd = function(a,b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a%b);
}

const square = x =>x*x;

const isOdd = x => x % 2 ===1;
const isEven = x => x % 2 ===0 ;

const fibIter = function(n){
    return fibIterInter(1,1,n)
}

const fibIterInter = function(a,b,count) {
    if (count === 0) {
        return b;
    }
    return fibIterInter(a+b, a, count-1);
}

const enumerate = (low, high) => {
    if (low > high) {
        return null;
    }
    return pair(low, enumerate(low+1,high));
}

const enumerateTree = (tree) => {
    if (null === tree) {
        return null;
    }
    if (!isPair(tree)) {
        return pair(tree,null);
    }
    return append(enumerateTree(head(tree)), 
        enumerateTree(tail(tree)));
}

const flatmap = (fn, seq) => {
    return acculator(append ,null, map(fn, seq));
}

const isPrime = n => {
    return findDivisor(n,2) === n;
}

const findDivisor = (n, test) => {
    if (square(test) > n) {
        return n;
    }
    if (divides(test,n)) {
        return test;
    }
    return findDivisor(n,test+1);
}

const divides = (a,b) => {
    return b%a === 0
}

const primSum = pair => {
    return isPrime(head(pair) + head(tail(pair)));
}

const makePairSum = pair => {
    return list(head(pair), head(tail(pair)), head(pair) + head(tail(pair)));
}

const primeSumPair = n => {
    return map(makePairSum,
        filter(
            primSum,
            flatmap(
                i=>map(j=>list(i,j), enumerate(1,i-1)),
                enumerate(1,n)
            )
        )
    );
}
const generatePair = (n)=> {
    return acculator(append,
        null,
        map(
            (i)=>{
                return map(
                    j=>list(i,j),
                    enumerate(1,i-1)
                );
            },
            enumerate(1,n)
        )
    )
}

/**
 * 这个函数有问题
 * 
 * @param {*} seq 
 * @returns 
 */
const permutations = seq => {
    if (null === seq) {
        return list('empty');
    }
    return flatmap(x=>{
        return map(p=>pair(x,p),
            permutations(remove(x,seq))
        );
    },
                seq);
}

const uniquePair = n => {
    return flatmap(i=>map(
        j=>list(i,j),
        enumerate(1,i-1)
    ), enumerate(1,n))
}

const primeSumPairNew = n => {
    return map(makePairSum,
        filter(
            primSum,
            uniquePair(n)
        )
    );
}

const remove = (item, sequence)=> {
    return filter(x => x !== item,
                  sequence);
}

module.exports = {
    map,
    append,
    lastPair,
    forEach,
    filter,
    acculator,
    gcd,
    square,
    fibIter,
    enumerate,
    isOdd,
    isEven,
    enumerateTree,

    anotherMap,
    anotherAppend,
    anotherLength,

    foldLeft,
    foldRight,
    generatePair,
    primeSumPair,

    permutations,
    uniquePair,
    primeSumPairNew
}