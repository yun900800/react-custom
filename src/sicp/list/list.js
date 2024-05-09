import { 
    pair,
    head,
    tail
} from "../pair/pair";

import {
    filter,
    square,
    map
} from '../utils/utils'

const list = (first,...rest) =>(!first && rest.length ===0)?null:pair(first, list(...rest));
const printList = (list) => {
    let msg = '';
    const iter = (items) => {
        if (null === items) {
            return null;
        }
        msg += head(items) +',';
        iter(tail(items));
    }
    iter(list);
    msg = msg.substring(0,msg.length-1);
    return msg;
}
const isList = list=> {
    return typeof list === 'function' && typeof head(list) !== 'function' &&
        (typeof tail(list) === 'function' || null === tail(list));
}

const listRef = (list,n) => {
    if (n == 0) {
        return head(list)
    } else {
        return listRef(tail(list), n-1);
    }
}

const length = (list)=> {
    if (null == list) {
        return 0;
    }
    return  1 + length(tail(list));
}

const reverse = (list) => {
    const iter = function(list, result){
        if (null == list){
            return result;
        }
        return iter(tail(list), pair(head(list), result));
    }
    return iter(list,null);
}



const sameParity = (sample, ...others) => {
    const even = x => x % 2 ===1;
    const odd = x => x % 2 ===0;
    let fn = even;
    if (!even(sample)){
        fn = odd;
    }
    return filter(fn, pair(sample, list(...others)));
}

const squareList = list => {
    if (null === list) {
        return null;
    }
    return pair(square(head(list)), squareList(tail(list)));
}

const squareListWithMap = list => {
    return map(square,list);
}

const squareListWithIter = list => {
    const iter = (things, answer) => {
        if (null === things) {
            return answer;
        }
        return iter(tail(things), pair(square(head(things)), answer));
    }
    return iter(list,null);
}

const squareListWithIterRightOrder = list => {
    const iter = (things, answer) => {
        if (null === things) {
            return reverse(answer);
        }
        return iter(tail(things), pair(square(head(things)), answer));
    }
    return iter(list,null);
}

const squareListWithIterLeftOrder = list => {
    const iter = (things, answer) => {
        if (null === things) {
            return (answer);
        }
        return iter(tail(things), pair(square(head(things)), answer));
    }
    return iter(reverse(list),null);
}

const squareListWithIter1 = list => {
    const iter = (things, answer) => {
        if (null === things) {
            return answer;
        }
        return iter(tail(things), pair(answer,square(head(things))));
    }
    return iter(list,null);
}


module.exports = {
    list,
    printList,
    isList,
    listRef,
    length,
    reverse,
    sameParity,
    squareList,
    squareListWithMap,
    squareListWithIter,
    squareListWithIterRightOrder,
    squareListWithIterLeftOrder,
    squareListWithIter1
}