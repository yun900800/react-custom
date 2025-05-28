// 一个组件（父组件）通过一个 prop（这个 prop 是一个函数，
// 通常命名为 render 或其他能描述其作用的名称）来决定其子组件应该渲染什么。
// 这个函数在父组件内部被调用，并返回 JSX。
import React, { useState, useEffect } from 'react';

/**
 * DataProvider 组件
 * 负责从API获取数据，并通过render prop将数据传递给子组件。
 *
 * @param {object} props
 * @param {string} props.url - 要获取数据的API URL
 * @param {function} props.render - 一个函数，接收获取到的数据作为参数，并返回要渲染的JSX。
 */
function DataProvider({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (e) {
        console.error("Error fetching data:", e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // 当URL变化时重新获取数据

  // 调用 render prop 函数，并将状态（data, loading, error）作为参数传递
  // render prop 负责根据这些状态返回相应的JSX
  return render({ data, loading, error });
}

export default DataProvider;