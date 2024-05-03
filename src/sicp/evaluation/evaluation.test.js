import {
    test,
    p,
    conditional,
    sqrt,
    plus,
    plus_one
} from './evaluation';

describe('evaluation test',()=> {
    it('evaluation order test',()=> {
        let result = test(0,p);
        expect(result).toEqual(0);
        expect(()=> {
            result = test(0,p());
            // js 是应用序
        }).toThrow('Maximum call stack size exceeded');
    });

    it('conditional test',()=> {
        let result = conditional(2 === 3, 0, 5);
        expect(result).toEqual(5);
        result = conditional(1 === 1, 0, 5);
        expect(result).toEqual(0);
    });

    it('sqrt test',()=> {

        // expect(()=> {
        //     sqrt(2);
        //     // js 是应用序
        // }).toThrow('Maximum call stack size exceeded');
        let result = sqrt(2);
        console.log(result);

        result = sqrt(0.00009);
        console.log(result);
        result = sqrt(900000000000000000000000000000000000000000000000000000000000000000000000000000000000);
        console.log(result);
    })
});

describe('recursive or iterator test',() => {

    /**
     * 通过这两个测试理解什么是线性递归计算过程和
     * 线性迭代计算过程
     * 
     *  (plus 3 5)
     *  (inc (plus 2 5))
     *  (inc (inc (plus 1 5)))
     *  (inc (inc (inc (plus 0 5))))
     *  (inc (inc (inc 5)))
     *  (inc (inc 6))
     *  (inc 7)
     *  变量b在变量a线性递减的过程中不变,
     *  而通过inc的递归计算出最后结果
     *   plus 的参数 b 在伸展和收缩阶段都一直是 5 ，最后的结果是根据 inc 函数递归计算而来的。
     */
    it('plus test',()=> {
        const result = plus(3,5);
        expect(8).toEqual(result);
    });

    /**
     * (plus_one 3 5)
     * (plus_one 2 6)
     * (plus_one 1 7)
     * (plus_one 0 8)
     * 第二个 plus_one 的计算过程并没有伸展和收缩阶段，它通过不断更新 a 和 b 两个参数的值来完成计算。
     */
    it('plus_one test',()=>{
        const result = plus_one(3,5);
        expect(8).toEqual(result);
    });
});