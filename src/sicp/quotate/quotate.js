import {
    head,
    isPair,
    tail
} from '../pair/pair';

import {
    isList
} from '../list/list'
const member = (item,x) => {
    return null === x
           ? null
           : item === head(x)
           ? x
           : member(item, tail(x));
}

const isEqual = (x,y) => {
    if (!isPair(x) && !isPair(y)) {
        return symbolEqual(x,y);
    }
    if (isList(x) && isList(y)) {
        return listEqual(x,y);
    } else {
        return false;
    }

}

const symbolEqual = (x,y) => {
    return x === y;
}

const listEqual = (x,y) => {
    if (null === x && null === y) {
        return true;
    }
    if (null == x || null === y) {
        return false;
    }
    if (isEqual(head(x), head(y))) {
        return isEqual(tail(x), tail(y));
    } else {
        return false;
    }
}

module.exports = {
    member,
    isEqual
}