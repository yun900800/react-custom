const sum = (term, next, a,b)=> {
    if (a > b) {
        return 0;
    }
    return term(a) + sum(term, next, next(a),b);
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
module.exports = {
    sumInteger,
    sumCubes,
    piSum,
    integral
}