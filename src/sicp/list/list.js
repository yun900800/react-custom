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

module.exports = {
    list,
    printList,
    isList
}