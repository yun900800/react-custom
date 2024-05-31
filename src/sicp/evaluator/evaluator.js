
import {
    map,
    error,
    accumulate
} from '../utils/utils';

import {
    head,
    tail
} from '../pair/pair';

import {
    list
} from '../list/list';

import {
    isTaggedList
} from  './evaluator-utils';

import {
    isLiteral,
    literalValue
} from './evaluator-literal';

import {
    makeName,
    isName,
    symbolOfName
} from './evaluator-name';

import {
    isTruthy,
    isConditional,
    conditionalPredict,
    conditionalConsequent,
    conditionalAlternative,
} from './evaluator-conditional';

import {
    isSequence,
    sequenceStatements,
    isEmptySequence,
    isLastStatement,
    firstStatement,
    restStatement
} from './evaluator-sequence';

import {
    isBlock,
    blockBody,
    listOfUnassigned
} from './evaluator-block';

import {
    makeReturnValue,
    isReturnStatement,
    returnExpression
} from './evaluator-return';

import {
    isAssignment,
    assignmentSymbol,
    assignmentValueExpression
} from './evaluator-assignment';

import {
    isFunctionDeclaration,
    isDeclaration,
    declarationSymbol,
    declarationValueExpression,
    makeConstantDeclaration,
    functionDeclarationName,
    functionDeclarationBody,
    functionDeclarationParameters
} from './evaluator-declaration';

import {
    makeApplication,
    isApplication, 
    functionExpression,
    argExpressions
} from './evaluator-application';

import {
    makeLambdaExpression,
    isLambdaExpression,
    lambdaBody,
    lambdaParameterSymbols
} from './evaluator-lambda';

import {
    isUnaryOperatorCombination,
    isOperatorCombination,
    operatorSymbal,
    firstOperand,
    secondOperand
} from './evaluator-combination';

import {
    makeFunction,
    isCompoundFunction,
    functionParameters,
    functionBody,
    functionEnvironment
} from './evaluator-compound';

import {
    extendEnviroment,
    assignSymbolValue,
    lookupSymbalValue
} from './evaluator-enviroment';
 


const listOfValues = (exps, env) => {
    return map(arg => evaluate(arg, env), exps);
}


// 这个函数之上有两个抽象屏障 1. makeName and makeApplication
const operatorCombinationToApplication = component =>{
    const operator = operatorSymbal(component);
    return isUnaryOperatorCombination(component)
           ? makeApplication(makeName(operator),
                              list(firstOperand(component)))
           : makeApplication(makeName(operator),
                              list(firstOperand(component),
                              secondOperand(component)));
}

const evalConditional = (component, env) =>{
    return isTruthy(evaluate(conditionalPredict(component), env))
        ? evaluate(conditionalConsequent(component), env)
        : evaluate(conditionalAlternative(component), env)
}

const evalSequence = (stmts, env) => {
    if (isEmptySequence(stmts)) {
        return undefined;
    } else if (isLastStatement(stmts)) {
        return evaluate(firstStatement(stmts), env);
    } else {
        const first_stmt_value = 
            evaluate(firstStatement(stmts), env);
        if (isReturnValue(first_stmt_value)) {
            return first_stmt_value;
        } else {
            return evalSequence(restStatement(stmts), env);
        }
    }
}


const scanOutDeclarations = (component) => {
    return isSequence(component)
           ? accumulate(append,
                        null,
                        map(scanOutDeclarations,
                            sequenceStatements(component)))
           : isDeclaration(component)
           ? list(declarationSymbol(component))
           : null;
}

const evalBlock = (component,env) =>{
    const body = blockBody(component);
    const locals = scanOutDeclarations(body);
    const unassigneds = listOfUnassigned(locals);
    return evaluate(body, extendEnviroment(locals,
                                             unassigneds, 
                                             env));
}

const evalReturnStatement = (component,env)=>{
    return makeReturnValue(evaluate(returnExpression(component),
                                      env));
}

const evalDeclaration = (component,env)=>{
    assignSymbolValue(
        declarationSymbol(component), 
        evaluate(declarationValueExpression(component), env),
        env);
    return undefined;
}

const evalAssignment = (component,env)=>{
    const value = evaluate(assignmentValueExpression(component),
                           env);
    assignSymbolValue(assignmentSymbol(component), value, env);
    return value;
}

const functionDeclToConstantDecl = component => {
    return makeConstantDeclaration(
        functionDeclarationName(component),
        makeLambdaExpression(
            functionDeclarationParameters(component),
            functionDeclarationBody(component)));
}

const evaluate = (component, env) => {
    return isLiteral(component)
            ? literalValue(component)
            : isName(component)
            ? lookupSymbalValue(symbolOfName(component), env)
            : isApplication(component)
            ? apply(
                evaluate(functionExpression(component), env),
                listOfValues(argExpressions(component), env)
            )
            : isOperatorCombination(component)
            ? evaluate(operatorCombinationToApplication(component),env)
            : isConditional(component)
            ? evalConditional(component,env)
            : isLambdaExpression(component)
            ? makeFunction(
                lambdaParameterSymbols(component),
                lambdaBody(component),
                env
            )
            : isSequence(component)
            ? evalSequence(sequenceStatements(component),env)
            : isBlock(component)
            ? evalBlock(component,env)
            : isReturnStatement(component)
            ? evalReturnStatement(component,env)
            : isFunctionDeclaration(component)
            ? evaluate(functionDeclToConstantDecl(component), env)
            : isDeclaration(component)
            ? evalDeclaration(component, env)
            : isAssignment(component)
            ? evalAssignment(component, env)
            : error(component, "unknown syntax -- evaluate");
}

const isPrimitiveFunction = fun => {
    return isTaggedList(fun, "primitive");
}

const primitiveImplementation = fun => { return head(tail(fun)); }

function applyPrimitiveFunction(fun, arglist) {
    return apply_in_underlying_javascript(
        primitiveImplementation(fun), arglist);
}

const apply = (fun, args) => {
    if(isPrimitiveFunction(fun)){
        return applyPrimitiveFunction(fun, args);
    } else if (isCompoundFunction(fun)) {
        const result = evaluate(functionBody(fun),
            extendEnviroment(
                functionParameters(fun),
                args,
                functionEnvironment(fun)
            )
        );
        return isReturnStatement(result)
            ? returnExpression(result)
            : undefined
    } else {
        error(fun, "unknown function type -- apply");
    }
}

module.exports = {
    evalConditional,
    evaluate,
    apply
}