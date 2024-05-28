import {
    head,
    tail
} from '../pair/pair';

import {
    list
} from '../list/list';
import {
    isTaggedList
} from  './evaluator-utils';

const makeSequence = (...stmts) => {
    return list('sequence',list(stmts));
}

const isSequence = component =>{
    return isTaggedList(component,'sequence')
}

const sequenceStatements = component =>{
    return head(tail(component))
}

const isEmptySequence = stmts => {
    return null === stmts;
}

const firstStatement = stmts => {
    return head(stmts)
}

const restStatement = stmts => {
    return tail(stmts);
}

const isLastStatement = stmts => {
    return null === head(tail(stmts));
}

module.exports = {
    makeSequence,
    isSequence,
    sequenceStatements,
    isEmptySequence,
    isLastStatement,
    firstStatement,
    restStatement
}