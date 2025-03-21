import React, {useState,useEffect} from 'react';

// 这个组件本质上是对useState的封装，只是在useState的基础上增加了localStorage的存储功能
// 用法：与useState一样，只是多了一个参数，用于存储在localStorage中的key值
export default function useStickyState(defaultValue, name) {
    // 延迟加载，只有在第一次渲染时才会执行
    const [value, setValue] = useState(() => {
        // 如果是在服务器端渲染，或者浏览器不支持localStorage，则直接返回默认值
        if (
          typeof window === 'undefined' ||
          !window.localStorage
        ) {
          return defaultValue;
        }
    
        const persistedValue =
          window.localStorage.getItem(name);
    
        return persistedValue !== null
          ? JSON.parse(persistedValue)
          : defaultValue;
      });
    
      useEffect(() => {
        window.localStorage.setItem(
          name,
          JSON.stringify(value)
        );
      }, [name, value]);
    
      return [value, setValue];
}