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

module.exports = {
    pair,
    head,
    tail,
    setHead,
    setTail,
    isPair,
    isSimplePair
}