import {
    tail,
    head,
    isPair
} from '../pair/pair'
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

module.exports = {
    printTree,
    countTree,
    printTrees
}