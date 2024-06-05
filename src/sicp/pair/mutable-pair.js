/**
 * 这个可变序对的构建很有技巧,有助于理解函数的本质
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const mutablePair = (a,b) => { 
    // 这里实际上在变化的就是x这个值
    return fn => {
        let x;
        [a,b,x] = fn(a,b);
        return x;
    }
}

const getLeft = (a, b) => {
    return [a,b,a];
}

const getRight = (a,b) => {
    return [a,b,b];
}

const setLeft = value => {
    return (a,b) =>[value,b,a]
}

const setRight = value => {
    return (a,b) =>[a,value,b]
}

const head = z => {
    return z(getLeft);
}

const tail = z => {
    return z(getRight);
}

const setHead = (z,value) => {
    return z(setLeft(value));
}

const setTail = (z,value) => {
    return z(setRight(value));
}

module.exports = {
    mutablePair,
    head,
    tail,
    setHead,
    setTail
}