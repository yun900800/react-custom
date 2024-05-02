import {
    test,
    p,
    conditional,
    sqrt
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