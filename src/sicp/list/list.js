import { 
    pair,
    head,
    tail
} from "../pair/pair";

const list = (first,...rest) =>(!first && rest.length ===0)?null:pair(first, list(...rest));
const printList = (list) => {
    let msg = '';
    const iter = (items) => {
        if (null === items) {
            return;
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
        typeof tail(list) === 'function';
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

module.exports = {
    list,
    printList,
    isList,
    listRef,
    length,
    reverse
}