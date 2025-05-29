import React, { useState } from 'react';

// 1. 布局组件定义
const TwoColumnLayoutNew = ({ header, sidebar, mainContent, footer }) => {
  // 布局组件内部可能有一些共享数据或状态
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 布局组件提供的数据，可以通过函数参数传递给子组件
  const layoutContext = {
    isSidebarOpen,
    toggleSidebar,
    layoutName: "Dynamic Two Column Layout"
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', border: '1px solid #ccc', margin: '10px' }}>
      {/* 渲染头部区域 */}
      <header style={{ padding: '10px', background: '#f0f0f0', borderBottom: '1px solid #eee' }}>
        {header(layoutContext)} {/* 调用传入的 header 函数，并将 layoutContext 传给它 */}
      </header>

      <div style={{ display: 'flex', flexGrow: 1 }}>
        {/* 渲染侧边栏区域 */}
        {isSidebarOpen && (
          <aside style={{ width: '200px', padding: '10px', background: '#e0e0e0', borderRight: '1px solid #eee' }}>
            {sidebar(layoutContext)} {/* 调用传入的 sidebar 函数 */}
          </aside>
        )}

        {/* 渲染主内容区域 */}
        <main style={{ flexGrow: 1, padding: '10px', background: '#fff' }}>
          {mainContent(layoutContext)} {/* 调用传入的 mainContent 函数 */}
        </main>
      </div>

      {/* 渲染底部区域 */}
      <footer style={{ padding: '10px', background: '#f0f0f0', borderTop: '1px solid #eee' }}>
        {footer(layoutContext)} {/* 调用传入的 footer 函数 */}
      </footer>
    </div>
  );
};

export default TwoColumnLayoutNew;
