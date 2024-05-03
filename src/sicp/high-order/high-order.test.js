import {
    sumInteger,
    sumCubes,
    piSum,
    integral
} from './high-order';

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
});