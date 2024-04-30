import {
    isEqual,
    error,
    gcd
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

const makeJoin = (originAcc, originPassword, newPassword)=>{
    return (givenPassword,mode) => {
        if (isEqual(givenPassword,newPassword)) {
            return originAcc(originPassword,mode);
        }
        return displayWrongPassword;
    }
}

const makeRand = ()=>{
    return ()=>{
        return Math.floor(Math.random() * 1000);
    }
}

const dirichLetTest = ()=>{
    const a = makeRand()();
    const b = makeRand()();
    return gcd(a , b) === 1
}

const monteCarlo = function(trials, experiment) {
    const iter = (trialsRemaining, trialsPassed)=>{
        if (trialsRemaining == 0) {
            return trialsPassed/trials;
        }
        if (experiment()) {
            return iter(trialsRemaining-1, trialsPassed + 1);
        } else {
            return iter(trialsRemaining-1, trialsPassed);
        }
    }
    return iter(trials,0);
}

const estimatePi = function(trials) {
    const possibility = monteCarlo(trials, dirichLetTest)
    return Math.sqrt(6/possibility);
}

const randomInRange = (low, high)=> {
    const range = high - low;
    return low + Math.random() * range;
}

const estimateIntegral = (p, x1,x2,y1,y2,trials) => {
    return 4 * monteCarlo(trials, ()=>p(
        randomInRange(x1,x2),
        randomInRange(y1,y2)
    ));
}

const getPI = (trials)=> {
    return estimateIntegral((x,y)=>{
        return x*x + y*y <= 1;
    }, -1.0, 1.0, -1.0, 1.0, trials);
}

const makeSimplifiedWithdraw = balance => {
    return amount => {
        balance-=amount;
        return balance;
    }
}

const makeDecrementer = balance=> {
    return amount=>balance-amount;
}

let fn = () => {
    let previous = 1;
    return x => {
        let returnValue = x * previous;
        previous = x;
        return returnValue;
    }
}


module.exports = {
    makeWithDraw,
    makeAccount,
    makeAccumulator,
    makeMonitored,
    makeAccountWithPassword,
    estimatePi,
    getPI,
    randomInRange,
    makeSimplifiedWithdraw,
    makeDecrementer,
    makeJoin,
    fn
}

