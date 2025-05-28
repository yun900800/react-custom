import React, { useState, useEffect, useRef } from 'react';

// 帮助函数：debounce
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 自定义 Hook：useInnerWidth (带防抖)
function useInnerWidth(delay = 200) { // 默认防抖延迟200ms
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const debouncedSetInnerWidthRef = useRef(null); // 使用ref来保存debounced函数

  // 在组件首次渲染时或delay变化时，创建debounced函数
  useEffect(() => {
    // 创建一个防抖版本的setInnerWidth
    // 这里的debounce会捕获并更新innerWidth状态
    debouncedSetInnerWidthRef.current = debounce((width) => {
      setInnerWidth(width);
    }, delay);
  }, [delay]); // 依赖delay，如果delay变化，重新创建debounced函数

  useEffect(() => {
    const handleResize = () => {
      // 调用防抖版本的设置函数
      console.log('Window resized, current width:', window.innerWidth);
      if (debouncedSetInnerWidthRef.current) {
        debouncedSetInnerWidthRef.current(window.innerWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      // 清理防抖的定时器，确保组件卸载时没有待执行的debounce
      if (debouncedSetInnerWidthRef.current) {
        clearTimeout(debouncedSetInnerWidthRef.current.timeoutId); // 假设debounce函数返回了timeoutId
      }
    };
  }, []); // 空依赖数组，只在挂载和卸载时运行

  return innerWidth;
}

// 示例组件，使用自定义 Hook
function MyComponent() {
  const innerWidth = useInnerWidth(300); // 传递防抖延迟，例如300ms

  return (
    <div>
      <h1>Current Window Inner Width: {innerWidth}px</h1>
      <p>This component updates after 300ms of no resizing activity.</p>
    </div>
  );
}

// 另一个示例组件
function AnotherComponent() {
  const innerWidth = useInnerWidth(); // 使用默认的200ms防抖

  return (
    <div style={{ border: '1px solid blue', padding: '20px' }}>
      <h2>Another Component</h2>
      <p>Inner width for this component: {innerWidth}px</p>
      {innerWidth < 768 ? (
        <p>You are on a small screen!</p>
      ) : (
        <p>You are on a large screen!</p>
      )}
    </div>
  );
}

// 在 App 中使用这些组件
function UseEffectApp() {
  return (
    <div>
      <MyComponent />
      <hr />
      <AnotherComponent />
    </div>
  );
}

export default UseEffectApp;