import {
    pair,
    head,
    setHead,
    tail
} from '../pair/pair';

import {
    length
} from '../list/list';

import {
    error
} from '../utils/utils';


const enclosingEnvironment = env => {
    return tail(env);
}

const firstFrame = env => {
    return head(env);
}

const theEmptyEnvironment = null;

const makeFrame = (symbols, values) => {
    return pair(symbols, values);
}

const frameSymbols = frame => {
    return head(frame);
}

const frameValues = frame => {
    return tail(frame);
}

// 下面两个函数是基于上面代码的高层抽象,实际上是一种抽象屏障

const extendEnviroment = (symbols, vals, baseEnv) => {
    return length(symbols) === length(vals)
        ? pair(makeFrame(symbols,vals), baseEnv)
        : error(pair(symbols, vals), 
            length(symbols) < length(vals)
            ? "too many arguments supplied"
            : "too few arguments supplied");
}

const lookupSymbolValue = (symbol, env) => {
    const envLoop = env=>{
        const scan = (symbols, vals) => {
            return null === symbols
                ? envLoop(enclosingEnvironment(env))
                : symbol === head(symbols)
                ? head(vals)
                : scan(tail(symbols), tail(vals))
        }
        if (env === theEmptyEnvironment) {
            error(symbol, "unbound name");
        } else {
            const frame = firstFrame(env);
            return scan(frameSymbols(frame), frameValues(frame));
        }
    }
    return envLoop(env);
}

const assignSymbolValue = (symbol, val, env) => {
    const envLoop = env => {
        const scan = (symbols, vals) =>{
            return null === symbols
                ? envLoop(enclosingEnvironment(env))
                : symbol === head(symbols)
                ? setHead(vals, val)
                : scan(tail(symbols), tail(vals))
        }
        if (env === theEmptyEnvironment) {
            error(symbol, "unbound name -- assignment");
        } else {
            const frame = firstFrame(env);
            return scan(frameSymbols(frame), frameValues(frame));
        }
    }
    return envLoop(env);
}

module.exports = {
    enclosingEnvironment,
    firstFrame,
    theEmptyEnvironment,
    makeFrame,
    frameSymbols,
    frameValues,
    extendEnviroment,
    lookupSymbolValue,
    assignSymbolValue
}