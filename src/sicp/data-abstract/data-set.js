import {
    pair,
    head,
    tail,
    listJs,
    isEqual,
    appendJs,
    reverseJs,
    printListJs
} from './sicp';

const elementOfSet = (ele, set) => {
    if (null === set) {
        return false;
    }
    if (isEqual(ele, head(set))) {
        return true;
    }
    return elementOfSet(ele, tail(set))
}

const isElementOfSet = (ele, set) => {
    if (null === set) {
        return false;
    }
    if (isEqual(ele, head(set))) {
        return true;
    }
    if (ele < head(set)) {
        return false;
    }
    return elementOfSet(ele, tail(set));
}

const adJoinSet = (ele, set) => {
    if (elementOfSet(ele,set)) {
        return set;
    }
    return pair(ele, set);
}

const adJoinSetOrder = (ele,set) => {
    if (null === set) {
        return listJs(ele);
    }
    const currentElement = head(set);
    const restElement = tail(set);
    if (currentElement === ele) {
        return set;
    } else if (currentElement < ele) {
        return pair(currentElement, adJoinSetOrder(ele, restElement));
    } else if (currentElement > ele) {
        return pair(ele, set);
    }
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

const interSectionSetOrder = (set1,set2) => {
    if (null === set1 || null ===set2) {
        return null;
    } else {
        const x1 = head(set1);
        const x2 = head(set2);
        return x1 === x2 ? pair(x1, interSectionSetOrder(tail(set1), tail(set2)))
            : x1 < x2 ? 
            interSectionSetOrder(tail(set1), set2)
            : interSectionSetOrder(set1, tail(set2));
    }
}

const unionSet = (set1,set2) => {
    const iter = (input, result) => {
        if (null === input ) {
            return reverseJs(result);
        }
        const currentElement = head(input);
        const remainElement = tail(input);
        if (elementOfSet(currentElement, result)) {
            return iter(remainElement, result);
        } else {
            return iter(remainElement, pair(currentElement, result));
        }
    }
    return iter(appendJs(set1,set2),null);
}

const unionSetOrder = (set1,set2) => {
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
        return pair(x1, unionSetOrder(tail(set1), tail(set2)));
    } else if (x1 < x2) {
        return pair(x1, unionSetOrder(tail(set1), set2));
    } else {
        return pair(x2, unionSetOrder(set1, tail(set2)));
    }
}

module.exports = {
    elementOfSet,
    adJoinSet,
    interSectionSet,
    unionSet,

    isElementOfSet,
    adJoinSetOrder,
    interSectionSetOrder,
    unionSetOrder
}