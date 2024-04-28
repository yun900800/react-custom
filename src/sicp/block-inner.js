const sqrt = function(x) {
    const goodEnough = function(guess){
        return Math.abs(x - guess*guess)< 0.0001
    }
    const improveGuess = function(guess) {
        return average(guess , x / guess);
    }

    const average = function(x,y) {
        return ( x + y ) / 2;
    }

    const sqrtIter = function(guess) {
        if (goodEnough(guess)) {
            return guess;
        } 
        return sqrtIter(improveGuess(guess))
    }
    return sqrtIter(1.0)
}

const sqrtRet = sqrt(5);
console.log('sqrtRet',sqrtRet);
const map = new Map();
const treeRecursiveWithMemo = function(n) {
    if (map.has(n)) {
        return map.get(n);
    }
    if (n < 3) {
        map.set(n,n);
        return n;
    }
    const ret= treeRecursiveWithMemo(n-1) + 2* treeRecursiveWithMemo(n-2) + 3* treeRecursiveWithMemo(n-3);
    map.set(n,ret);
    return ret;
}

const treeRecursive = function(n) {
    if (n < 3) {
        return n;
    }
    const ret= treeRecursive(n-1) + 2* treeRecursive(n-2) + 3* treeRecursive(n-3);
    return ret;
}
//f(0)=0 f(1)=1 f(2)=2 f(3)=4 f(4)= f(3) + 2f(2) +3f(1)
let treeRecursiveRet = treeRecursive(3);
console.log('treeRecursiveRet',treeRecursiveRet);
console.time('treeRecursive(30)')
treeRecursiveRet = treeRecursive(30);
console.timeEnd('treeRecursive(30)')
console.log('treeRecursiveRet',treeRecursiveRet);
console.time('treeRecursiveWithMemo(30)')
treeRecursiveRet = treeRecursiveWithMemo(40);
console.timeEnd('treeRecursiveWithMemo(30)')
console.log('treeRecursiveWithMemo',treeRecursiveRet);

//a = f(i+2) b=f(i+1) c=f(i)
const fnIter = function(n) {
    const iter = function(a,b,c,i,n) {
        if (i==n) {
            return c;
        }
        return iter(a+2*b+3*c, a,b, i+1, n);
    }
    return iter(2,1,0,0,n)
}
const fnIterRet = fnIter(40);
console.log('fnIterRet',fnIterRet);

const pascal = function(row,col) {
    if (col == 0 || row == col) {
        return 1;
    }
    return pascal(row-1,col-1) + pascal(row-1,col);
}

console.log('pascal(4,0)',pascal(4,0));
console.log('pascal(4,4)',pascal(4,4));
console.log('pascal(4,2)',pascal(4,2));

let executeCount = 0;
const cube = function(x) {
    return x*x*x;
}

const p = function(x) {
    executeCount++;
    return 3*x - 4* cube(x);
}
const sin = function(x) {
    if (Math.abs(x)<=0.1) {
        return x;
    }
    return p(sin(x/3));
}
const sinRet = sin(12.15);
console.log('sinRet',sinRet);
console.log('executeCount',executeCount);

const expt = function(b,n) {
    if (n==0) {
        return 1;
    }
    return b* expt(b,n-1);
}

const exptRet = expt(2,5);
console.log('exptRet',exptRet);

const exptIter = function(b,n) {
    const iter = function(b,count,l) {
        if (count == 0) {
            return l; 
        }
        return iter(b, count-1, l*b);
    }
    return iter(b,n,1);
}
const exptIterRet = exptIter(2,5);
console.log('exptIterRet',exptIterRet);

const fastExpt = function(b,n) {
    if (n== 0) {
        return 1;
    }
    if (even(n)) {
        return fastExpt(b, n/2) * fastExpt(b, n/2);
    } else {
        return b * fastExpt(b, n-1);
    }
}

const even = function(x) {
    return x % 2 === 0;
}

const fastExptRet = fastExpt(2,12);
console.log('fastExptRet',fastExptRet);

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
const fastExptIterRet = fastExptIter(2,12);
console.log('fastExptIterRet',fastExptIterRet);