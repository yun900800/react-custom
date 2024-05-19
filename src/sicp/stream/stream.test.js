import { 
    head 
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

    memo
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
})