const sum = (term, next, a,b)=> {
    if (a > b) {
        return 0;
    }
    return term(a) + sum(term, next, next(a),b);
}

// 这里在迭代的过程中 term(a)+ result定义的这个变量保持不变
const sumIter = (term, next, a,b) => {
    const iter = (a, result)=>{
        if (a>b) {
            return result;
        }
        return iter(next(a), term(a)+ result);
    }
    return iter(a,0);
}


const product = (term, a, next,b) =>{
    if (a>b) {
        return 1;
    }
    return term(a) * product(term,next(a),next,b);
}

const productIter = (term, a, next,b) =>{
    const iter = (a, result) =>{
        if (a> b){
            return result;
        }
        return iter(next(a), term(a)*result);
    }
    return iter(a,1);
}

const sumInteger = (a,b)=> {
    return sum(item=>item, index=>index+1,a,b);
}
const sumCubes = (a,b) => {
    return sum(item=>item*item,index=>index+1,a,b);
}

const piSum = (a,b) => {
    return sum(item=>1/(item*(item+2)),index=>index+4,a,b);
}

const integral = (f, a,b,dx) => {
    return sum(f, x=>dx+x,(a+dx/2), b)*dx;
}

const simpson = (f,a,b,n) => {
    const h = (b-a)/n;
    const y = k=> {
        return f(a+k*h);
    }

    const factor = k=>{
        return (k ===0 || k === n) 
            ? 1
            : k % 2  === 1
            ? 4
            : 2;
    }

    const term = k =>{
        return factor(k) * y(k);
    }
    const next = k =>{
        return k+1;
    }
    if (n % 2 === 1) {
        console.log('error');
    } else {
        return h/3 * sum(term,next,0,n);
    }
}

const accumulaterRecursive = (combiner, nullValue, term, a, next,b)=>{
    if (a>b) {
        return nullValue;
    }
    return combiner(term(a),
        accumulaterRecursive(combiner,nullValue, term,next(a),next,b)
    );
}

const sumR = (term,a,next,b)=>{
    const plus = (x,y)=>x+y;
    return accumulaterRecursive(plus,0,term,a,next,b);
}

const productR = (term,a,next,b)=>{
    const times = (x,y)=>x*y;
    return accumulaterRecursive(times,1,term,a,next,b);
}

// 这里 combiner(term(a),result) 保持不变
const accumulaterIter = (combiner, nullValue, term, a, next,b)=>{
    const iter = (a,result)=>{
        if (a>b){
            return result;
        }
        return iter(next(a), combiner(term(a),result));
    }
    return iter(a,nullValue);
}

const sumI = (term,a,next,b)=>{
    const plus = (x,y)=>x+y;
    return accumulaterIter(plus,0,term,a,next,b);
}

const productI = (term,a,next,b)=>{
    const times = (x,y)=>x*y;
    return accumulaterIter(times,1,term,a,next,b);
}

const filterAccumulate = (combiner, nullValue,
    term, a, next, b, filter) =>{
    return a > b ? nullValue
        : filter(a)
        ? combiner(term(a), filterAccumulate(combiner,nullValue, term, next(a),next,b, filter))
        : filterAccumulate(combiner,nullValue, term, next(a),next,b, filter);
}

const filterAccumulateIter = (combiner, nullValue,
    term, a, next, b, filter) => {
        const iter = (a,result)=>{
            if (a > b){
                return result;
            }
            if (filter(a)) {
                return iter(next(a), combiner(term(a),result));
            } 
            return iter(next(a),result);
        }
        return iter(a,nullValue);
    }

module.exports = {
    sumInteger,
    sumCubes,
    piSum,
    integral,
    simpson,
    sumIter,
    product,
    productIter,
    accumulaterRecursive,
    sumR,
    productR,
    accumulaterIter,
    sumI,
    productI,
    filterAccumulate,
    filterAccumulateIter
}