import {
    makeWithDraw,
    makeAccount,
    makeAccumulator,
    makeMonitored,
    makeAccountWithPassword
} from './local-state';

describe('makeWithDraw returns is different',()=> {
    it('makeWithDraw returns not equals  test', ()=>{
        const w1 = makeWithDraw(100);
        const w2 = makeWithDraw(100);
        expect(w1).not.toEqual(w2);
    });

    it('makeWithDraw returns invoke test',()=> {
        const w1 = makeWithDraw(100);
        const w2 = makeWithDraw(100);
        expect(60).toEqual(w1(40));
        expect(50).toEqual(w2(50));
    })
});

describe('makeAccount returns is function test',()=>{
    it('makeAccount withdraw test',()=> {
        const w1 = makeAccount(100);
        let result = w1('withdraw')(50);
        expect(50).toEqual(result);
        result = w1('withdraw')(60);
        expect('Insufficient funds').toEqual(result);
        
    });
    it('makeAccount deposit test',()=> {
        const w1 = makeAccount(100);
        const result = w1('deposit')(50);
        expect(150).toEqual(result);
        
    });
});

describe('makeAccumulator test',()=> {
    it('makeAccumulator returns add test',()=>{
        const add = makeAccumulator(50);
        let result = add(20);
        expect(70).toEqual(result);
        result = add(20);
        expect(90).toEqual(result);
    });
});

describe('makeMonitored test',()=>{
    it('makeMonitored fn test',()=>{
        const m1 = makeMonitored(item=>item*item);
        let result = m1(2);
        expect(4).toEqual(result);
        expect(1).toEqual(m1('how-many-calls'));
        m1('reset-count');
        expect(0).toEqual(m1('how-many-calls'));
    })
});

describe('makeAccountWithPassword test',()=>{
    it('makeAccountWithPassword with password test',()=>{
        const m1 = makeAccountWithPassword(100,'nicelife');
        let result = m1('hello',50);
        expect(result).not.toBeUndefined();

        result = m1('nicelife','withdraw')(50);
        expect(result).toEqual(50);
        result = m1('nicelife','deposit')(60);
        expect(result).toEqual(110);
    });

    it('makeAccountWithPassword with password maxTryTimes test',()=>{
        const m1 = makeAccountWithPassword(100,'nicelife');
        m1('nicelife1','withdraw')(50);
        m1('nicelife1','withdraw')(50);
        m1('nicelife1','withdraw')(50);
        m1('nicelife1','withdraw')(50);
        m1('nicelife1','withdraw')(50);
        m1('nicelife1','withdraw')(50);
        expect(()=>m1('nicelife2','withdraw')(50)).toThrow('You try too much times, calling the cops ...haha');
    });
})