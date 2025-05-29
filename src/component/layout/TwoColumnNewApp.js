import React, {useState} from "react";
import TwoColumnLayoutNew from "./TwoColumnLayoutNew"; // 引入新的布局组件
const TwoColumnNewApp = () => {
  return (
    <TwoColumnLayoutNew
      // header prop 是一个函数
      header={({ layoutName, toggleSidebar }) => (
        <>
          <h2>{layoutName}</h2>
          <button onClick={toggleSidebar}>Toggle Sidebar</button>
        </>
      )}

      // sidebar prop 是一个函数
      sidebar={({ isSidebarOpen }) => (
        <>
          <h3>Sidebar Menu</h3>
          <p>Status: {isSidebarOpen ? 'Open' : 'Closed'}</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </>
      )}

      // mainContent prop 是一个函数
      mainContent={({ layoutName, isSidebarOpen }) => (
        <>
          <h1>Welcome to the Main Content</h1>
          <p>This content is part of the {layoutName}.</p>
          <p>Sidebar is currently {isSidebarOpen ? 'visible' : 'hidden'}.</p>
          <p>You can put any dynamic components here.</p>
          <MyDynamicComponent /> {/* 可以嵌套任何其他组件 */}
        </>
      )}

      // footer prop 是一个函数
      footer={({ layoutName }) => (
        <p>&copy; 2023 {layoutName}. All rights reserved.</p>
      )}
    />
  );
};

// 只是一个普通的组件，用于演示嵌套
const MyDynamicComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Dynamic Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default TwoColumnNewApp;