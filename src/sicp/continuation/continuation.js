// (+ (* 2 3) 1)
// (* 2 3) evaluates to 6, and this 6 must be temporarily stored in memory
// (* 2 3) evaluates to 6, and this 6 must be temporarily stored in memory
const plus = (x, y, k) => {
  return k(x + y)
}

const multiple = (x, y, k) => {
  return k(x * y)
}

const divide = (x, y, k) => {
  return k(x / y)
}

const minus = (x, y, k) => {
  return k(x - y)
}

const sumWithK = (n, k) => {
  return plus(n, 1, (r1) => {
    return multiple(n, r1, (r2) => {
      return divide(r2, 2, (r3) => {
        return k(r3)
      })
    })
  })
}

const equal = (x, y, k) => {
  return k(x === y)
}

const reSumRecursive = (n, k) => {
  return equal(n, 0, (r1) => {
    if (r1) {
      return k(0)
    } else {
      return minus(n, 1, (r2) => {
        return reSumRecursive(r2, (r3) => {
          return plus(n, r3, k)
        })
      })
    }
  })
}

const factC = (n, k) => {
  return equal(n, 0, (r1) => {
    if (r1) {
      return k(1)
    }
    return minus(n, 1, (r2) => {
      return factC(r2, (r3) => {
        return multiple(n, r3, k)
      })
    })
  })
}

const id = (x) => x
module.exports = {
  plus,
  id,
  multiple,
  divide,
  sumWithK,
  equal,
  reSumRecursive,
  factC,
}
