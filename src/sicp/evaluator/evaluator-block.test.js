import {
    makeBlock,
    isBlock,
    blockBody,
    listOfUnassigned
} from './evaluator-block';
describe('evaluator-block test',()=>{
    it('makeBlock test',()=>{
        const block = makeBlock('nice');
        expect(isBlock(block)).toBeTruthy();
        expect(blockBody(block)).toEqual(['nice']);
    });

});