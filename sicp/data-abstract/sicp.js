const cons = (a,b) => f => f(a,b);
//cons是一个函数,这个函数接收两个参数
const car = (p)=>p((p,q)=>p);
//car函数执行的作用之一就是返回第一个参数
const cdr = (p)=>p((p,q)=>q);
//cdr函数执行的作用之一就是返回第二个参数

const list = (first,...rest) =>!first?null:cons(first, list(...rest));

const map = (func,items) => {
    if (null == items) {
        return null;
    }
    return cons(func(car(items)), map(func, cdr(items)));
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

const printList = (items) =>
    items !== null ?
        (console.log(car(items)), printList(cdr(items))) :
        null;
const append = (items0, items1) =>
        items0 === null ?
            items1 :
            cons(car(items0), append(cdr(items0), items1))
    
const reverse = (items) =>
        items === null ?
            items :
            append(reverse(cdr(items)), list(car(items)));


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

module.exports =  {
    cons,
    car,
    cdr,
    list,
    printList,
    reverse,
    append,
    consp,
    carp,
    cdrp,
    consm,
    carm,
    cdrm,
    map,
    filter,
    acculator
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