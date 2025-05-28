// App.js 或某个父组件
import React from 'react';
import DataProvider from './DataProvider';

function ConsumerApp() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Render Props Pattern Example</h1>

      <h2>User List:</h2>
      <DataProvider
        url="https://jsonplaceholder.typicode.com/users" // 假设这是一个用户API
        render={({ data, loading, error }) => { // 这里的函数就是render prop
          if (loading) {
            return <p>Loading users...</p>;
          }
          if (error) {
            return <p style={{ color: 'red' }}>Error: {error.message}</p>;
          }
          if (!data) {
            return <p>No user data available.</p>;
          }
          return (
            <ul>
              {data.map(user => (
                <li key={user.id}>
                  <strong>{user.name}</strong> ({user.email})
                </li>
              ))}
            </ul>
          );
        }}
      />

      <hr style={{ margin: '30px 0' }} />

      <h2>First User Profile Card:</h2>
      <DataProvider
        url="https://jsonplaceholder.typicode.com/users/1" // 假设获取第一个用户
        render={({ data, loading, error }) => { // 另一个render prop的实现
          if (loading) {
            return <p>Loading user profile...</p>;
          }
          if (error) {
            return <p style={{ color: 'red' }}>Error: {error.message}</p>;
          }
          if (!data) {
            return <p>No profile data available.</p>;
          }
          return (
            <div style={{ border: '1px solid #007bff', padding: '15px', borderRadius: '8px', maxWidth: '300px', margin: '0 auto' }}>
              <h3>{data.name}</h3>
              <p>Email: {data.email}</p>
              <p>Phone: {data.phone}</p>
              <p>Website: {data.website}</p>
              <p>Company: {data.company.name}</p>
            </div>
          );
        }}
      />
    </div>
  );
}

export default ConsumerApp;