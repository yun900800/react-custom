import React from 'react';
import { Route, Routes ,Navigate,
    Outlet  } from 'react-router-dom';
import { routesConfig } from './routes-config.js';

const ProtectedRoute = ({isAllowed, redirectPath = '/login', children}) =>{
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
}

const AppRoutes = ({ user }) => {
    return (
      <Routes>
        {routesConfig.map(({ path, element, isProtected, layout: Layout, permissions }, index) => {
          const routeElement = Layout ? <Layout>{element}</Layout> : element;
  
          if (isProtected) {
            return (
              <Route
                key={index}
                path={path}
                element={
                  <ProtectedRoute
                    isAllowed={
                      !!user &&
                      (!permissions ||
                        permissions.every((perm) =>
                          perm.startsWith('!')
                            ? !user?.permissions?.includes(perm.slice(1))
                            : user?.permissions?.includes(perm)
                        ))
                    }
                  >
                    {routeElement}
                  </ProtectedRoute>
                }
              />
            );
          }
  
          return <Route key={index} path={path} element={routeElement} />;
        })}
      </Routes>
    );
};

export default AppRoutes;