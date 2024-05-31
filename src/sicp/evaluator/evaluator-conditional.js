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

const makeConditional = (predicate, consequentBlock, alternativeBlock) => {
    return  list('conditional_statement', predicate, consequentBlock,alternativeBlock);
}

const isTruthy = value => {
    return value === true;
}

const isConditional = component =>{
    return isTaggedList(component,'conditional_statement') 
        || isTaggedList(component,'conditional_expression')
}

const conditionalPredict = component => {
    return head(tail(component))
}

const conditionalConsequent = component => {
    return head(tail(tail(component)))
}

const conditionalAlternative = component => {
    return head(tail(tail(tail(component))))
}

module.exports ={
    makeConditional,
    isTruthy,
    isConditional,
    conditionalPredict,
    conditionalConsequent,
    conditionalAlternative,
}

