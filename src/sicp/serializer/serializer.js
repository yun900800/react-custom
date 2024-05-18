import {
    error
} from '../utils/utils';

import { 
    setHead,
    head,
    pair
} from '../pair/pair';

const makeMutex = () => {
    const cell = pair(false,null);
    const testAndSet = c => {
        if (head(c)) {
            return true;
        } else {
            setHead(c, true);
            return false;
        }
    }

    const clear = c =>{
        setHead(c, false);
    }
    const theMutex = m => {
        return m === "acquire"
               ? testAndSet(cell)
                 ? theMutex("acquire") // retry
                 : true
               : m === "release"
               ? clear(cell)
               : error(m, "unknown request -- mutex");
    }
    return theMutex;
}

const makeSerializer = () => {
    const mutex = makeMutex();
    return fn=>{
        function serializedFn(...args) {
            mutex("acquire");
            const val = fn(...args);
            mutex("release");
            return val;
        }
        return serializedFn;
    };
}

const makeAccount = balance => {

    const withDraw = amount => {
        if (balance > amount) {
            balance-=amount;
            return balance;
        } else {
            return 'Insufficient funds';
        }
    }

    const deposit = amount => {
        balance+=amount;
        return balance;
    }
    const protect = makeSerializer();
    const dispatch = m => {
        return m === "withdraw" 
               // 这里的withDraw中的操作是原子的啦
               ? protect(withDraw)
               : m === "deposit"
               // 这里的deposit中的操作是原子的啦
               ? protect(deposit)
               : m === "balance"
               ? balance
               : error(m, "unknown request -- make_account");
    }
    return dispatch;
}

module.exports = {
    makeSerializer,
    makeAccount
}