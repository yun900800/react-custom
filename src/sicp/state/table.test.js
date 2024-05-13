import { list } from '../list/list';
import {
    makeTable,
    insetrTable,
    lookup,
    makeTableNew,
    get,
    put
} from './table'

describe('makeTable test', ()=> {
    it('insert table test',()=> {
        const table = makeTable();
        insetrTable('a',1,table);
        insetrTable('b',2,table);

        const result = lookup('a',table);
        expect(1).toEqual(result)
    });

    it('insert table test override value',()=> {
        const table = makeTable();
        insetrTable('a',1,table);
        insetrTable('b',2,table);
        
        let result = lookup('a',table);
        expect(1).toEqual(result);
        insetrTable('b',5,table);
        result = lookup('b',table);
        expect(5).toEqual(result);
    });

    it('makeTableNew function test',()=>{
        const operation_table = makeTableNew();
        const get = operation_table("lookup");
        const put = operation_table("insert");
        put('a','b',1);
        const result = get('a','b');
        expect(1).toEqual(result);
    });

    it('makeTableNew function samekey test',()=>{
        const operation_table = makeTableNew((a,b)=> a===b);
        const get = operation_table("lookup");
        const put = operation_table("insert");
        put(3,5,8);
        const result = get(3,5);
        expect(8).toEqual(result);
    });

    it('put and get test',()=>{
        put('aaa',list('bbb'),x=>x);
        const result = get('aaa',list('bbb'));
        expect(typeof result).toEqual('function');
    })
});