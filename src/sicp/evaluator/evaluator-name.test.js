import {
    isName,
    makeName,
    symbolOfName
} from './evaluator-name';
describe('evaluator-name test',()=>{
    it('makeName test',()=>{
        const symbal1 = makeName('variable');
        expect(isName(symbal1));
        expect(symbolOfName(symbal1)).toEqual('variable');
    });
});