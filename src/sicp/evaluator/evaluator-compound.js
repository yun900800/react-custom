import {
    head,
    tail
} from '../pair/pair';

import {
    list,
    listRef
} from '../list/list';
import {
    isTaggedList
} from  './evaluator-utils';

const makeFunction = (parameters, body, env) =>{
    return list('compound_function',parameters, body, env);
}

const isCompoundFunction = (f) => {
    return isTaggedList(f, "compound_function");
}
const functionParameters = (f) => { return listRef(f, 1); }

const functionBody = (f) => { return listRef(f, 2); }

const functionEnvironment = (f) => { return listRef(f, 3); }

module.exports = {
    makeFunction,
    isCompoundFunction,
    functionParameters,
    functionBody,
    functionEnvironment
}