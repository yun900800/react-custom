import {
    makeQueue,
    insertQueue,
    deleteQueue,
    isEmptyQueue,
    frontQueue,
    printQueue,
    makeQueueNew,
    displayQueue,

    frontPtr
} from './queue';

describe('queue function test',()=>{
    it('makeQueue test',()=>{
        const q = makeQueue();
        insertQueue(q,'a');
        expect('a').toEqual(frontQueue(q));
        insertQueue(q,'b');
        deleteQueue(q);
        expect('b').toEqual(frontQueue(q));
    });

    it('isEmptyQueue test',()=> {
        const q = makeQueue();
        expect(isEmptyQueue(q)).toBeTruthy();
        insertQueue(q,'a');
        expect(isEmptyQueue(q)).toBeFalsy();

        const q1 = makeQueue();
        insertQueue(q1,null);
        expect(isEmptyQueue(q1)).toBeFalsy();
    });

    it('frontQueue test',()=>{
        const q = makeQueue();
        expect(()=>{
            frontQueue(q)
        }).toThrow('front_queue called with an empty queue');
        insertQueue(q,'test');
        expect(frontQueue(q)).toEqual('test');
    });

    it('insertQueue test',()=> {
        const q = makeQueue();
        insertQueue(q,'3');
        expect(frontQueue(q)).toEqual('3');
        expect(isEmptyQueue(q)).toBeFalsy();
    });

    it('deleteQueue test',()=> {
        const q = makeQueue();
        insertQueue(q,'3');
        expect(frontQueue(q)).toEqual('3');
        expect(isEmptyQueue(q)).toBeFalsy();
        deleteQueue(q);
        expect(()=>{
            frontQueue(q)
        }).toThrow('front_queue called with an empty queue');
        expect(isEmptyQueue(q)).toBeTruthy();
    })

    it('displayQueue test',()=>{
        const q = makeQueue();
        insertQueue(q,'A');
        insertQueue(q,'B');
        insertQueue(q,'C');
        insertQueue(q,'D');
        expect(['A','B','C','D']).toEqual(displayQueue(frontPtr(q)));
    })

    it('printQueue test',()=>{
        const q = makeQueue();
        insertQueue(q,'a');
        insertQueue(q,'b');
        insertQueue(q,'c');
        insertQueue(q,'d');
        expect(['a','b','c','d']).toEqual(displayQueue(frontPtr(q)));
        deleteQueue(q);
        expect(['b','c','d']).toEqual(displayQueue(frontPtr(q)));
    });

    it('makeQueueNew test',()=> {
        const q1 = makeQueueNew();
        let front = q1('insertQueue')('a');
        front = q1('insertQueue')('b');
        front = q1('insertQueue')('c');
        front = q1('insertQueue')('d');
        expect(['a','b','c','d']).toEqual(displayQueue(front));
        front = q1('deleteQueue')();
        expect(['b','c','d']).toEqual(displayQueue(front));
    });

});