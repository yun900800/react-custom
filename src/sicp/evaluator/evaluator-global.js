import {
    extendEnviroment,
    theEmptyEnvironment
} from './evaluator-enviroment';
import {
    head,
    tail,
    pair,
    isPair
} from '../pair/pair';

import {
    apply_in_underlying_javascript,
    map,
    append
} from '../utils/utils';

import {
    list
} from '../list/list';
import {
    isTaggedList
} from  './evaluator-utils';

const isPrimitiveFunction = fun =>{
    return isTaggedList(fun,'primitive');
}

const primitiveImplementation = fun =>{
    return head(tail(fun));
}

const primitiveFunctions = list(list("head",    head             ),
                                 list("tail",    tail             ),
                                 list("pair",    pair             ),
                                 list("isPair", isPair          ),
                                 list("+",       (x, y) => x + y  ));

const primitiveFunctionSymbols = map(f => head(f), primitiveFunctions);
                             
const primitiveFunctionObjects = map(f => list("primitive", head(tail(f))),primitiveFunctions);

const primitiveConstants = list(list("undefined", undefined),
                                list("math_PI",   Math.PI));
const primitiveConstantSymbols = map(c => head(c), primitiveConstants);
                            
const primitiveConstantValues = map(c => head(tail(c)), primitiveConstants);

const setupEnviroment = () => {
    return extendEnviroment(
        append(primitiveFunctionSymbols,
            primitiveConstantSymbols),
        append(primitiveFunctionObjects, 
            primitiveConstantValues),
        theEmptyEnvironment);
}

const applyPrimitiveFunction = (fun, arglist) =>{
    return apply_in_underlying_javascript(
        primitiveImplementation(fun), arglist);
}

const theGlobalEnvironment = setupEnviroment();

module.exports = {
    theGlobalEnvironment,
    applyPrimitiveFunction
}