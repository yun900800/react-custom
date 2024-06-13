const abs = (x) => (x >= 0 ? x : -x)
const greaterOrEqual = (x, y) => !(x < y)
const plus = (a, b) => a + b
const minus = (a, b) => a - b
const a_plus_abs_b = (a, b) => (b >= 0 ? plus : minus)(a, b)

const sqrtIter = (guess, x) => {
  const goodEnough = (guess, x) => {
    // return abs(guess*guess - x) <= 0.001;
    //上面的计算方法在计算较大的数和较小的数的时候会失效
    return relativeError(guess, improve(guess, x)) < 0.01
  }

  const average = (x, y) => {
    return (x + y) / 2
  }

  // 返回新的猜测值
  const improve = (guess, x) => {
    return average(guess, x / guess)
  }

  const relativeError = (estimate, reference) => {
    return abs(estimate - reference) / reference
  }

  if (goodEnough(guess, x)) {
    return guess
  }
  return sqrtIter(improve(guess, x), x)
}

const cubeRootIter = (guess, x) => {
  const goodEnough = (guess, x) => {
    // return abs(guess*guess*guess - x) <= 0.001;
    //上面的计算方法在计算较大的数和较小的数的时候会失效
    return relativeError(guess, improve(guess, x)) < 0.01
  }

  const div3 = (x, y) => (x + y) / 3
  // 返回新的猜测值
  const improve = (guess, x) => {
    return div3(x / (guess * guess), guess * 2)
  }
  const relativeError = (estimate, reference) => {
    return abs(estimate - reference) / reference
  }
  if (goodEnough(guess, x)) {
    return guess
  }
  return cubeRootIter(improve(guess, x), x)
}

const sqrt = (x) => {
  return sqrtIter(1.0, x)
}

const cubeRoot = (x) => {
  return cubeRootIter(1.0, x)
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

//计算分钱币的思路
// 首先，需要组合的钱币金额记为a,钱币的总数为n
// 如果a == 0, 那么 count = 1; 同理 a < 0, count = 1; n == 0, count = 0
// 分钱币的时候分为两类,不使用第一种钱币的分类数目 + 使用第一类钱币的分类数目

const count_change = (amount, n) => {
  if (amount === 0) {
    return 1
  }
  if (amount < 0 || n === 0) {
    return 0
  }
  return (
    count_change(amount, n - 1) + count_change(amount - numberToAmount(n), n)
  )
}
const count_charge_new = (amount, n, k) => {
  if (amount === 0) {
    return k(1)
  }
  if (amount < 0 || n === 0) {
    return k(0)
  }
  return count_charge_new(amount, n - 1, (r1) => {
    return count_charge_new(amount - numberToAmount(n), n, (r2) => {
      return k(r1 + r2)
    })
  })
}

const numberToAmount = (n) => {
  if (n === 5) {
    return 50
  }
  if (n === 4) {
    return 25
  }
  if (n === 3) {
    return 10
  }
  if (n === 2) {
    return 5
  }
  if (n === 1) {
    return 1
  }
}

const countChange = (amount) => count_change(amount, 5);

/**
 * 递归函数容易理解和翻译
 * @param {*} n 
 * @returns 
 */
const fRecursive = n => {
  return n < 3
    ? n
    : fRecursive(n-1) +
    2*fRecursive(n-2) +
    3*fRecursive(n-3);
}

const fIterate = n => {
  return n < 3 
    ? n
    : fIterateImpl(2,1,0,n-2)
}
// fIterate(0) = 0;
// fIterate(1) = 1;
// fIterate(2) = 2;
// fIterate(3) = fIterateImpl(2,1,0,1) = 4
// fIterate(4) = fIterateImpl(2,1,0,2)

// fIterateImpl(2,1,0,2) = fIterateImpl(4,2,1,1)
// fIterateImpl(4,2,1,1) = fIterateImpl(13,6,2,0) = 11

const fIterateImpl = (a,b,c,n) =>{
  return n === 0 
    ? a
    : fIterateImpl(a+2*b+3*c,a,b,n-1);
}

module.exports = {
  abs,
  greaterOrEqual,
  plus,
  minus,
  a_plus_abs_b,
  sqrtIter,
  sqrt,
  cubeRoot,
  countChange,
  count_charge_new,
  fRecursive,
  fIterate
}
