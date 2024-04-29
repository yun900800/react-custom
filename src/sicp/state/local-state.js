import {
    isEqual,
    error
} from '../data-abstract/sicp'
const makeWithDraw = balance=> {
    return amount => {
        if (balance >= amount) {
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds";
        }
    }
}

const makeAccount = balance => {
    const withdraw = amount => {
        if (balance >= amount) {
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds";
        }
    }
    const deposit = amount => {
        balance = balance + amount;
        return balance;
    }

    const dispatch = m => {
        return m === "withdraw"
               ? withdraw
               : m === "deposit"
               ? deposit
               : error(m, "unknown request -- make_account");
    }
    return dispatch;
}

const makeAccumulator = value => {
    return addValue=> {
        value+=addValue;
        return value;
    }
}

const makeMonitored = f => {
    let callCount = 0;
    return input => {
        if (isEqual(input,'how-many-calls')) {
            return callCount;
        }
        if (isEqual(input,'reset-count')) {
            callCount = 0;
        } else {
            callCount+=1
            return f(input);
        }
    }
}

const makeAccountWithPassword = (balance, password) => {

    const maxTryTimes = 7;
    let tryTimes = 0;
    const withdraw = amount => {
        if (balance >= amount) {
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds";
        }
    }
    const deposit = amount => {
        balance = balance + amount;
        return balance;
    }

    const passwordMatch = newPassword => {
        return isEqual(password,newPassword);
    }

    const displayWrongPassword = (msg)=>{
        console.log('Incorrect password');
    }
    const dispatch = (givenPassword, mode) => {
        if (passwordMatch(givenPassword)) {
            tryTimes = 0;
            return mode === "withdraw"
               ? withdraw
               : mode === "deposit"
               ? deposit
               : error(mode, "unknown request -- make_account");
        } else {
            tryTimes+=1;
            if (tryTimes >= maxTryTimes) {
                return callToCops;
            }
            return displayWrongPassword;
        }
    }
    return dispatch;
}

const callToCops = msg=>{
    return error('You try too much times, calling the cops ...','haha');
}

module.exports = {
    makeWithDraw,
    makeAccount,
    makeAccumulator,
    makeMonitored,
    makeAccountWithPassword
}

