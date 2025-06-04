import React, { Component } from 'react';

/**
 * withData 高阶组件
 * @param {function} fetchDataFunc - 一个异步函数，用于实际的数据获取，应返回 Promise。
 * @param {object} initialData - 初始数据，当数据尚未加载时显示。
 * @returns {function} 一个接收组件并返回新组件的函数。
 */
function withData(fetchDataFunc, initialData = {}) {
  return function WithDataComponent(WrappedComponent) {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data: initialData,
          isLoading: true,
          error: null,
        };
      }

      componentDidMount() {
        this.fetchData();
      }

      async fetchData() {
        this.setState({ isLoading: true, error: null });
        try {
          const data = await fetchDataFunc(this.props); // 将父组件的 props 传递给 fetchDataFunc
          this.setState({ data, isLoading: false });
        } catch (error) {
          this.setState({ error, isLoading: false });
          console.error("Failed to fetch data:", error);
        }
      }

      render() {
        const { data, isLoading, error } = this.state;
        return (
          <WrappedComponent
            data={data}
            isLoading={isLoading}
            error={error}
            refetchData={this.fetchData} // 允许被包裹组件重新获取数据
            {...this.props} // 传递原始组件的所有 props
          />
        );
      }
    };
  };
}
export default withData;