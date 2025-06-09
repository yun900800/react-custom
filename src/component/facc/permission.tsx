import React from 'react';
const Permission = ({ role, children }) => {
  const roles = {
    admin: ['view', 'edit', 'delete'],
    guest: ['view'],
  };

  const can = permission => roles[role]?.includes(permission);

  return children(can);
};
export default Permission;