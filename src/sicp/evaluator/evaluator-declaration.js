import { head, tail } from '../pair/pair'

import { list } from '../list/list'
import { isTaggedList } from './evaluator-utils'

import { symbalOfName } from './evaluator-name'

const makeConstantDeclaration = (name, valueExpression) => {
  return list('constant_declaration', name, valueExpression)
}

const makeVariableDeclaration = (name, valueExpression) => {
  return list('variable_declaration', name, valueExpression)
}

const makeFunctionDeclaration = (name, block, ...parameters) => {
  return list('function_declaration', name, list(parameters), block)
}

const isFunctionDeclaration = (component) => {
  return isTaggedList(component, 'function_declaration')
}

const isConstantDeclaration = (component) => {
  return isTaggedList(component, 'constant_declaration')
}

const isVariableDeclaration = (component) => {
  return isTaggedList(component, 'variable_declaration')
}

const isDeclaration = (component) => {
  return (
    isTaggedList(component, 'constant_declaration') ||
    isTaggedList(component, 'variable_declaration') ||
    isTaggedList(component, 'function_declaration')
  )
}

const declarationSymbol = (component) => {
  return symbalOfName(head(tail(component)))
}
const declarationValueExpression = (component) => {
  return head(tail(tail(component)))
}

const functionDeclarationName = (component) => {
  return symbalOfName(head(tail(component)))
}

const functionDeclarationParameters = (component) => {
  return head(tail(tail(component)))
}

const functionDeclarationBody = (component) => {
  return head(tail(tail(tail(component))))
}

module.exports = {
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
  functionDeclarationParameters,
}
