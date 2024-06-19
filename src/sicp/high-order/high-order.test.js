import {
    sumInteger,
    sumCubes,
    piSum,
    integral,
    simpson,
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
} from './high-order';

import {
    isPrime
} from '../math/math';

import {
    gcd
} from '../utils/utils';

describe('high-order test',()=>{
    it('sumInteger test',()=> {
        const result = sumInteger(1,10);
        expect(55).toEqual(result);
    });
    it('sumCubes test',()=> {
        const result = sumCubes(1,10);
        expect(385).toEqual(result);
    });
    it('sumCubes test',()=> {
        const result = piSum(1,1000)*8;
        expect(result).toBeGreaterThan(3.10);
    });
    it('integral test',()=>{
        let result = integral(item=>item*item*item,0,1,0.001);
        console.log(result)
        expect(result).toBeLessThan(0.25);

        result = integral(x=>Math.sin(x),0,1.57,0.001);
        console.log(result);

        result = integral(item=>item*item,0,1,0.001);
        console.log(result);
    });

    it('simpson test',()=> {
        const cube = x =>x*x*x;
        let result = simpson(cube,0,1,100);
        console.log(result);
        result = simpson(cube,0,1,1000); 
        console.log(result);
    });

    it('product test',()=>{
        expect(product(x=>x,1,x=>x+1,10)).toEqual(3628800);
    });

    it('productIter test',()=>{
        expect(productIter(x=>x,1,x=>x+1,10)).toEqual(3628800);
    });

    it('sumR productR test',()=>{
        expect(sumR(x=>x,1,x=>x+1,10)).toEqual(55);
        expect(productR(x=>x,1,x=>x+1,10)).toEqual(3628800);
    });

    it('sumI productI test',()=>{
        expect(sumI(x=>x,1,x=>x+1,10)).toEqual(55);
        expect(productI(x=>x,1,x=>x+1,10)).toEqual(3628800);
    });

    it('filterAccumulate test',()=>{
        const sumPrime = (a,b) =>{
            return filterAccumulate(
                (x,y)=>x+y,
                0,
                x=>x,
                a,
                x=>x+1,
                b,
            isPrime);
        }

        expect(sumPrime(1,10)).toEqual(18);

        const coPrime = (i,n)=>{
            return i < n && gcd(i,n) ===1;
        }

        const productPrime = n => {
            return filterAccumulate(
                (x,y)=>x*y,
                1,
                x=>x,
                1,
                x=>x+1,
                n,
                x=>coPrime(x,n));
        }
        expect(productPrime(10)).toEqual(189);
    });

    it('filterAccumulateIter test',()=>{
        const evenSum = n =>{
            return filterAccumulateIter((x,y)=>x+y,0,x=>x,1,x=>x+1,n, x=>x%2===0);
        }

        expect(evenSum(10)).toEqual(30);
    })
});