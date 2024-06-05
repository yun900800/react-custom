const pair = (x, y)=> m =>{
    const setx = v => x = v;
    const sety = v => y = v;
    return m === 0 ? x : m === 1 ? y : m ==='set_head'? setx : m ==='set_tail'? sety: error(m, "argument not 0 or 1 -- pair");
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

const isPair = z => {
    return typeof z === 'function';
}

const isSimplePair = z =>{
    return isPair(z) &&  typeof tail(z) !=='function' 
        && typeof head(z) !== 'function';
}

// 这里需要注意几点
// pair 给我们构造了一个对象（这个时候已经不仅仅限于函数对象了），
// 然后我们通过另外定义的两个函数来去访问这个对象的内部结构，
// 而这个实际的内部结构并没有直接暴露给我们。

// 对象：pair 构造了一个有序对，这个对象可以由我们后续定义的方法来操作和访问
// 方法：left 和 right 两个函数本身并没有实际的意义，与 pair 对象绑定以后，可以利用 pair 中的数据来实现预期的行为
// 封装：pair 的内部结构在构造时确定，无法在外部获取和改变内部结构，只能通过定义 pair 的方法来处理

module.exports = {
    pair,
    head,
    tail,
    setHead,
    setTail,
    isPair,
    isSimplePair
}