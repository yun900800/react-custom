import { error } from 'console';
import {
    cons, 
    car,
    cdr,
    listJs,
    listJsNew,
    appendJs,
    printListJs,
    isPair,
    head,
    tail,
    setHead,
    pair,
    setTail,
    lastPair,
    appendMutator,
    makeCycle,
    mystery
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
        //printListJs(list1);
        const list2 = listJs(3,4,5,6);
        //printListJs(list2);
        const appendList = appendJs(list1,list2);
        //printListJs(appendList);
    });
});

describe('listJs function test',()=> {
    it('listJs function test is OK',()=>{
        const list1 = listJs(1,null,2);
        printListJs(list1);
        const list2 = listJsNew(1,null,2);
        printListJs(list2);
    });
});

describe('sicp isPair test',()=>{
    it('sicp isPair test is OK',()=>{
        const list1 = listJsNew(1,null,2);
        expect(isPair(list1)).toBeTruthy();
        const list2 = tail(list1);
        expect(isPair(list2)).toBeTruthy();
        const list3 = tail(list2);
        expect(isPair(list3)).toBeTruthy();
        const list4 = tail(list3);
        expect(list4).toBeNull();
    });
});

describe('sicp setHead setTail test',()=>{
    it('sicp setHead test',()=>{
        const list1 =listJs(listJs('a','b'),'c','d');
        expect('a').toEqual(head(head(list1)));
        expect('b').toEqual(head(tail(head(list1))));
        let listHead = head(list1);
        expect('c').toEqual(head(tail(list1)));
        expect('d').toEqual(head(tail(tail(list1))));
        //printListJs(listHead);

        setHead(list1,listJs('e','f'));
        listHead = head(list1);
        expect('e').toEqual(head(head(list1)));
        expect('f').toEqual(head(tail(head(list1))));
        //printListJs(listHead);
    });

    it('sicp const z test',()=> {
        const x = listJs(listJs('a','b'),'c','d');
        const y = listJs('e','f');
        const z = pair(y, tail(x));
        expect(head(head(z))).toEqual('e')
        expect(head(tail(head(z)))).toEqual('f');

        expect(head(tail(z))).toEqual('c');
        expect(head(tail(tail(z)))).toEqual('d');
    });
    it('sicp setY z test',()=> {
        const x = listJs(listJs('a','b'),'c','d');
        const y = listJs('e','f');
        setTail(x,y);
        expect(head(tail(x))).toEqual('e');
        expect(head(tail(tail(x)))).toEqual('f');
    });
});

describe('lastPair function test',()=> {
    it('lastPair test',()=> {
        const x = listJs('a','b','c','d');
        const result = lastPair(x);
        expect('d').toEqual(head(result));
    });

    it('appendMutator test',()=> {
        const x = listJs('a','b','c');
        const y = listJs('e','f','g');
        const z = appendMutator(x,y);
        const result = lastPair(z);
        expect('g').toEqual(head(result));
        expect('a').toEqual(head(z));
    });

    it('makeCycle test',()=> {
        const x = listJs('a','b','c');
        const result = makeCycle(x);
        expect('a').toEqual(head(result));
        expect('b').toEqual(head(tail(result)));
        expect('c').toEqual(head(tail(tail(result))));
        expect('a').toEqual(head(tail(tail(tail(result)))));
    });
    it('mystery test',()=> {
        const x = listJs('a','b','c');
        const result = mystery(x);
        expect('c').toEqual(head(result));
        expect('a').toEqual(head(lastPair(result)));
    });
});

