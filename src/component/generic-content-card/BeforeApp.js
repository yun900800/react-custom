import React from 'react';
import ArticleCard from './ArticleCard';
import ProductCard from './ProductCard';

function BeforeApp() {
  const handleReadMore = () => alert('Reading more about the article!');
  const handleAddToCart = () => alert('Product added to cart!');

  return (
    <div>
      <h1>My Application</h1>
      <ArticleCard
        title="Breaking News: React Updates"
        content="React just released a new version with exciting features and performance improvements..."
        onReadMore={handleReadMore}
      />
      <ProductCard
        name="Wireless Mouse"
        description="Ergonomic design with silent clicks and long battery life."
        price={25.99}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default BeforeApp;