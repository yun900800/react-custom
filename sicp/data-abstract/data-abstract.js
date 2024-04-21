// 过程抽象是 设计这样一个抽象,将过程的使用方式与过程究竟如果通过更基本的方式去实现的细节想回分离
// 数据抽象是 设计这样一个抽象,将复合数据对象的使用方式与数据对象怎样由更基本的对象构造起来的细节想回分离

const gcd = function(a,b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a%b);
}
class Cons {
    constructor(n,d) {
        const ndGcd = gcd(n,d);
        this.n = n / ndGcd;
        this.d = d / ndGcd;
    }
}

class Conss {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

const makeRat = function(n,d) {
    if (d < 0){
        return new Cons(-n,-d)
    }
    return new Cons(n,d)
}

const number = function(x) {
    return x.n;
}

const denom = function(x) {
    return x.d;
}


const addRat = function(x,y) {
    return makeRat(number(x)* denom(y) + number(y)* denom(x), denom(x)* denom(y));
}

const subRat = function(x,y) {
    return makeRat(number(x)* denom(y) - number(y)* denom(x), denom(x)* denom(y));
}

const mulRat = function(x,y) {
    return makeRat(number(x) * number(y), denom(x) * denom(y));
}

const divRat = function(x,y) {
    return makeRat(denom(x) * denom(y), number(x) * number(y))
}

const equal = function (x,y) {
    return number(x)* denom(x) == number(y)* denom(y);
}

const printRat = function(x) {
    console.log('');
    console.log('%s/%s',number(x),denom(x));
}

const numberOne = makeRat(2,3);
printRat(numberOne);
printRat(addRat(numberOne,numberOne))

const numberTwo = makeRat(2,-3);
printRat(numberTwo);
printRat(mulRat(numberOne,numberTwo))

//数据抽象的本质是为每一类数据对象标识出一组操作(makeRat,number,denom),使得对这类数据对象的所有操作都可以基于它们表示
//而且在操作这些对象的时候只有使用它们
//理解什么是水平抽象屏障
// -----------------------
// --- 使用有理数的程序  ---
// -----------------------
//     问题域中的有理数
// -----------------------
// --- addRat, subRat  ---
// -----------------------
//   作为分子和分母的有理数
// -----------------------
// --- makeRat, number, denon ---
// -----------------------
//   作为序对的有理数或者类的有理数
// -----------------------
// --- class Cons      ---
// -----------------------

//把对具体表示方式的依赖性限制到少数几个界面过程,不但有助于程序修改
//而且有助于程序设计,能保留程序设计不用实现方式的灵活性

const makePoint = function(x,y) {
    return new Conss(x,y);
}
const xPoint = function(p) {
    return p.x;
}

const yPoint = function(p) {
    return p.y;
}

const makeSegment = function(startPoint, endPoint) {
    return new Conss(startPoint,endPoint);
}
const startPoint = function(line) {
    return line.x;
}
const endPoint = function(line) {
    return line.y;
}

const midPointSegment = function(line) {
    const stPoint = startPoint(line);
    const enPoint = endPoint(line);
    return new makePoint((xPoint(stPoint)+ xPoint(enPoint)) / 2, (yPoint(stPoint) + yPoint(enPoint)) / 2);
}

const printPoint = function(p) {
    console.log();
    console.log('(%s,%s)',xPoint(p), yPoint(p));
}

const a1 = makePoint(3,5);
const a2 = makePoint(8,8);
const l1 = makeSegment(a1,a2);
const midP = midPointSegment(l1);
printPoint(midP);

const makeRectangle = function(l1,l2,w1,w2) {
    return new Conss(new Conss(l1,l2), new Conss(w1,w2));
}

const l1Length = function(rectangle) {
    return rectangle.x.x;
}
const l2Length = function(rectangle) {
    return rectangle.x.y;
}

const w1Length = function(rectangle) {
    return rectangle.y.x;
}
const w2Length = function(rectangle) {
    return rectangle.y.y;
}

const lengthOfRectangle = function(rectangle) {
    const l1 = l1Length(rectangle);
    const start = startPoint(l1);
    const end = endPoint(l1);
    return xPoint(end)-xPoint(start);
}

const widthfRectangle = function(rectangle) {
    const w1 = w1Length(rectangle);
    const start = startPoint(w1);
    const end = endPoint(w1);
    return yPoint(end)-yPoint(start);
}

const perimiterRectangle = function(rectangle) {
    return 2 * (lengthOfRectangle(rectangle) + widthfRectangle(rectangle));
}

const areaRectangle = function(rectangle) {
    return lengthOfRectangle(rectangle) * widthfRectangle(rectangle);
}

const ll1 = makeSegment(makePoint(1,4),makePoint(4,4));
const ll2 = makeSegment(makePoint(1,2),makePoint(4,2))

const ww1 = makeSegment(makePoint(1,2),makePoint(1,4));
const ww2 = makeSegment(makePoint(4,2),makePoint(4,4));

const rectangle1 = makeRectangle(ll1,ll2,ww1,ww2);
const perimiterRectangleRet = perimiterRectangle(rectangle1);
console.log(perimiterRectangleRet);
const areaRectangleRet = areaRectangle(rectangle1);
console.log(areaRectangleRet);

//数据可以定义为一组适当的构造函数和选择函数，以及为了使这些过程称为一套合法表示
//它们必须满足的一组特定条件
//序对的过程表示
const ConsF = function(x,y) {
    const dispatch = function(m) {
        if (m===0) {
            return x;
        }
        if (m===1) {
            return y;
        }
    }
    return dispatch;
}

const getX = function(cons) {
    return cons(0);
}
const getY = function(cons) {
    return cons(1); 
}
const aa1 = ConsF(2,3);
console.log(getX(aa1));
console.log(getY(aa1));

const ConsT = function(x,y) {
    return (m=>{
        m.x = x;
        m.y = y;
        return m;
    })({})
}

const car = function(cons) {
    return ((cons)=>cons.x)(cons);
}
const cdr = function(cons) {
    return ((cons)=>cons.y)(cons);
}

const bb1 = ConsT(3,2);
console.log(car(bb1));
console.log(cdr(bb1));

const even = function(x) {
    return x % 2 === 0;
}
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
const ConsG = function(x,y) {
    return fastExptIter(2,x) * fastExptIter(3,y);
}

const carG = function(cons) {
    if (cons % 2===0 ) {
        return 1+ carG(cons/2)
    } else {
        return 0
    }
}
const cazG = function(cons) {
    if (cons % 3===0 ) {
        return 1+ cazG(cons/3)
    } else {
        return 0
    }
}

const consg = ConsG(3,2);
console.log(carG(consg));
console.log(cazG(consg));

const makeInterval = function(lower,upper){
    return new Conss(lower,upper)
}

const lowerBound = function(interval) {
    return interval.x;
}
const upperBound = function(interval) {
    return interval.y;
}

const addInterval = function(x,y) {
    const lowerX = lowerBound(x)+lowerBound(y);
    const lowerY = upperBound(x)+upperBound(y);
    return makeInterval(lowerX, lowerY)
}

const mulInterval = function(x,y) {
    let p1 = lowerBound(x) * lowerBound(y);
    let p2 = lowerBound(x) * upperBound(y);
    let p3 = upperBound(x) * lowerBound(y);
    let p4 = upperBound(x) * upperBound(y);
    return makeInterval(Math.min(p1,p2,p3,p4), Math.max(p1,p2,p3,p4));
}

const divInterval = function(x,y) {
    return mulInterval(x, makeInterval(1/upperBound(y), 1/lowerBound(y)))
}

const aaaa = makeInterval(3,5);
console.log(aaaa);
const bbbb = makeInterval(4,7);
console.log(bbbb);
console.log(addInterval(aaaa,bbbb));
console.log(mulInterval(aaaa,bbbb));
console.log(divInterval(aaaa,bbbb));

const list = ConsF(1, ConsF(2, ConsF(3, ConsF(4,null))));
console.log(getX(list));
const listRef =function(list,n) {
    if (n == 0) {
        return getX(list)
    } else {
        return listRef(getY(list), n-1);
    }
}

console.log(listRef(list,2));
const length = function(list) {
    if (null == list) {
        return 0;
    }
    return  1 + length(getY(list));
}
console.log(length(list));

const lengthIter = function(list) {
    const iter = function( a, count) {
        if (null== a) {
            return count;
        }
        return iter(getY(a),count+1);
    }
    return iter(list,0);
}
console.log(lengthIter(list));

const append = function(list1, list2) {
    if (null == list1) {
        return list2;
    }
    return ConsF(getX(list1), append(getY(list1), list2));
}

const list2 = ConsF(9, ConsF(8, ConsF(7, ConsF(6,null))));
const list3 = append(list, list2);
console.log(lengthIter(list3));

const lastPair = function(list) {
    if (list == null) {
        return 'empty';
    }
    if (null == getY(list)) {
        return list;
    }
    return lastPair(getY(list));
}
console.log(getX(lastPair(list3)));

const reverse = function(list) {
    const iter = function(list, result){
        if (null == list){
            return result;
        }
        return iter(getY(list), ConsF(getX(list), result));
    }
    return iter(list,null);
}

const printList = function(list) {
    if (list == null) {
        return;
    } else {
        printList(getY(list));
        console.log(getX(list));
    }
}

printList(reverse(list3));

const scaleList = function(list,factor) {
    if (list == null) {
        return;
    }
    return ConsF(factor*getX(list), scaleList(getY(list), factor));
}
printList(list3);
printList(scaleList(list3,20));

const map = function(fn,list) {
    if (null == list) {
        return null;
    }
    return ConsF(fn(getX(list)), map(fn, getY(list)));
}
printList(map((item)=>item*10, list3));

const scaleList1 = function(list) {
    if (null == list) {
        return;
    }
    return ConsF(getX(list)*getX(list), scaleList1(getY(list)));
}
printList(scaleList1(list));
const scaleListmap = function(list) {
    return map(item=>item*item, list);
}
printList(scaleListmap(list));

const tree = ConsF(list, list2);
console.log(length(tree));

const notPair = function(tree) {
    if (typeof tree !== 'function') {
        return true;
    }
}

const scaleTree = function(tree,factor) {
    if (null == tree) {
        return;
    }
    if (notPair(tree)) {
        return tree * factor;
    } else {
        return ConsF(scaleTree(getX(tree), factor), scaleTree(getY(tree), factor));
    }
}

const printTree = function(tree) {
    if (tree == null) {
        return;
    } else {
        if (typeof tree !== 'function') {
            console.log(tree);
            return;
        }
        const leftTree = getX(tree);
        const rightTree = getY(tree);
        printTree(leftTree);
        printTree(rightTree);
    }
}
printTree(scaleTree(tree,10));

const scaleMapTree = function(tree,factor) {
    return map(subTree=>{
        if (notPair(subTree)){
            return subTree * factor;
        } else{
            return scaleMapTree(subTree,factor);
        }
    },tree);
}
printTree(scaleMapTree(tree,20));

const squareTree = function(tree) {
    if (null==tree) {
        return;
    }
    if (notPair(tree)) {
        return tree*tree;
    } else {
        return ConsF(squareTree(getX(tree)), squareTree(getY(tree)));
    }
}
printTree(squareTree(tree));

const squareMapTree = function(tree) {
    return map(subTree=>{
        if (notPair(subTree)){
            return subTree * subTree;
        } else{
            return squareMapTree(subTree);
        }
    },tree);
}
printTree(squareMapTree(tree));

const treeMap = function(fn,tree){
    if (null==tree) {
        return;
    }
    if (notPair(tree)) {
        return fn(tree);
    } else {
        return ConsF(treeMap(fn, getX(tree)), treeMap(fn,getY(tree)));
    }
}
printTree(treeMap(item=>item+20,tree));

const odd = function(x) {
    return x%2 ==1
}

const sumOddSquare = function(tree){
    if (null==tree) {
        return 0;
    }
    if (notPair(tree)) {
        if (odd(tree)){
            return tree*tree;
        } else {
            return 0;
        }
    } else {
       return sumOddSquare(getX(tree)) + sumOddSquare(getY(tree)); 
    }
}
printTree(sumOddSquare(tree));

const filter = function(predicate,sequence) {
    if (null== sequence) {
        return null;
    }
    if (predicate(getX(sequence))) {
        return ConsF(getX(sequence), filter(predicate,getY(sequence)));
    } else {
        return filter(predicate,getY(sequence));
    }
}

printList(filter(item=>item%2==0, list));

const acculator = function(op, initial, sequence) {
    if (null===sequence ){
        return initial;
    } else {
        return op(getX(sequence), acculator(op,initial,getY(sequence)));
    }
}
console.log(acculator((a,b)=>a+b,0,list));
console.log(acculator((a,b)=>a*b,1,list));
printList(acculator(ConsF, null,list));

const enumerate = function(low, high) {
    if (low > high) {
        return null;
    }
    return ConsF(low, enumerate(low+1,high));
}
console.log('enumerate');
printList(enumerate(2,7));

const enumerateTree = function(tree) {
    if (null === tree) {
        return null;
    }
    if (notPair(tree)) {
        return ConsF(tree,null);
    }
    return append(enumerateTree(getX(tree)), enumerateTree(getY(tree)));
}
console.log('enumerateTree');
printTree(enumerateTree(tree));

const sumOddSquareMap = function(tree) {
    return acculator((a,b)=>a+b,0, map(item=>item*item, filter(odd, enumerateTree(tree))));
}
console.log('sumOddSquareMap');
console.log(sumOddSquareMap(tree));

const fibIter = function(n){
    return fibIterInter(1,1,n)
}

const fibIterInter = function(a,b,count) {
    if (count === 0) {
        return b;
    }
    return fibIterInter(a+b, a, count-1);
}

const evenFib = function(n) {
    return acculator(ConsF,null, filter(item=>item%2==0, map(fibIter, enumerate(0,n))));
}
console.log('evenFib');
printList(evenFib(10));

const listFibSquare = function(n) {
    return acculator(ConsF,null, map(item=>item*item,map(fibIter, enumerate(0,n))));
}
console.log('listFibSquare');
printList(listFibSquare(10));
