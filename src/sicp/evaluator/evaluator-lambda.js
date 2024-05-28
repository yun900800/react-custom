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

import {
    symbolOfName
} from './evaluator-name';

const makeLambdaExpression = (parameters, body) => {
    return list("lambda_expression", parameters, body);
}

const isLambdaExpression = component => {
    return isTaggedList(component,'lambda_expression');
}

const lambdaBody = component => {
    return head(tail(tail(component)));
}

const lambdaParameters = component => {
    return head(tail(component));
}

const lambdaParameterSymbols = (component) => {
    return map(symbolOfName, head(tail(component)));
}

module.exports ={
    makeLambdaExpression,
    isLambdaExpression,
    lambdaBody,
    lambdaParameterSymbols,
    lambdaParameters
}

