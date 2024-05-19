import {
    head,
    isPair,
    pair,
    setHead,
    setTail,
    tail
} from '../pair/pair';

import {
    list,
    length
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

const appendNew = (items0, items1) => {
    setTail(lastPair(items0),items1);
    return items0;
}

            
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

const error = (m, msg) =>{
    throw new Error(m + msg)
}

const isEqual = (x,y) => x ===y;

const isEmptyList = arg => {
    return null === arg || undefined === arg ||  arg.length ===0;
}

function apply_in_underlying_javascript(prim,argument_list) {
    const argument_array = new Array();
    let i = 0;
    while (!isEmptyList(argument_list)) {
        argument_array[i++] = head(argument_list);
        argument_list = tail(argument_list);
    }
    return prim.apply(prim,argument_array);
}

const makeCycle = x => {
    setTail(lastPair(x),x);
    return x;
}

const mystery = v => {
    const loop = (x,y) => {
        if (null === x) {
            return y;
        } else {
            const temp = tail(x);
            setTail(x, y);
            return loop(temp, x);
        }
    }
    return loop(v,null)
}

const member = (item,x) => {
    return null === x
           ? null
           : item === head(x)
           ? x
           : member(item, tail(x));
}

const countPairs = x => {
    const inner = (x, memoList)=> {
        if (isPair(x) && !member(x,memoList)) {
            return inner(head(x), inner(tail(x), pair(x, memoList)))
        }
        return memoList;
    }
    return length(inner(x, null));
}

const loop = list => {
    const identity = pair(null,null);
    const iter = remainList => {
        if (null === remainList) {
            return false;
        }
        if (identityEqual(head(remainList)) ) {
            return true;
        } else {
            setHead(remainList,identity);
            return iter(tail(remainList));
        }
    }
    return iter(list);
}

const identityEqual = (x) => {
    return isPair(x) && head(x) === null && tail(x) === null;
}

const identityEquals = (x,y) => {
    return isPair(x) && isPair(y) && head(x) === head(y);
}

const loopNew = list => {
    const iter = (x,y) => {
        const stepOne = listWalk(1, x);
        const stepTwo = listWalk(2, y);
        if (null === stepOne || stepTwo === null) {
            return false;
        }
        if (identityEquals(stepOne,stepTwo)) {
            return true;
        }
        return iter(stepOne, stepTwo);
    }
    return iter(list,list);
}

const listWalk = (step,list)=> {
    if (null === list) {
        return null;
    }
    if (step === 0) {
        return list;
    }
    return listWalk(step-1, tail(list));
}

module.exports = {
    map,
    append,
    appendNew,
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
    primeSumPairNew,
    error,
    isEqual,

    isEmptyList,
    apply_in_underlying_javascript,

    makeCycle,
    mystery,
    member,
    countPairs,
    loop,
    loopNew,
    
    isPrime
}