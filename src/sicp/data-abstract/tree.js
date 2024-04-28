const sicp = require('./sicp');
const list = require('./list')


const countTree = (tree)=>{
    if (null == tree) {
        return 0;
    }
    if (notPair(tree)) {
        return 1; 
    } else {
        return countTree(sicp.car(tree)) + countTree(sicp.cdr(tree));
    }
}

const notPair = function(tree) {
    if (typeof tree !== 'function') {
        return true;
    }
}

const scallTree = (tree,factor)=> {
    if (null == tree) {
        return null;
    }
    if (notPair(tree)) {
        return tree * factor;
    } 
    return sicp.cons(scallTree(sicp.car(tree), factor), scallTree(sicp.cdr(tree), factor));
}

const scaleTreeByMap = (tree, factor) => {
    return sicp.map(subTree=>{
        if (notPair(subTree)) {
            return subTree*factor;
        }
        return scaleTreeByMap(subTree, factor);
    }, tree);
}

const printTree = function(tree) {
    if (tree == null) {
        return null;
    } else {
        if (typeof tree !== 'function') {
            console.log(tree);
            return null;
        }
        const leftTree = sicp.car(tree);
        const rightTree = sicp.cdr(tree);
        printTree(leftTree);
        printTree(rightTree);
    }
}

const treeMap = (func, tree)=> {
    if (null== tree) {
        return null;
    }
    if (notPair(tree)) {
        return func(tree);
    }
    return sicp.cons(treeMap(func, sicp.car(tree)), treeMap(func, sicp.cdr(tree)));
}

const tree = sicp.cons(sicp.list(1,2),sicp.list(3,4));
console.log(list.lstLength(tree));
console.log(countTree(tree));

printTree(scallTree(tree,10));
console.log("scaleTreeByMap");
printTree(scaleTreeByMap(tree,10));

printTree(treeMap(item=>item*item, tree));


const sumOfSquare = (tree)=>{
    if (null ==tree) {
        return 0;
    }
    if (notPair(tree)) {
        if (tree%2 ===1) {
            return tree*tree;
        } else {
            return 0;
        }
    }
    return sumOfSquare(sicp.car(tree)) + sumOfSquare(sicp.cdr(tree));
}

printTree(sumOfSquare(tree));

const fibIter = function(n){
    return fibIterInter(1,1,n)
}

const fibIterInter = function(a,b,count) {
    if (count === 0) {
        return b;
    }
    return fibIterInter(a+b, a, count-1);
}

const fibEven = n=> {
    const next = k => {
        if (k>n) {
            return null;
        }
        let f = fibIter(k);
        if (f %2 ===0) {
            return sicp.cons(f,next(k+1))
        } else {
            return next(k+1);
        }
    }
    return next(0)
}

const enumerateInterval = (low,high) =>{
    if (low > high) {
        return null;
    } else {
        return sicp.cons(low, enumerateInterval(low+1,high));
    }
}

const enumerateTree = tree =>{
    if (null===tree) {
        return null;
    }
    if (notPair(tree)) {
        return sicp.list(tree);
    }
    return sicp.append(enumerateTree(sicp.car(tree)), enumerateTree(sicp.cdr(tree)));
}

const sumOfSquareNew = (tree) => {
    return sicp.acculator((a,b)=>a+b,
        0, 
        sicp.map(item=>item*item,
            sicp.filter(item=>item%2==1,
                enumerateTree(tree)
                )
            )
    );
}

const evenFibNew = n => {
    return sicp.acculator(sicp.cons, null,
        sicp.filter(
            item=> item%2 == 0,
            sicp.map(
                fibIter,
                enumerateInterval(0,n)
            )
        )
        )
}

console.log('fibEven(10)')
sicp.printList(fibEven(10));
sicp.printList(sicp.filter(item=>item%2==1, sicp.list(1,2,3,4,5)));
console.log(sicp.acculator((a,b)=>{return a+b}, 0 , sicp.list(1,2,3,4,5)));
console.log('enumerateInterval(2,7)')
sicp.printList(enumerateInterval(2,7));
console.log('enumerateTree()')
printTree(enumerateTree(sicp.list(1,sicp.list(2, sicp.list(3,4)),5)))
console.log('sumOfSquareNew(tree)');
console.log(sumOfSquareNew(tree));
console.log('evenFibNew(10)')
sicp.printList(evenFibNew(10));

const ccc = sicp.pair(3,5)
console.log(sicp.head(ccc));
console.log(sicp.tail(ccc));

const list1 = sicp.listJs('a','b')
console.log(sicp.head(list1));
console.log(sicp.head(sicp.tail(list1)));


