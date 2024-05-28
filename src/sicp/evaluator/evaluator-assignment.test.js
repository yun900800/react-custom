import {
    makeAssignment,
    isAssignment,
    assignmentSymbol,
    assignmentValueExpression
} from './evaluator-assignment';

describe('evaluator-assignment test',()=>{
    it('makeAssignment test',()=>{
        const assignment = makeAssignment('name','hekai');
        expect(isAssignment(assignment)).toBeTruthy();
        expect(assignmentSymbol(assignment)).toEqual('name');
        expect(assignmentValueExpression(assignment)).toEqual('hekai');
    });
});