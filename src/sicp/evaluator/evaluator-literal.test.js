import {
    isLiteral,
    literalValue,
    makeLiteral,
} from './evaluator-literal';
import {
    list
} from '../list/list';

describe('evaluator-literal test',()=>{
    it('isLiteral and literalValue  test',()=>{
        let literal1 = list('literal', 'hello world');
        expect(isLiteral(literal1)).toBeTruthy();
        expect(literalValue(literal1)).toEqual('hello world');
        literal1 = list('literal', 5);
        expect(isLiteral(literal1)).toBeTruthy();
        expect(literalValue(literal1)).toEqual(5);
        literal1 = list('literal', null);
        expect(isLiteral(literal1)).toBeTruthy();
        expect(literalValue(literal1)).toBeNull();
    
    });

    it('makeLiteral test',()=>{
        const literal1 = makeLiteral('literal test');
        expect(isLiteral(literal1)).toBeTruthy();
        expect(literalValue(literal1)).toEqual('literal test');
    });
});