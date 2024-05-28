
import {
    isPair,
    head
} from '../pair/pair';
const isTaggedList = (component, theTag) => {
    return isPair(component) && head(component) === theTag;
}

module.exports = {
    isTaggedList
}