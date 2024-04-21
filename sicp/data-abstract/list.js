const sicp = require('./sicp');

const listRef = (items,n) => {
    if (n>= lstLength(items)) {
        console.log("n的值越界");
        return -1;
    }
    if (n===0) {
        return sicp.car(items);
    } else {
        return listRef(sicp.cdr(items), n-1)
    }
}

const lstLength = items => {
    if (null ==items){
        return 0;
    }
    return 1 + lstLength(sicp.cdr(items));
}

const lstIterLength = items => {
    const iter = (a,count) => {
        if (null == a) {
            return count;
        } else {
            return iter(sicp.cdr(a), count+1);
        }
    }
    return iter(items,0);
}

const lastPair = items => {
    if (items == null) {
        throw new Error("list empty -- LAST-PAIR");
    }
    if (null == sicp.cdr(items)) {
        return items;
    } else {
        return lastPair(sicp.cdr(items));
    }
}

module.exports = {
    listRef,
    lstLength,
    lstIterLength,
    lastPair
}

// const lista = sicp.list(1,3,5,7,9);
// console.log(listRef(lista,2));
// console.log(listRef(lista,10));
// console.log(lstIterLength(lista));
// sicp.printList(lastPair(lista));

// sicp.printList(sicp.map(x=>x*x, sicp.list(4,6,9)))