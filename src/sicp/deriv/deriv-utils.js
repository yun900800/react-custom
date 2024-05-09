import {
    isList
} from '../list/list'
import { 
    head 
} from '../pair/pair';
const isString = value => typeof value === 'string';
const isNumber = value => typeof value === 'number';
const isInteger = value =>!isNaN(value);
const isVariable = value => isString(value);
const isSameVariable = (val1, val2) => isVariable(val1) && isVariable(val2) && val1 === val2;
const isSum = value => isList(value) && head(value)==='+';
const isProduct = value => isList(value) && head(value)==='*';
const isExponentiation = value => isList(value) && head(value)==='**';
module.exports = {
    isString,
    isNumber,
    isVariable,
    isSameVariable,
    isSum,
    isProduct,
    isExponentiation,
    isInteger
}