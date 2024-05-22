import { 
    head, 
    pair,
} from '../pair/pair';

import {
    isPrime
} from '../utils/utils';
import {
    pairStream,
    streamHead,
    streamTail,
    streamEnumerateInterval,
    streamRef,
    streamMap,
    streamForEach,
    displayStream,
    streamFilter,

    memo,
    streamMap2,
    mulStreams,

    integerStartingFrom,
    isDivisible,
    fibgen,
    sieve,
    addStream,
    scaleStream
} from './stream';

describe('stream test',()=>{
    it('pairStream test',()=>{
        const stream1 = pairStream(1,2);
        expect(streamHead(stream1)).toEqual(1);
        expect(streamTail(stream1)).toEqual(2);
    });

    it('streamEnumerateInterval, streamRef test',()=>{
        const stream1 = streamEnumerateInterval(10,100);
        let result = streamRef(stream1,5);
        expect(15).toEqual(result);

        result = streamRef(stream1,50);
        expect(60).toEqual(result);
    });

    it('streamMap test',()=>{
        const stream1 = streamEnumerateInterval(10,20);
        displayStream(stream1);
        const stream2 = streamMap(item=>item*item, stream1);
        displayStream(stream2);
    });

    it('streamForEach test',()=>{
        const stream1 = streamEnumerateInterval(10,15);
        console.log('streamForEach');
        streamForEach(item=>console.log(item), stream1);
    });

    it('streamFilter test',()=>{
        const stream1 = streamEnumerateInterval(10,20);
        displayStream(stream1);
        const stream2 = streamFilter(item=>item%2 ===1, stream1);
        displayStream(stream2);
    });

    it('stream in isPrime test',()=>{
        //这里streamTail 发起真正的计算后,
        // head返回真正的值
        const result = head(streamTail(
            streamFilter(
                isPrime,
                streamEnumerateInterval(10000,1000000)
            )
        ));
        expect(10009).toEqual(result);
    });

    it('memo test',()=>{
        const fn = jest.fn(x=>x*x);
        const memoFn = memo(fn);
        let result = memoFn(3);
        expect(result).toEqual(9);
        result = memoFn(4);
        expect(result).toEqual(9);
        expect(fn).toBeCalledTimes(1); 
    });

    it('streamMap2 mulStreams test',()=>{
        const stream1 = streamEnumerateInterval(100,110);
        const stream2 = streamEnumerateInterval(200,210);
        const stream3 = streamMap2((s1,s2)=>s1+s2, stream1, stream2);
        displayStream(stream3);

        const stream4 = mulStreams(stream1, stream2);
        displayStream(stream4);
    })

});

describe('infinite stream test',()=>{
    it('integerStartingFrom test',()=>{
        const integers = integerStartingFrom(1);
        expect(streamRef(integers,5)).toEqual(6);
        
    });

    it('define s stream noSeven',()=>{
        const integers = integerStartingFrom(1);
        const noSeven = streamFilter(x=>!isDivisible(x,7), integers);
        //1 2 3 4 5 6 8 9 10
        expect(streamRef(noSeven,8)).toEqual(10);
        expect(streamRef(noSeven,100)).toEqual(117);
    });

    it('fibgen test',()=>{
        const fibs = fibgen(0,1);
        // 0 1 1 2 3 5 8 
        expect(streamRef(fibs,6)).toEqual(8);
    });

    it('sieve test',()=> {
        const integers = integerStartingFrom(2);
        const primeS = sieve(integers);
        expect(streamRef(primeS,50)).toEqual(233);
        expect(streamRef(primeS,100)).toEqual(547);
        expect(streamRef(primeS,1000)).toEqual(7927);
    });

    it('ones define test',()=>{
        const ones = pair(1, ()=>ones);
        expect(streamRef(ones,50)).toEqual(1);
    });

    it('addStream test',()=>{
        const ones = pair(1, ()=>ones);
        const integers = pair(1, ()=>addStream(ones, integers));
        expect(streamRef(integers,50)).toEqual(51);

        const fibs = pair(0,()=>pair(1, ()=>{
            return addStream(streamTail(fibs), fibs);
        }));
        expect(streamRef(fibs,6)).toEqual(8);
    });

    it('scaleStream test',()=>{
        const double = pair(1,()=>scaleStream(double,2));
        expect(streamRef(double,4)).toEqual(16);
    });

    it('define primes',()=>{ 
        const primes = pair(2, ()=> streamFilter(isPrimeNew,integerStartingFrom(3)));
        const isPrimeNew = n => {
            const iter = (ps) => {
                return head(ps)* head(ps) > n
                       ? true
                       : isDivisible(n, head(ps))
                       ? false
                       : iter(streamTail(ps));
            }
            return iter(primes);
        }
        expect(streamRef(primes,50)).toEqual(233);
        expect(streamRef(primes,100)).toEqual(547);
    });
})