import {
    pair,
    head
} from '../pair/pair';
const pairStream = (a,b) => m => {
    return m === 0 ? a : m === 1 ? ()=>b : error(m, "argument not 0 or 1 -- pair");
}

const streamHead = s =>{
    if(null == s){
        return null;
    }
    return s(0)
}
const streamTail = s =>{
    if(null == s){
        return null;
    }
    return s(1)();
}

const streamEnumerateInterval = (low, high) => {
    return low > high
           ? null
           : pair(low,
                  () => streamEnumerateInterval(low + 1, high)); 
}

const streamRef = (s, n) => {
    return n === 0
           ? head(s)
           : streamRef(streamTail(s), n - 1);
}

const streamMap = (f,s) => {
    return null === (s)
           ? null
           : pair(f(head(s)),
                  () => streamMap(f, streamTail(s)));
}

const streamFilter = (pred,stream) => {
    return null === (stream)
           ? null
           : pred(head(stream))
           ? pair(head(stream),
                  () => streamFilter(pred, streamTail(stream)))
           : streamFilter(pred, streamTail(stream));
}

const streamForEach = (fun,s) => {
    if (null === (s)) {
        return true;
    } else {
        fun(head(s));
        return streamForEach(fun, streamTail(s));
    }
}

const display = s => {
    console.log(s);
}

const displayStream = s => {
    return streamForEach(display,s)
}

const memo = fun => {
    let alreadyRun = false;
    let result = undefined;
    return (arg)=> {
        
        if (!alreadyRun) {
            result = fun(arg);
            alreadyRun = true;
            return result;
        } else {
            return result;
        }
    };
}

module.exports = {
    pairStream,
    streamHead,
    streamTail,
    streamEnumerateInterval,
    streamRef,
    streamMap,
    streamForEach,
    displayStream,
    streamFilter,

    memo
}