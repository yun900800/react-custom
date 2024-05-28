import {
    makeConstantDeclaration,
    makeVariableDeclaration,
    makeFunctionDeclaration,
    isConstantDeclaration,
    isVariableDeclaration,
    isFunctionDeclaration,
    isDeclaration,
    declarationSymbol,
    declarationValueExpression,
    functionDeclarationName,
    functionDeclarationBody,
    functionDeclarationParameters
} from './evaluator-declaration';

describe('evaluator-declaration test',()=>{
    it('makeConstantDeclaration test',()=>{
        const constDeclarations = makeConstantDeclaration('name','hekia');
        expect(isConstantDeclaration(constDeclarations)).toBeTruthy();
    });
});