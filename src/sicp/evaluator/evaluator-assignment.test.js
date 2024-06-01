import {
    makeAssignment,
    isAssignment,
    assignmentSymbol,
    assignmentValueExpression
} from './evaluator-assignment';

import {
    makeName
} from './evaluator-name';

describe('evaluator-assignment test',()=>{
    it('makeAssignment test',()=>{
        const assignment = makeAssignment(makeName('name'),'hekai');
        expect(isAssignment(assignment)).toBeTruthy();
        expect(assignmentSymbol(assignment)).toEqual('name');
        expect(assignmentValueExpression(assignment)).toEqual('hekai');
    });
});