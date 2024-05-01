import {
    makeQueue,
    insertQueue,
    deleteQueue,
    isEmptyQueue,
    frontQueue,
    printQueue,
    frontPtr,
    makeQueueNew
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

    it('printQueue test',()=>{
        const q = makeQueue();
        insertQueue(q,'a');
        insertQueue(q,'b');
        insertQueue(q,'c');
        insertQueue(q,'d');
        //printQueue(frontPtr(q));
        deleteQueue(q);
        //printQueue(frontPtr(q));
    });

    it('makeQueueNew test',()=> {
        const q1 = makeQueueNew();
        let front = q1('insertQueue')('a');
        front = q1('insertQueue')('b');
        front = q1('insertQueue')('c');
        front = q1('insertQueue')('d');
        printQueue(front);
        front = q1('deleteQueue')();
        printQueue(front);

    });

});