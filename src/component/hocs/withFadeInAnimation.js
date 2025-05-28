// hocs/withFadeInAnimation.js
import React, { useState, useEffect, useRef } from 'react';

/**
 * withFadeInAnimation HOC
 * 为包裹的组件添加渐入动画效果。
 *
 * @param {React.ComponentType} WrappedComponent - 被包裹的 React 组件
 * @returns {React.ComponentType} - 返回一个新的组件，带有渐入动画
 */
function withFadeInAnimation(WrappedComponent) {
  // 返回一个新的函数组件
  return function WithAnimation(props) {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
      // 当组件挂载时，设置 isVisible 为 true，触发渐入动画
      setIsVisible(true);

      // 可选：如果希望组件在卸载时有渐出动画，可以添加一个清理函数
      // 这里为了简单，只实现渐入
      return () => {
        // 在实际应用中，如果需要渐出，可能需要延迟卸载，或者使用更复杂的动画库
        // 例如：setIsVisible(false); setTimeout(() => /* 实际卸载逻辑 */, animationDuration);
      };
    }, []);

    const animationClass = isVisible ? 'fade-in-active' : 'fade-in-initial';

    // 渲染被包裹的组件，并将所有 props 传递下去
    // 同时注入一个 ref，如果 WrappedComponent 接受的话（forwardRef）
    // 或者直接将动画类名注入到最外层元素（如果WrappedComponent有一个根DOM元素）
    return (
      <div ref={componentRef} className={`fade-animation-container ${animationClass}`}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withFadeInAnimation;