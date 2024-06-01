import { head, tail } from '../pair/pair'

import { list } from '../list/list'
import { isTaggedList } from './evaluator-utils'

import { symbolOfName } from './evaluator-name';

const makeAssignment = (name, expression) => {
  return list('assignment', name, expression)
}

const isAssignment = (component) => {
  return isTaggedList(component, 'assignment')
}

const assignmentSymbol = (component) => {
  return symbolOfName(head(tail(component)))
}

const assignmentValueExpression = (component) => {
  return head(tail(tail(component)))
}

module.exports = {
  makeAssignment,
  isAssignment,
  assignmentSymbol,
  assignmentValueExpression,
}
