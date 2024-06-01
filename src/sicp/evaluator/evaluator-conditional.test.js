import {
    makeExpressionConditional,
    makeStatamentConditional,
    isTruthy,
    isConditional,
    conditionalPredict,
    conditionalConsequent,
    conditionalAlternative,
} from './evaluator-conditional';

describe('evaluator-conditional test',()=>{
    it('makeExpressionConditional test',()=>{
        const conditional = makeExpressionConditional('5>3',5,3);
        expect(isConditional(conditional)).toBeTruthy();
        expect(conditionalPredict(conditional)).toEqual('5>3');
        expect(conditionalConsequent(conditional)).toEqual(5);
        expect(conditionalAlternative(conditional)).toEqual(3);
    });

    it('makeStatamentConditional test',()=>{
        const conditional = makeStatamentConditional('5>3',5,3);
        expect(isConditional(conditional)).toBeTruthy();
        expect(conditionalPredict(conditional)).toEqual('5>3');
        expect(conditionalConsequent(conditional)).toEqual(5);
        expect(conditionalAlternative(conditional)).toEqual(3);
    });
});