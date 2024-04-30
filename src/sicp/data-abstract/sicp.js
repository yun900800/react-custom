const cons = (a,b) => f => f(a,b);
//cons是一个函数,这个函数接收两个参数
const car = (p)=>p((p,q)=>p);
//car函数执行的作用之一就是返回第一个参数
const cdr = (p)=>p((p,q)=>q);
//cdr函数执行的作用之一就是返回第二个参数


const error = (m, msg) =>{
    throw new Error(m + msg)
}
const pair = (x, y)=>m=>{
    const setx = v => x = v;
    const sety = v => y = v;
    return m === 0 ? x : m === 1 ? y : m ==='set_head'? setx : m ==='set_tail'? sety: error(m, "argument not 0 or 1 -- pair");
}
let isPair = (seq) => {
    if (null === seq) {
        return false;
    }
    if (typeof seq !== 'function') {
        return false;
    }
    return typeof seq === 'function';
}

const head = z =>{
    if(null == z){
        return null;
    }
    return z(0)
}
const tail = z =>{
    if(null == z){
        return null;
    }
    return z(1)
}

const setHead = (z,v) => {
    z("set_head")(v);
    return z;
}

const setTail = (z,v) => {
    z("set_tail")(v);
    return z;
}

const pairMut = (x,y) => {
    const setx = v => x = v;
    const sety = v => y = v;
    return m => m === "head"
                ? x
                : m === "tail"
                ? y
                : m === "set_head"
                ? setx
                : m === "set_tail"
                ? sety
                : error(m, "undefined operation -- pair");
}

const headMut = z => z('head');
const tailMut = z => z('tail');
const setHeadMut = (z,v) => {
    z('set_head')(v);
    return z;
}
const setTailMut = (z,v) => {
    z('set_tail')(v);
    return z;
}

const entry = tree=> head(tree)
const leftBranch = tree => head(tail(tree))
const rightBranch = tree => {
    const result = head(tail(tail(tree)));
    return result;
}
const makeTree = (entry, left, right) => listJsNew(entry,left,right);

const listJs = (first,...rest) =>!first?null:pair(first, listJs(...rest));
const listJsNew = (first,...rest) => {
    // if (first === null && rest != null){
    //     return pair(first, listJsNew(...rest));
    // }
    if (first === undefined && rest.length ===0) {
        return null;
    }
    return pair(first, listJsNew(...rest));
}
const is_null = x => null === x;
const isEqual = (x,y) => x ===y;
const member = (item, x) => {
    return is_null(x)
           ? null
           : item === head(x)
           ? x
           : member(item, tail(x));
}

const list = (first,...rest) =>!first?null:cons(first, list(...rest));

const map = (func,items) => {
    if (null == items) {
        return null;
    }
    return cons(func(car(items)), map(func, cdr(items)));
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
    if (predicate(car(sequence))) {
        return cons(car(sequence), filter(predicate,cdr(sequence)));
    } else {
        return filter(predicate,cdr(sequence));
    }
}

const acculator = function(op, initial, sequence) {
    if (null===sequence ){
        return initial;
    } else {
        return op(car(sequence), acculator(op,initial,cdr(sequence)));
    }
}

const printListJs = (items) => {
    if (items !== null) {
        console.log(head(items));
        printListJs(tail(items));
    } else {
        return null;
    }
}

const printList = (items) =>
    items !== null ?
        (console.log(car(items)), printList(cdr(items))) :
        null;
const append = (items0, items1) =>
        items0 === null ?
            items1 :
            cons(car(items0), append(cdr(items0), items1))

const appendJs = (items0, items1) =>
        items0 === null ?
            items1 :
            pair(head(items0), appendJs(tail(items0), items1))
const appendMutator = (x,y) => {
    setTail(lastPair(x),y);
    return x;
}

const reverse = (items) =>
        items === null ?
            items :
            append(reverse(cdr(items)), list(car(items)));
const reverseJs = items => 
        items === null ?
            items :
            appendJs(reverseJs(tail(items)), listJs(head(items)));

const lastPair = x => {
    if (null === tail(x)) {
        return x;
    }
    return lastPair(tail(x))
}

const consp = (a,b)=>{
    const dispatch = m=>{
        if (m===0){
            return a;
        }
        if (m===1) {
            return b;
        } else {
            throw new Error("参数不对，只能是0或者1");
        }
    }
    return dispatch;
}

const even = function(x) {
    return x % 2 === 0;
}
const fastExptIter = function(b,n) {
    const iter = function(b,n, l) {
        if (n == 0) {
            return l;
        }
        if (even(n)) {
            return iter(b*b, n/2, l)
        } else {
            return iter(b, n-1, b*l)
        }
    }
    return iter(b,n,1);
}

const carp = p=>p(0);
const cdrp = p=>p(1);

const consm = (a,b)=>{
    return fastExptIter(2,a) * fastExptIter(3,b);
}
const carm = cons => {
    if (cons % 2===0 ) {
        return 1+ carm(cons/2)
    } else {
        return 0
    }
}
const cdrm = cons => {
    if (cons % 3===0 ) {
        return 1+ cdrm(cons/3)
    } else {
        return 0
    }
}

const gcd = function(a,b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a%b);
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

module.exports =  {
    cons,
    car,
    cdr,
    pair,
    head,
    tail,
    setHead,
    setTail,
    listJs,
    listJsNew,
    list,
    printList,
    printListJs,
    reverse,
    reverseJs,
    append,
    appendJs,
    consp,
    carp,
    cdrp,
    consm,
    carm,
    cdrm,
    map,
    filter,
    acculator,
    forEach,
    error,
    isEqual,
    entry,
    leftBranch,
    rightBranch,
    makeTree,
    isPair,
    gcd,
    pairMut,
    tailMut,
    headMut,
    setHeadMut,
    setTailMut,
    lastPair,
    appendMutator,
    makeCycle,
    mystery
}

//test
// const aaa = cons(3,5);
// console.log(car(aaa));
// console.log(cdr(aaa));

// const list1 = list(1,2,3,4,5);
// printList(list1);
// const list2 = list(10,20,30,40,50);
// printList(reverse(list2))
// printList(append(list1,list2))

// const bbb = consp(3,5);
// console.log(carp(bbb));
// console.log(cdrp(bbb));

// const ccc = consm(3,5);
// console.log(carm(ccc));
// console.log(cdrm(ccc));