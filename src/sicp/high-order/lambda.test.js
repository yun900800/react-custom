import {
    halfIntervalMethod,
    fixedPoint,
    sqrt
} from './lambda';
describe('lambda test',()=>{
    it('halfIntervalMethod test',()=>{
        let value = halfIntervalMethod(Math.sin, 2.0,4.0);
        expect(value).toBeGreaterThan(3.1411);
        value = halfIntervalMethod(x=>{
            return x*x*x-2*x-3;
        }, 1.0,2.0);
        expect(value).toBeLessThan(1.9);
    });

    it('fixedPoint test',()=>{
        let value = fixedPoint(Math.cos, 1.0);
        expect(value).toBeGreaterThan(0.7390);
        value = fixedPoint(x=>1+1/x, 2.0);
        console.log('value',value);

        value = fixedPoint(x=>(x+ Math.log(1000)/ Math.log(x)) /2, 2.0);
        console.log('value1',value);
        value = fixedPoint(x=>Math.log(1000)/ Math.log(x), 2.0);
        console.log('value2',value);
    });
    it('sqrt test',()=>{
        const value = sqrt(2.0);
        expect(value).toBeGreaterThan(1.414)
    });
})