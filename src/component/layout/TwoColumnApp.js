import React from 'react';
import TwoColumnLayout from './TwoColumnLayout';
import Panel from './Panel'; // 引入 Panel 组件
function TwoColumnApp() {
  return (
    <div style={{ maxWidth: '800px', margin: '20px auto',backgroundColor:  `var(--color-pale-cyan-white)`, padding: '20px', borderRadius: '8px' }}>
      <h1>Children Prop Examples</h1>

      {/* ... Previous Panel examples ... */}

      <h2>Complex Layout Example:</h2>
      <TwoColumnLayout
        header={<h2>Application Header</h2>}
        left={
          <div>
            <h3>Navigation</h3>
            <ul>
              <li>Dashboard</li>
              <li>Settings</li>
              <li>Profile</li>
            </ul>
          </div>
        }
        footer={<p>Copyright &copy; 2023</p>}
      >
        {/* 这是作为 children 传入右侧主内容区的内容 */}
        <h3>Welcome to your Dashboard!</h3>
        <p>Here you can see an overview of your activities.</p>
        <Panel title="Quick Stats">
          <p>Users: 1,234</p>
          <p>Orders: 567</p>
        </Panel>
      </TwoColumnLayout>
    </div>
  );
}

export default TwoColumnApp;