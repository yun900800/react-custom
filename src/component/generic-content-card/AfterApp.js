import React from 'react';
import ArticleCardRefactored from './ArticleCardRefactored';
import ProductCardRefactored from './ProductCardRefactored';
import Card from './Card'; // 也可以直接使用Card组件

function AfterApp() {
  const handleReadMore = () => alert('Reading more about the article!');
  const handleAddToCart = () => alert('Product added to cart!');
  const handleSettingsClick = () => alert('Opening settings!');

  return (
    <div>
      <h1>My Application (Abstracted)</h1>

      {/* 使用基于Card组件构建的ArticleCard */}
      <ArticleCardRefactored
        title="Breaking News: React Updates"
        content="React just released a new version with exciting features and performance improvements, making your development experience even smoother. Developers are excited about the new hooks and context API updates."
        onReadMore={handleReadMore}
      />

      {/* 使用基于Card组件构建的ProductCard */}
      <ProductCardRefactored
        name="Wireless Mouse Pro"
        description="Experience unparalleled precision and comfort with this ergonomic wireless mouse. Perfect for gaming and professional work."
        price={25.99}
        onAddToCart={handleAddToCart}
      />

      {/* 直接使用通用Card组件创建新的卡片类型，无需额外创建组件文件 */}
      <Card
        title="Quick Settings"
        children={
          <p>Adjust your application preferences here.</p>
        }
        footer={
          <button onClick={handleSettingsClick}>Open Settings</button>
        }
        className="settings-card" // 也可以添加自定义类名
      />

      <Card
        children={
          <p>This is a card without a title or footer, just some plain content.</p>
        }
      />
    </div>
  );
}

export default AfterApp;