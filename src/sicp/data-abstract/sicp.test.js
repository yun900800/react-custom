import { error } from 'console';
import {
    cons, 
    car,
    cdr,
    listJs,
    appendJs,
    printListJs
} from './sicp';

describe('test cons construct process',()=>{
    it('build cons',()=>{
        const pair = cons('a','b');
        expect('a').toEqual(car(pair));
        expect('b').toEqual(cdr(pair));
    });
    it('car function test',()=>{
        const pair = cons('c','b');
        expect('c').toEqual(car(pair));
    })
    it('cdr function test',()=>{
        const pair = cons('c','d');
        expect('d').toEqual(cdr(pair));
    })
});

describe('error function test',()=>{
    it('error test message is ok',()=>{
        try {
            error('mycode=>','code is error');
        } catch (error) {
            expect(error.message).toBe("mycode=>code is error");
        }      
    })
});

describe('appendJs function test',()=>{
    it('appendJs function test is OK ',()=>{
        const list1 = listJs(1,2,3,4);
        printListJs(list1);
        const list2 = listJs(3,4,5,6);
        printListJs(list2);
        const appendList = appendJs(list1,list2);
        printListJs(appendList);
    });
})