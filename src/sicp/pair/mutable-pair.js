/**
 * 这个可变序对的构建很有技巧,有助于理解函数的本质
 * 这里提供了一个改变参数a或者b的值的一个方法
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const mutablePair = (a,b) => { 
    // 这里实际上在变化的就是x这个值
    return fn => {
        let x;
        // 这里可以通过外部函数fn来改变参数a或者b的值
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

// 其实可以看到，mp 接受的每个函数都是 (a, b) => [a, b, x] 这种形式。
// 这样就是能够给传递函数充分地信息来获取结构，然后生成充分足够地信息来更新 mp 闭包的内部。
// 如果我们再简化一点，把 a 和 b 作为一个对象比如 this 或者 self 来看，mp 接受的每个函数变成了 (self) => result。
// 其中对 self 的改变也包括在内。

// 这其实就是大部分编程语言的面向对象的“方法”的实现机制，都会给这些方法绑定一个 this 或者 self 变量，让方法内部可控制。

module.exports = {
    mutablePair,
    head,
    tail,
    setHead,
    setTail
}