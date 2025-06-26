import React, { useState, useMemo, useCallback } from 'react';
import whyDidYouRender from '@welldone-software/why-did-you-render'; 

// 启用 why-did-you-render 的全局检测
whyDidYouRender(React);

const User = React.memo(({ user }) => {
  console.log('Rendering User:', user.name);
  return <div>{user.name}</div>;
});

User.whyDidYouRender = true;

function UserList({ users, filter }) {
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter(user => user.name.includes(filter));
  }, [users, filter]);

  return (
    <div>
      <h2>User List</h2>
      {filteredUsers.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

function PerformanceApp() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Edward' },
  ]);
  const [filter, setFilter] = useState('');

  const handleFilterChange = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter users by name"
      />
      <UserList users={users} filter={filter} />
    </div>
  );
}


function PromoteApp() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Edward' },
  ]);
  const [filter, setFilter] = useState('');

  const filteredUsers = useMemo(() => {
    return users.filter(user => user.name.includes(filter));
  }, [users, filter]);

  const handleFilterChange = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter users by name"
      />
      <UserList users={filteredUsers} filter={filter} />
    </div>
  );
}

export default PerformanceApp;
export {PromoteApp};
