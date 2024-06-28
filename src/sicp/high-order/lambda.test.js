import {
    halfIntervalMethod,
    fixedPoint,
    sqrt,
    contFrac,
    contFracIter,
    tanCf,
    sqrtNew,
    cubeRoot,
    deriv,
    sqrtNewton,
    newtonMethod,
    compose,
    repeated
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
    it('sqrt sqrtNew test',()=>{
        let value = sqrt(2.0);
        expect(value).toBeGreaterThan(1.414);

        value = sqrtNew(2.0);
        expect(value).toBeGreaterThan(1.414);
    });

    it('contFrac test',()=>{
        let value = contFrac(i=>1,i=>1,11);
        expect(value).toBeGreaterThan(0.618);
        value = contFracIter(i=>1,i=>1,11);
        expect(value).toBeGreaterThan(0.618);

        value = 2 + contFrac(i => 1,  
            i => (i + 1) % 3 < 1 ? 2 * (i + 1) / 3 : 1,
            20);
        expect(value).toBeGreaterThan(2.718);
    });
    it('tanCf test',()=>{
        const value = tanCf(Math.PI/4,10);
        expect(value).toEqual(1);
    });

    it('cubeRoot test',()=>{
        const value = cubeRoot(7.8);
        expect(value).toBeLessThan(2.0)
    });

    it('deriv test',()=>{
        const cube = x=> x*x*x;
        const result = deriv(cube)(5);
        expect(result).toBeGreaterThan(75)
    });

    it('sqrtNewton test',()=>{
        const value = sqrtNewton(2);
        expect(value).toBeGreaterThan(1.414)
    });

    it('newtonMethod test',()=>{
        const cubic = (a,b,c) => x=> x*x*x + a*x*x+ b*x+c;
        const value = newtonMethod(cubic(1,1,1),1.0);
        console.log('value',value)
    });

    it('double test',()=>{
        const double = f=>{
            return x=>f(f(x));
        }
        const inc = x=>x+1;
        const result = double(double(double))(inc)(5);
        console.log('result',result);
    });

    it('compose test',()=>{
        const result = compose(x=>x*x,x=>x+1)(6);
        console.log('result',result);
        const result1 = repeated(x=>x*x,2)(5);
        expect(result1).toEqual(625)
    });
})