import {
    pair,
    tail,
    head,
    setTail,
} from '../data-abstract/sicp';

import {
    error,
    isEqual
} from '../utils/utils';

import {
    list 
} from  '../list/list';

const lookup = (key, table) => {
    const record = assoc(key, tail(table));
    return undefined === record
           ? undefined
           : tail(record);
}

/**
 * 这里返回的是序对
 * @param {*} key 
 * @param {*} records 
 * @returns 
 */
const assoc = (key, records) => {
    return null === records
           ? undefined
           : isEqual(key, head(head(records)))
           ? head(records)
           : assoc(key, tail(records));
}

const insetrTable = (key, value, table) => {
    const record = assoc(key, tail(table));
    if (undefined === record) {
        //在表头创建记录
        setTail(table,
                 pair(pair(key, value), tail(table)));
    } else {
        //重新设置一个新的值
        setTail(record, value);
    }
    return "ok";
}

const makeTable = ()=>{
    return list('*table*')
}

const makeTableNew = (sameKey)=> {
    const localTable = list('*table*');
    const lookup = (key1, key2) => {
        const subtable = assoc(key1, tail(localTable));
        if (undefined === subtable ) {
            return undefined;
        } else {
            const record = assoc(key2, tail(subtable));
            return undefined === record
                   ? undefined
                   : tail(record);
        }
    }

    const assoc = (key, records) => {
        let equal = isEqual;
        if (sameKey) {
            equal = sameKey;
        }
        return null === records
               ? undefined
               : equal(key, head(head(records)))
               ? head(records)
               : assoc(key, tail(records));
    }
    const insert = (key1, key2, value) => {
        const subtable = assoc(key1, tail(localTable));
        if (undefined === subtable) {
            setTail(localTable,
                     pair(list(key1, pair(key2, value)),
                          tail(localTable)));
        } else {
            const record = assoc(key2, tail(subtable));
            if (undefined === record) {
                setTail(subtable,
                         pair(pair(key2, value), tail(subtable)));
            } else {
                setTail(record, value);
            }
        }
    }
    const dispatch = m => {
        return m === "lookup"
               ? lookup
               : m === "insert"
               ? insert
               : error(m, "unknown operation -- table");
    }
    return dispatch;
}

const operation_table = makeTableNew((key1,key2)=>{
    if (typeof key1 === 'function' && typeof key2 === 'function') {
        return head(key1) === head(key2);
    } else {
        return key1 === key2
    }
});
const get = operation_table("lookup");
const put = operation_table("insert");

module.exports = {
    makeTable,
    insetrTable,
    lookup,
    makeTableNew,
    get,
    put
}