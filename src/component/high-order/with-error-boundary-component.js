import React, { useState } from 'react';

// withErrorBoundary 高阶组件
const withErrorBoundary = (Component)=> {
  return class ErrorBoundaryHOC extends React.Component {
    state = { hasError: false, errorInfo: null };

    // 捕获子组件的错误
    static getDerivedStateFromError(error) {
      return { hasError: true }; // 更新 state 以便显示回退 UI
    }

    // 记录错误日志
    componentDidCatch(error, info) {
      this.setState({ errorInfo: info });
      console.error("Error caught by Error Boundary:", error, info);
    }

    render() {
      if (this.state.hasError) {
        return (
          <div>
            <h1>Something went wrong.</h1>
            <p>{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
          </div>
        ); // 错误捕获后显示备用 UI
      }
      return <Component {...this.props} />; // 如果没有错误，渲染原始组件
    }
  };
}

// 一个会抛出错误的子组件
const ErrorProneComponent = () => {
  const [count, setCount] = useState(0);

  if (count === 3) {
    throw new Error("Oops, something went wrong!");
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// 使用 withErrorBoundary 包装 ErrorProneComponent
const SafeComponent = withErrorBoundary(ErrorProneComponent);

const ErrorApp =  () => {
  return (
    <div>
      <h1>React Error Boundary Example</h1>
      <SafeComponent />
    </div>
  );
}


export default ErrorApp;
