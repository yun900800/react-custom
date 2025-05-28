// components/Card.js
import React from 'react';

// Card组件的props提供了高度的灵活性，让父组件来决定内部内容和操作
function Card({
  title,       // 标题（可选）
  children,    // 卡片的主要内容区域，可以是任何JSX
  footer,      // 底部区域，例如操作按钮组、链接等（可选）
  style,       // 允许父组件传入额外的样式
  className,   // 允许父组件传入额外的CSS类名
}) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '15px',
        margin: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        ...style, // 合并父组件传入的样式
      }}
      className={className}
    >
      {title && <h2 style={{ marginBottom: '10px', color: '#333' }}>{title}</h2>}
      <div className="card-content" style={{ marginBottom: title || footer ? '15px' : '0' }}>
        {children} {/* 核心：通过children prop接受任何内容 */}
      </div>
      {footer && (
        <div className="card-footer" style={{ borderTop: '1px solid #eee', paddingTop: '10px' }}>
          {footer} {/* 核心：通过footer prop接受任何JSX作为底部内容 */}
        </div>
      )}
    </div>
  );
}

export default Card;