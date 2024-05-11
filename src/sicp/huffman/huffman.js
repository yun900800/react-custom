import { table } from 'console';
import {
    list
} from '../list/list';
import { 
    head, 
    tail
} from '../pair/pair';
const makeLeaf = (symbol, weight) => {
    return list('leaf',symbol,weight);
}

const isLeaf = object => head(object) === 'leaf';
const symbolLeaf = object => head(tail(object));
const weightLeaf = object = head(tail(tail(object)));

const makeCodeTree = (left,right) => {
    return list('codeTree',left,right,
        append(symbols(left), symbols(right)),
        weight(left) + weight(right)
    );
}

const leftBranch = tree => head(tail(tree));
const rightBranch = tree => head(tail(tail(tree)));
const symbols = tree => {
    return isLeaf(tree)
           ? list(symbolLeaf(tree))
           : head(tail(tail(tail(tree))));
}
const weight = tree => {
    return isLeaf(tree)
           ? weightLeaf(tree)
           : head(tail(tail(tail(tail(tree)))));
}
