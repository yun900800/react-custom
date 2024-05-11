import {
    isEqual,
    append
} from '../utils/utils';

import {
    reverse,
    list,
    length,
    isEmptyList
} from '../list/list';
import {
    head,
    tail,
    pair
} from '../pair/pair';
const elementOfSet = (ele, set) => {
    if (null === set) {
        return false;
    }
    if (isEqual(ele, head(set))) {
        return true;
    }
    return elementOfSet(ele, tail(set))
}

const adJoinSet = (ele, set) => {
    if (elementOfSet(ele,set)) {
        return set;
    }
    return pair(ele, set);
}

const interSectionSet = (set1,set2) => {
    if (null === set1 || null ===set2) {
        return null;
    }
    if (elementOfSet(head(set1),set2)) {
        return pair(head(set1), 
            interSectionSet(tail(set1), set2)
        )
    }  else {
        return interSectionSet(tail(set1), set2);
    }
}

const unionSet = (set1,set2) => {
    const iter = (input, result) => {
        if (null === input ) {
            return reverse(result);
        }
        const currentElement = head(input);
        const remainElement = tail(input);
        if (elementOfSet(currentElement, result)) {
            return iter(remainElement, result);
        } else {
            return iter(remainElement, pair(currentElement, result));
        }
    }
    return iter(append(set1,set2),null);
}

//有顺序的表实现集合
const elementOfSetWithOrder = (ele, set) => {
    if (null === set) {
        return false;
    }
    if (isEqual(ele, head(set))) {
        return true;
    }
    if (ele < head(set)) {
        return false;
    }
    return elementOfSetWithOrder(ele, tail(set));
}

const adJoinSetWithOrder = (ele,set) => {
    if (null === set) {
        return list(ele);
    }
    const currentElement = head(set);
    const restElement = tail(set);
    if (currentElement === ele) {
        return set;
    } else if (currentElement < ele) {
        return pair(currentElement, adJoinSetWithOrder(ele, restElement));
    } else if (currentElement > ele) {
        return pair(ele, set);
    }
}

const interSectionSetWithOrder = (set1,set2) => {
    if (null === set1 || null ===set2) {
        return null;
    } else {
        const x1 = head(set1);
        const x2 = head(set2);
        return x1 === x2 ? pair(x1, interSectionSetWithOrder(tail(set1), tail(set2)))
            : x1 < x2 ? 
            interSectionSetWithOrder(tail(set1), set2)
            : interSectionSetWithOrder(set1, tail(set2));
    }
}

const unionSetWithOrder = (set1,set2) => {
    if (null ===set1 && null === set2) {
        return null;
    }  
    if (null ===set1 ){
        return set2;
    } 
    if (null ===set2 ){
        return set1;
    } 
    const x1 = head(set1);
    const x2 = head(set2);
    if (x1 === x2) {
        return pair(x1, unionSetWithOrder(tail(set1), tail(set2)));
    } else if (x1 < x2) {
        return pair(x1, unionSetWithOrder(tail(set1), set2));
    } else {
        return pair(x2, unionSetWithOrder(set1, tail(set2)));
    }
}

//有重复元素的集合
const adJoinSetWithDuplication = (ele, set) => {
    return pair(ele, set);
}

const interSectionSetWitDuplication = (set, another) => {
    const iter = (set,result)=> {
        if (null === set || another ===null) {
            return reverse(result);
        }
        const currentElement = head(set);
        const remainElement = tail(set);
        if (elementOfSet(currentElement,another) && !elementOfSet(currentElement,result)) {
            return iter(remainElement, pair(currentElement,result));
        } else {
            return iter(remainElement, result);
        }
    }
    return iter(set, null);
}

const entry = tree=> head(tree)
const leftBranch = tree => head(tail(tree))
const rightBranch = tree => head(tail(tail(tree)))
const makeTree = (entry, left, right) => list(entry,left,right);
const key = entry => head(entry);
const value = entry => tail(entry);

const elementOfSetWithTree = (ele, set) => {
    if (null === set || isEmptyList(set)) {
        return false;
    }
    if (ele === entry(set)) {
        return true;
    }
    if (ele < entry(set)) {
        return elementOfSetWithTree(ele, leftBranch(set));
    } else {
        return elementOfSetWithTree(ele, rightBranch(set));
    }
}

const adJoinSetWithTree = (ele,set) => {
    if (null === set) {
        return makeTree(ele, null,null)
    }
    if (ele === entry(set)) {
        return set;
    }
    if (ele < entry(set)) {
        return makeTree(entry(set), adJoinSetWithTree(ele, leftBranch(set)), rightBranch(set));
    } else {
        return makeTree(entry(set), leftBranch(set), adJoinSetWithTree(ele, rightBranch(set)));
    }
}

const treeToListOne = tree => {
    return null === tree ? null : 
        append(treeToListOne(leftBranch(tree)), 
            pair(entry(tree), treeToListOne(rightBranch(tree))));
}

const treeToListTwo = tree => {
    const copyToList = (tree, result) => {
        if (null === tree || isEmptyList(tree)) {
            return result;
        }
        return copyToList(
            leftBranch(tree), 
            pair(
                entry(tree), 
                copyToList(rightBranch(tree), result)
            )
        );
    }
    return copyToList(tree, null);
}

const listTree = elements => {
    return head(partialTree(elements,length(elements)));
}

const partialTree = (elements, n)=> {
    if (n===0) {
        return pair([], elements);
    }
    const leftSize = parseInt((n - 1) / 2);
    const leftResult = partialTree(elements, leftSize);
    const leftTree = head(leftResult);
    const nonLeftElts = tail(leftResult);
    const rightSize = n - (leftSize+1);
    const thisEntry = head(nonLeftElts);
    const rightResult = partialTree(tail(nonLeftElts),rightSize);
    const rightTree = head(rightResult);
    const remainingElts = tail(rightResult);
    return pair(makeTree(thisEntry,leftTree, rightTree),remainingElts);
}

const interSectionTree = (set1, set2) => {
    const treeSet1 = treeToListTwo(set1);
    const treeSet2 = treeToListTwo(set2);
    return listTree(interSectionSet(
        treeSet1,
        treeSet2
    ));
}

const unionTree = (set1, set2) => {
    return listTree(unionSet(
        treeToListTwo(set1),
        treeToListTwo(set2)
    ));
}

const lookup = (givenKey, setOfRecords) => {
    if (null === setOfRecords) {
        return false;
    }
    if (isEqual(givenKey, key(head(setOfRecords)))) {
        return head(setOfRecords);
    }
    return lookup(givenKey,tail(setOfRecords));
}

const lookupWithTree = (givenKey, treeOfRecords) => {
    if (null === treeOfRecords) {
        return false;
    }
    const entryKey = key(entry(treeOfRecords));
    if (isEqual(entryKey,givenKey)) {
        return entry(treeOfRecords);
    }
    if (givenKey > entryKey) {
        return lookupWithTree(givenKey, rightBranch(treeOfRecords));
    } else {
        return lookupWithTree(givenKey, leftBranch(treeOfRecords));
    }
}

module.exports = {
    elementOfSet,
    adJoinSet,
    interSectionSet,
    unionSet,

    elementOfSetWithOrder,
    adJoinSetWithOrder,
    interSectionSetWithOrder,
    unionSetWithOrder,

    adJoinSetWithDuplication,
    interSectionSetWitDuplication,

    makeTree,
    entry,
    leftBranch,
    rightBranch,
    key,
    value,
    elementOfSetWithTree,
    adJoinSetWithTree,
    interSectionTree,
    unionTree,

    treeToListOne,
    treeToListTwo,

    listTree,
    lookup,
    lookupWithTree
}