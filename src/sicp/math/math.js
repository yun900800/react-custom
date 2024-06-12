const abs = x => x >= 0 ? x : -x;
const greaterOrEqual = (x,y) =>!(x < y);
const plus = (a,b) => a + b;
const minus = (a,b) => a - b;
const a_plus_abs_b = (a,b) => (b >= 0 ? plus : minus)(a, b);

const sqrtIter = (guess,x) => {
    const goodEnough = (guess,x) => {
    
        // return abs(guess*guess - x) <= 0.001;
        //上面的计算方法在计算较大的数和较小的数的时候会失效
        return relativeError(guess, improve(guess,x)) < 0.01
    }

    const average = (x,y) => {
        return (x+y) / 2;
    }

    // 返回新的猜测值
    const improve = (guess,x) => {
       return average(guess, x/guess);
    }

    const relativeError = (estimate, reference) => {
        return abs(estimate-reference) / reference;
    }

    if (goodEnough(guess,x)) {
        return guess;
    }
    return sqrtIter(improve(guess,x),x);
}

const cubeRootIter = (guess, x) => {
    const goodEnough = (guess,x) => {
    
        // return abs(guess*guess*guess - x) <= 0.001;
        //上面的计算方法在计算较大的数和较小的数的时候会失效
        return relativeError(guess, improve(guess,x)) < 0.01
    }

    const div3 = (x,y) => (x + y) / 3;
    // 返回新的猜测值
    const improve = (guess,x) => {
        return div3(x/(guess*guess), guess*2);
    }
    const relativeError = (estimate, reference) => {
        return abs(estimate-reference) / reference;
    }
    if (goodEnough(guess,x)) {
        return guess;
    }
    return cubeRootIter(improve(guess,x),x);
}

const sqrt = x => {
    return sqrtIter(1.0,x)
}

const cubeRoot = x => {
    return cubeRootIter(1.0,x)
}

// 这里的过程有类似的地方,这时应该猜测是否有抽象的可能
// 同时这里的分解问题的思维对应到计算过程就是分治的方法
// 这里一个计算平方根的问题分解为 1.goodEnough 迭代的值是否足够好
// 2. average 求平均数 3. improve 获取更优的平方根值
// 4. relativeError 前后迭代值的比较来支撑迭代的值是否足够好
// 5. 最后一步就是组合啦

// 求立方根的思维也是同样的道理

// 弄清除在设计过程的时候,定义什么,隐藏什么;比如对于goodEnough来说,square与其说是一个过程
// 不如说是一个抽象过程,在这一层次的抽象上,任何能求出平方的过程都OK,这就是将goodEnough看做黑箱的好处

module.exports = {
    abs,
    greaterOrEqual,
    plus,
    minus,
    a_plus_abs_b,
    sqrtIter,
    sqrt,
    cubeRoot
}