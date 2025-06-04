import React from 'react';
import withData from './withData';
// 1. 定义一个需要数据的展示组件
const UserList = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <p>正在加载用户数据...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>加载失败: {error.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>没有用户数据。</p>;
  }

  return (
    <div>
      <h2>用户列表</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

// 2. 定义一个数据获取函数（模拟 API 调用）
const fetchUsers = async () => {
  console.log("Fetching users...");
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1000));
  const users = [
    { id: 1, name: '张三', email: 'zhangsan@example.com' },
    { id: 2, name: '李四', email: 'lisi@example.com' },
    { id: 3, name: '王五', email: 'wangwu@example.com' },
  ];
  return users;
};

// 模拟一个会出错的数据获取函数
const fetchUsersWithError = async () => {
  console.log("Fetching users with error...");
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error("网络请求失败，请稍后再试！");
};

// 3. 使用 withData HOC 包裹 UserList 组件
const UsersWithData = withData(fetchUsers, [])(UserList);
const UsersWithError = withData(fetchUsersWithError, [])(UserList);

// 4. 在父组件中使用被包裹的组件
const WithDataApp = () => {
  return (
    <div>
      <h1>使用 `withData` HOC 的例子</h1>
      <UsersWithData />
      <hr />
      <h2>错误处理示例:</h2>
      <UsersWithError />
    </div>
  );
};

export default WithDataApp;