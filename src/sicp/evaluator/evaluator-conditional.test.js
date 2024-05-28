import {
    makeConditional,
    isTruthy,
    isConditional,
    conditionalPredict,
    conditionalConsequent,
    conditionalAlternative,
} from './evaluator-conditional';

describe('evaluator-conditional test',()=>{
    it('isTruthy test',()=>{
        expect(isTruthy(true)).toBeTruthy();
    });
});