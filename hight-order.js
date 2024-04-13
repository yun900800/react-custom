const { randomInt } = require("crypto");

function sumOfinteger(a,b) {
    if (a>b) {
        return 0;
    }
    return a +sumOfinteger(a+1,b);
}

let result = sumOfinteger(3,4);
console.log(result);

function sumOfinteger1(a,b) {
    if (a>b) {
        return 0;
    }
    return a*a +sumOfinteger1(a+1,b);
}
result = sumOfinteger1(3,4);
console.log(result);

function piSum(a,b){
    if (a>b) {
        return 0;
    }
    return 1/ (a * (a+2)) + piSum(a+4,b);
}

result = piSum(1,100);
console.log(result);

function sum(term,a, next,b){
    if (a > b) {
        return 0;
    }
    return term(a) + sum(term,next(a), next, b);
}

const f1 = function(a){
    return a*a;
}

const f2 = function(a){
    return a*a*a;
}

const f3 = function(a){
    return 1/(a* (a+2))
}

const next1 = function(a) {
    return a+1;
}

const next2 = function(a) {
    return a+4;
}

result =sum(f1,1,next1,3);
console.log(result);

function sumCube(a,b) {
    return sum(f2,a,next1,b)
}
result =sumCube(1,10);
console.log(result);

function piSum1(a,b){
    return sum(f3,a,next2,b)
}

result =piSum1(1,100);
console.log(result);



function integral(f,a,b,dx){
    const f4 = function(x) {
        return x+dx;
    }
    return dx * sum(f, a+dx/2, f4,b);
}

const cube = function(a) {
    return a*a*a;
}

result = integral(cube,0,1,0.001);
console.log(result);

//阶乘的递归,递归计算过程,先展开后计算
//解释器需要维护好以后执行操作的轨迹,
//这个轨迹的长度正比于N，因此成为线性递归过程
const factorial = function(n){
    if(n == 1) {
        return 1;
    }
    return n * factorial(n-1);
}

//阶乘的迭代,注意，迭代需要依赖product和iter这两个变量,而递归则不依赖,实际是依赖于调用栈
//迭代需要保存的轨迹只有三个product和iter,maxCount
//迭代计算过程只需要保存固定数目的状态变量
//同时存在着一个状态转换规则，一个结束规则(索引的转换以及计算值的转换)
const factorialInnerIter = function(product, iter, maxCount) {
    if (iter > maxCount) {
        return product;
    }
    return factorialInnerIter(product*iter, iter+1,maxCount);
}
//阶乘的迭代
const factorialIter = function(n) {
    return factorialInnerIter(1,1,n)
}

const factorialSet = function(n) {
    let product = 1;
    let count = 1;
    const iter = ()=>{
        if (count > n) {
            return product;
        }
        product *=count;
        count+=1;
        return iter();
    }
    return iter();
}

result = factorialSet(10);
console.log('result',result);

//递归计算过程与递归过程
//理解什么是树形递归
result = factorial(10);
console.log(result);
result = factorialIter(10);
console.log(result);

const fib = function(n){
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}
result = fib(10);
console.log(result);
const fibIter = function(n){
    return fibIterInter(1,1,n)
}

const fibIterInter = function(a,b,count) {
    if (count === 0) {
        return b;
    }
    return fibIterInter(a+b, a, count-1);
}
result = fibIter(10);
console.log(result);

//过程
let linearCombination = function(a,b,x,y) {
    return a*x+b*y;
}
linearcombination = function(a,b,x,y) {
    add(mul(a,x), mul(b,y));
}

let add = function(x, y){
    return x + y;
}
let mul = function(a,b){
    return a*b;
}

const gcd = function(a,b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a%b);
}
//构造函数
const Rat = function(a,b) {
    this.gcd = gcd(a,b);
    this.a = a / this.gcd;
    this.b = b / this.gcd;
    //选择函数
    this.number = function(){
        return this.a;
    }
    this.denom = function(){
        return this.b;
    }

    this.addRat = function(a) {
        const numberPart = this.number() * a.denom() + a.number() * this.denom();
        const denomPart = this.denom() * a.denom();
        return new Rat(numberPart,denomPart);
    }
}


const rat1 = new Rat(3,5);
console.log(rat1.number() === 3);
console.log(rat1.denom() === 5);
const rat2 = new Rat(1,5);
result = rat1.addRat(rat2);
console.log(result.number());
console.log(result.denom());



result = gcd(28,8)
console.log(result)

const cons = function(x,y) {
    const dispatch = function(m){
        if (m == 0){
            return x;
        }
        if (m == 1) {
            return y;
        }
    }
    return dispatch;
}

const car = function(cons){
    return cons(0)
}
const cdr = function(cons){
    return cons(1)
}

const aaa = cons(1,5);
const aaa0 = car(aaa)
const aaa1 = cdr(aaa);
console.log(aaa0, aaa1);

const a = cons(1,5);
const b = cons(a,6);
const c = car(b);
const d = cdr(b);
const e = car(c);
const f = cdr(c);
console.log(c, d,e,f);

const aa = cons(1, cons(2, cons(3, cons(4, null))));
const bb = cons(9, cons(8, cons(7, cons(6, null))));
console.log(car(aa));
console.log(car(cdr(aa)));
console.log(car(cdr(cdr(aa))));
console.log(car(cdr(cdr(cdr(aa)))));

const listRef = function(cons, n) {
    if (n=== 0) {
        return car(cons);
    }
    return listRef(cdr(cons), n-1);
}

result = listRef(aa,2);
console.log(result);
const length = function(cons) {
    if (cons == null) {
        return 0;
    }
    return 1 + length(cdr(cons));
}
result = length(aa);
console.log(result);

const lengthIter = function(cons,count) {
    if (cons == null) {
        return count;
    }
    return lengthIter(cdr(cons),count+1)
}
result = lengthIter(aa,0);
console.log(result);

const append = function(a,b) {
    if (null == a) {
        return b;
    }
    return cons(car(a), append(cdr(a),b));
}
result = append(aa,bb);
console.log(listRef(result,5));

const lastPair = function(cons) {
    if (cons == null) {
        throw new Error('empty cons');
    }
    if (cdr(cons) == null) {
        return car(cons);
    }
    return lastPair(cdr(cons));
}
result = lastPair(aa);
console.log(result);
result = lastPair(bb);
console.log(result);

const reverse = function(aa, result) {
    if (aa == null) {
        return result;
    }
    return reverse(cdr(aa), cons(car(aa), result));
}

result = reverse(aa,null);
console.log(lastPair(result));

const scaleList = function(aa, factor) {
    if (aa==null) {
        return null;
    }
    return cons(car(aa)*factor, scaleList(cdr(aa), factor))
}

result = scaleList(aa,10);
console.log(result);
result = lastPair(result);
console.log(result);

const map = function(fn, con) {
    if (con == null) {
        return null;
    }
    return cons(fn(car(con)), map(fn, cdr(con)));
}

const fn1 = function(x) {
    return x*x;
}

result = map(fn1, aa);
result = lastPair(result);
console.log(result);
result = map(fn1, aa);
result = listRef(result,2);
console.log(result);


let balance = 100;
const withDraw = function(amount) {
    if (amount <= balance) {
        balance -= amount;
        return balance;
    } else {
        throw new Error("no enough funds");
    }
}

result = withDraw(50);
console.log(result);
result = withDraw(30);
console.log(result);
//withDraw(40);

const newWithDraw = function() {
    let balance = 100;
    return amount=> {
        if (amount <= balance) {
            balance -= amount;
            return balance;
        } else {
            throw new Error("no enough funds");
        }
    }
}

let withDraw1 = newWithDraw();
result = withDraw1(50);
console.log(result);
let withDraw2 = newWithDraw();
result = withDraw2(30);
console.log(result);

const makeWithDraw = function(balance) {
    return amount=> {
        if (amount <= balance) {
            balance -= amount;
            return balance;
        } else {
            throw new Error("no enough funds");
        }
    }
}

const W1 = makeWithDraw(100);
const W2 = makeWithDraw(100);
result = W1(50);
console.log(result);
result = W2(70);
console.log(result);

const makeAccount = function(balance) {
    let withDraw = amount=>{
        if (amount <= balance) {
            balance -= amount;
            return balance;
        } else {
            throw new Error("no enough funds");
        }
    }
    let deposite = amount=>{
        balance += amount;
        return balance;
    }

    let dispatch = m => {
        if (m== 'withDraw') {
            return withDraw;
        } else if (m== 'deposite') {
            return deposite;
        } else {
            return "error";
        }
    }
    return dispatch;
}

const acc = makeAccount(100);
result = acc('deposite')(20);
console.log(result);
result = acc('withDraw')(40);
console.log(result);

const makeAccumulator = function(value) {
    return addValue=>value+=addValue;
}

const adder = makeAccumulator(50);
result = adder(20);
console.log(result);
result = adder(40);
console.log(result);

const makeMonitored = function(fn) {
    let countCall = 0;
    return input=>{
        if (input === 'how-many-calls?') {
            return countCall;
        }
        if (input === 'reset-count') {
            return countCall = 0;
        }
        const result = fn(input);
        countCall+=1;
        return result;
    }
}
const fnSqrt = function(x) {
    return x*x;
}
const monitor = makeMonitored(fnSqrt);
result = monitor(5);
console.log(result);
result = monitor(5);
console.log(result);
result = monitor('how-many-calls?');
console.log(result);

const monteCarlo = function(trials, experiment) {
    const iter = (trialsRemaining, trialsPassed)=>{
        if (trialsRemaining == 0) {
            console.log(trialsPassed, trials)
            return trialsPassed/trials;
        }
        if (experiment()) {
            return iter(trialsRemaining-1, trialsPassed + 1);
        } else {
            return iter(trialsRemaining-1, trialsPassed);
        }
    }
    return iter(trials,0);
}

const cesaro = function() {
    const a = Math.floor(Math.random() * 1000);
    const b = Math.floor(Math.random() * 1000);
    return gcd(a, b) == 1;
}

const estimatePi = function(trials) {
    const possibility = monteCarlo(trials, cesaro)
    return Math.sqrt(6/possibility);
}

result = estimatePi(1200);
console.log(result);
