import {
    head,
    pair,
    tail
} from '../pair/pair'

const map = (func,items)=> {
    if (null == items) {
        return null;
    }
    return pair(func(head(items)), map(func, tail(items)));
}

const append = (items0, items1) =>
        items0 === null ?
            items1 :
            pair(head(items0), append(tail(items0), items1));

            
const lastPair = (list) => {
    if (list == null) {
        return 'empty';
    }
    if (null == tail(list)) {
        return list;
    }
    return lastPair(tail(list));
}

const forEach = (func,list) => {
    if (null!== list) {
        func(head(list));
        forEach(func, tail(list));
    }
}

const filter = function(predicate,sequence) {
    if (null== sequence) {
        return null;
    }
    if (predicate(head(sequence))) {
        return pair(head(sequence), filter(predicate,tail(sequence)));
    } else {
        return filter(predicate,tail(sequence));
    }
}

const acculator = function(op, initial, sequence) {
    if (null===sequence ){
        return initial;
    } else {
        return op(head(sequence), acculator(op,initial,tail(sequence)));
    }
}

const gcd = function(a,b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a%b);
}

module.exports = {
    map,
    append,
    lastPair,
    forEach,
    filter,
    acculator,
    gcd
}