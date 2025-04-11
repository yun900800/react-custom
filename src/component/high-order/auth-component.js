import React,{ useState } from "react";
const withAuth = (WrappedComponent) => {
    return function AuthHOC(props) {
        const { isAuthenticated } = props;
    
        if (!isAuthenticated) {
          return <div>Please log in to access this page</div>; // 如果没有认证，显示登录提示
        }
    
        return <WrappedComponent {...props} />; // 如果认证通过，渲染原始组件
    };
}

// 一个需要认证才能访问的组件
const Dashboard = () => {
    return (
      <div>
        <h1>Welcome to the Dashboard!</h1>
        <p>This is a protected page.</p>
      </div>
    );
}

// 使用 withAuth 包装组件
const ProtectedDashboard = withAuth(Dashboard);

const AuthApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <h1>React withAuth Example</h1>
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {isAuthenticated ? 'Log out' : 'Log in'}
      </button>
      <ProtectedDashboard isAuthenticated={isAuthenticated} />
    </div>
  );
}

export default AuthApp;
