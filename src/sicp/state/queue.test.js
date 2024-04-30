import {
    makeQueue,
    insertQueue,
    deleteQueue,
    isEmptyQueue,
    frontQueue
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
});