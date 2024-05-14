import {
    list
} from '../list/list'
import { 
    head, 
    setHead, 
    tail
} from '../pair/pair';
const makeDlEntry = value => {
    return list(value,null,null);
}

const dlValue = entry => head(entry);
const dlNext = entry = head(tail(entry));
const dlPrev = entry = head(tail(tail(entry)));

const setDlNext = (entry, ptr) => {
    const dlNextPtr = tail(entry);
    setHead(dlNextPtr,ptr);
}

const setDlPrev = (entry, ptr) => {
    const dlPrevPtr = tail(tail(entry));
    setHead(dlPrevPtr,ptr);
}

// https://github.com/kana/sicp/blob/master/ex-3.23.scm  这里有一个双端队列的实现