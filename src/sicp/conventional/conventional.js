import { 
    head,
    isPair, 
    tail,
    pair
}  from "../pair/pair";

import {
    isOdd,
    isEven,
    square,
    fibIter,
    acculator,
    map,
    filter,
    enumerateTree,
    enumerate
} from '../utils/utils'

const sumOddSquare = (tree)=> {
    if (null === tree) {
        return 0;
    }
    if (!isPair(tree)) {
        if (isOdd(tree)) {
            return square(tree);
        }
        return 0;
    }
    return sumOddSquare(head(tree)) 
        + sumOddSquare(tail(tree));
}

const evenFib = n => {
    const next = (k) => {
        if (k > n) {
            return null;
        }
        const f = fibIter(k);
        if (!isOdd(f)) {
            return pair(f,next(k+1))
        } else {
            return next(k+1)
        }
    }
    return next(0)
}

const sumOddSquareNew = (tree)=> {
    return acculator(
        (a,b)=>a+b,
        0,
        map(square,
            filter(isOdd,
                enumerateTree(tree)
            )
        )
    );
}

const evenFibNew = n => {
    return acculator(pair,
        null,
        filter(isEven,
            map(fibIter,
                enumerate(0,n)
            )
        )
    );
}

const listFibSquare = (n) => {
    return acculator(pair,
        null,
        map(square,
            map(fibIter,
                enumerate(0,n)
            )
        )
    )
}

const hornorEval = (x, seq) => {
    return acculator((thisCeoff, higherTerms)=> thisCeoff + x * higherTerms,0, seq)
}

module.exports = {
    sumOddSquare,
    evenFib,
    sumOddSquareNew,
    evenFibNew,
    listFibSquare,
    hornorEval
}