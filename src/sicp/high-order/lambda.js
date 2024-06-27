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
        console.log('sequences',next);
        return closeEnough(next, guess)
            ? next
            : tryGuess(next);
    } 
    return tryGuess(initGuess);
}

const sqrt = x =>fixedPoint(y=>(y+x/y)/2,1.0);

module.exports = {
    halfIntervalMethod,
    fixedPoint,
    sqrt
}