import {
    tail,
    head,
    isPair,
    pair
} from '../pair/pair';

import {
    reverse,
    list
} from '../list/list';

import {
    append,
    map
} from '../utils/utils';
const printTree = (tree) => {
    if (tree == null) {
        return;
    } else {
        if (typeof tree !== 'function') {
            console.log(tree);
            return;
        }
        const leftTree = head(tree);
        const rightTree = tail(tree);
        printTree(leftTree);
        printTree(rightTree);
    }
}

const printTrees = (tree)=> {
    let preOrder = [];
    const preTraverse = tree => {
        if (null === tree) {
            return null;
        }
        if (!isPair(tree)) {
            preOrder.push(tree);
            return;
        }
        const leftTree = head(tree);
        const rightTree = tail(tree);
        preTraverse(leftTree);
        preTraverse(rightTree);
    }
    preTraverse(tree);
    return preOrder.join(' ===> ');
}



const countTree = tree => {
    if (null === tree) {
        return 0;
    }
    if (!isPair(tree)) {
        return 1;
    }
    return countTree(head(tree)) + countTree(tail(tree));
}

const deepReverse = tree => {
    if (null === tree) {
        return null;
    }
    if (!isPair(tree)) {
        return tree;
    }

    return reverse(list(deepReverse(head(tree)), deepReverse(head(tail(tree)))));
}

const deepReverseSimple = tree => {
    if (isEmptyTree(tree)) {
        return null;
    }
    if (isLeaf(tree)) {
        return tree;
    }
    return reverse(makeTree(
        deepReverseSimple(leftBranch(tree)),
        deepReverseSimple(rightBranch(tree))
    ))
}

const isEmptyTree = tree => null === tree;
const isLeaf = tree => !isPair(tree);
const leftBranch = tree => head(tree);
const rightBranch = tree => head(tail(tree));
const makeTree = (left,right) => list(left,right);

const treeTraverse = tree => {

    const choose = items => {
        if (isPair(head(items))) {
            return treeTraverse(head(items));
        } else {
            return head(items);
        }
    }
    const iter = (remainedItems, result) => {
        if (null === remainedItems) {
            return result;
        }
        return iter(tail(remainedItems),
            pair(choose(remainedItems), result)
        );
    }
    return iter(tree,null);
}   

const fringe = tree => {
    if (null === tree) {
        return null;
    }
    if (isLeaf(tree)) {
        return list(tree);
    } else {
        return append(fringe(head(tree)), fringe(head(tail(tree))));
    }
}

const makeMobile = (left,right) => {
    return list(left,right);
}

const lBranch = (mobile) => {
    return head(mobile);
}
const rBranch = (mobile) => {
    return head(tail(mobile));
}

const makeBranch = (length, structure) => {
    return list(length,structure);
}

const bLengh = (branch) => {
    return head(branch);
}

const bStructure = (branch) => {
    return head(tail(branch));
}

//这里可以使用另外一种方式来写以上函数,可以使用序对来实现以上构造过程和选择过程
const makeMobile1 = (left,right) => {
    return pair(left,right);
}

const lBranch1 = (mobile) => {
    return head(mobile);
}
const rBranch1 = (mobile) => {
    return tail(mobile);
}

const makeBranch1 = (length, structure) => {
    return pair(length,structure);
}

const bLengh1 = (branch) => {
    return head(branch);
}

const bStructure1 = (branch) => {
    return tail(branch);
}
//这里就不再演示具体的实现啦


const totalWeight = mobile => {
    return branchWeight(lBranch(mobile)) + branchWeight(rBranch(mobile));
}

const branchWeight = branch => {
    if (hangsAnotherMobile(branch)) {
        return totalWeight(bStructure(branch));
    }
    return bStructure(branch);
}

const hangsAnotherMobile = branch => {
    return isPair(bStructure(branch));
}

const branchTorque = branch => {
    return bLengh(branch) * branchWeight(branch);
}

const mobileBalance = mobile => {
    const left = lBranch(mobile);
    const right = rBranch(mobile);
    return sameTorque(left,right) && branchBalance(left)
        && branchBalance(right);
}

const sameTorque = (left,right) => {
    return branchTorque(left) === branchTorque(right);
}

const branchBalance = branch => {
    if (hangsAnotherMobile(branch)) {
        return mobileBalance(bStructure(branch));
    }
    return true;
}

const scaleTree = (tree, factor) => {
    if (null === tree) {
        return null;
    }
    if (!isPair(tree)) {
        return tree * factor;
    }
    return pair(scaleTree(head(tree), factor), scaleTree(tail(tree), factor));
}

const scaleTreeWithMap = (tree, factor) => {
    return map(subTree=>{
        if (isPair(subTree)) {
            return scaleTreeWithMap(subTree, factor);
        } else {
            return subTree * factor;
        }
    },tree);
}

const squareTree = function(tree) {
    if (null==tree) {
        return null;
    }
    if (isLeaf(tree)) {
        return tree * tree;
    } else {
        return pair(squareTree(head(tree)), squareTree(tail(tree)));
    }
}

const squareMapTree = function(tree) {
    return map(subTree=>{
        if (isLeaf(subTree)){
            return subTree * subTree;
        } else{
            return squareMapTree(subTree);
        }
    },tree);
}

const treeMap = (fn,tree) =>{
    if (null==tree) {
        return null;
    }
    if (isLeaf(tree)) {
        return fn(tree);
    } else {
        return pair(treeMap(fn, head(tree)), treeMap(fn,tail(tree)));
    }
}

const subset = set => {
    if (null === set) {
        return list('empty');
    }
    //获取剩余元素的子集合
    const rest = subset(tail(set));
    return append(rest, map(x=> {
        return pair(head(set), x);
    },rest))
}

module.exports = {
    printTree,
    countTree,
    printTrees,
    deepReverse,
    deepReverseSimple,
    treeTraverse,
    fringe,

    makeMobile,
    lBranch,
    rBranch,
    makeBranch,
    bLengh,
    bStructure,

    totalWeight,
    branchTorque,
    mobileBalance,

    scaleTree,
    scaleTreeWithMap,
    squareTree,
    squareMapTree,
    treeMap,
    subset
}