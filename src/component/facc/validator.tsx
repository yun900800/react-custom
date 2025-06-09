import React from 'react';
const Validator = ({ value, rules, children }) => {
  const errors = rules
    .map(rule => rule(value))
    .filter(Boolean);

  return children({ isValid: errors.length === 0, errors });
};
export default Validator;