const cons = (a,b) => f => f(a,b);
//cons是一个函数,这个函数接收两个参数
const car = (p)=>p((p,q)=>p);
//car函数执行的作用之一就是返回第一个参数
const cdr = (p)=>p((p,q)=>q);
//cdr函数执行的作用之一就是返回第二个参数

const isCons = cons => {
    return typeof cons === 'function';
}

const listFromCons = (first,...rest) =>!first?null:cons(first, listFromCons(...rest));

const isList = list=> {
    return typeof cons === 'function' && typeof car(list) !== 'function' &&
        typeof cdr(list) === 'function';
}
const printList = (list)=> {
    let msg = '';
    const iter = (items) => {
        if (null === items) {
            return;
        }
        msg += car(items) +','
        iter(cdr(items));
    }
    iter(list);
    msg = msg.substring(0, msg.length-1);
    return msg;
}

const display = msg => {
    console.log(msg);
}

/**
 * 这个可以用来理解环境模型
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const cons1 = (a,b) => {
    //定义的函数f的环境是包含a和b的E1,
    //因此调用的时候创建的环境E2一定要从E1中获取
    //所以调用的时候的值一定是构建序对时候的参数值
    let a1 = f =>f(a,b);
    return a1;
}


module.exports = {
    cons,
    car,
    cdr,
    isCons,
    cons1,
    listFromCons,
    printList,
    display,
    isList
}