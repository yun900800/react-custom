import {
    isTaggedList
} from './evaluator-utils';
import {
    list
} from '../list/list';
describe('evaluator-utils', ()=> {
    it('isTaggedList test',()=>{
        const literal1 = list('literal', 'hello world');
        expect(isTaggedList(literal1,'literal')).toBeTruthy();
        expect(isTaggedList(literal1,'var')).toBeFalsy();
    });
});