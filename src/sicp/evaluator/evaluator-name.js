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

//  这个模块主要定义了程序中的symbol名称
const isName = component => {
    return isTaggedList(component, "name");
}

const makeName = symbal => {
    return list('name',symbal);
}

const symbolOfName = component => {
    return head(tail(component));
}

module.exports = {
    isName,
    makeName,
    symbolOfName
}