import {
    pair,
    isPair,
    head,
    tail
} from '../pair/pair';
const attachTag = (typeTag, contents) => {
    return pair(typeTag,contents);
}

const typeTag = datum => {
    return isPair(datum) ? head(datum): error(datum, "bad tagged datum -- type_tag");
}

const contents = datum => {
    return isPair(datum) ? tail(datum): error(datum, "bad tagged datum -- contents");
}

const isRectangular = z => {
    return typeTag(z) === 'rectangular';
}

const isPolar = z => {
    return typeTag(z) === 'polar';
}

module.exports = {
    attachTag,
    typeTag,
    contents,
    isRectangular,
    isPolar
}