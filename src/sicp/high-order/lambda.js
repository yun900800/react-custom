const search = (f, negPoint, posPoint)=>{
    const average  = (a,b)=>(a+b)/2;
    const closeEnough = (x,y) => Math.abs(x-y)<0.001; 
    const midPoint = average(negPoint, posPoint);
    return closeEnough(negPoint,posPoint)?
            midPoint:
            f(midPoint) > 0
            ? search(f, negPoint, midPoint)
            : f(midPoint) < 0
            ? search(f, midPoint, posPoint)
            : midPoint;
}

const halfIntervalMethod = (f,a,b) => {
    const aValue = f(a);
    const bValue = f(b);
    if (aValue < 0 && bValue > 0){
        return search(f,a,b);
    }
    if (aValue > 0 && bValue < 0){
        return search(f,b,a);
    } else {
        error('value are not opposite sign',a,b);
    }
}

const fixedPoint = (f, initGuess)=>{
    const closeEnough = (x,y) => Math.abs(x-y)<0.00001; 
    const tryGuess = guess=>{
        const next = f(guess);
        // console.log('sequences',next);
        return closeEnough(next, guess)
            ? next
            : tryGuess(next);
    } 
    return tryGuess(initGuess);
}

const sqrt = x =>fixedPoint(y=>(y+x/y)/2,1.0);

const contFrac = (n,d,k) =>{
    const fraction = i =>{
        return i > k ? 0
            : n(i) / (d(i)+ fraction(i+1))
    }
    return fraction(1);
}

// 在这里的迭代中 result = n(i)/(d(i)+ result) 这个部分保持不变
const contFracIter = (n,d,k) =>{
    const fraction = (i,result)=>{
        return i == 0 
            ? result
            : fraction(i-1, n(i)/(d(i)+ result));
    }
    return fraction(k,0)
}

const tanCf = (x,k) =>{
    return contFrac(i=>i==1?x: -x*x,
        i=>2*i-1,
        k
    );
}

const averageDamp = f => {
    return x=>(x+f(x))/2;
}

const sqrtNew = x => {
    return fixedPoint(averageDamp(y=>x/y),1.0);
}

const cubeRoot = x => {
    return fixedPoint(averageDamp(y=>x/(y*y)),1.0);
}

const deriv = g=> {
    const dx = 0.00001;
    return x=> (g(x+dx) - g(x))/dx;
}

const newtonTransform = g =>{
    return x=> x- g(x)/deriv(g)(x)
}

const newtonMethod = (g,guess)=>{
    return fixedPoint(newtonTransform(g),guess);
}

const sqrtNewton = x => {
    return newtonMethod(y=>y*y-x,1);
}

const fixedPointOfTransform = (g,transform,guess)=>{
    return fixedPoint(transform(g), guess);
}

const compose = (f,g)=>x=>f(g(x));

// repeated(f,1) = f(x);
// repeated(f,2) = f(f(x));
// repeated(f,3) = f(f(f(x))); ==f(repeat(f,2)) 所以 repeat(f,k) = f(repeat(f,k-1))= compose(f,repeat(f,k-1))；
// repeated(f,0) = x;
const repeated = (f,n)=>{
    return n===0?
        x=>x
        : compose(f,repeated(f,n-1));
}

const smooth = f=>{
    const dx = 0.00001;
    return x => (f(x-dx)+f(x)+f(x+dx))/3;
}

const nFoldSmooth = (f,n)=>{
    return repeated(smooth,n)(f);
}

const iterateImprove = (isGoodEnough,improve)=>{
    const iterate = x=>{
        return isGoodEnough(x)
            ? x
            : iterate(improve(x));
    }
    return iterate;
}


module.exports = {
    halfIntervalMethod,
    fixedPoint,
    sqrt,
    contFrac,
    contFracIter,
    tanCf,
    sqrtNew,
    cubeRoot,
    deriv,
    newtonMethod,
    sqrtNewton,
    compose,
    repeated,
    iterateImprove
}