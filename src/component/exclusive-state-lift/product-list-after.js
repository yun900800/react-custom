// components/ProductListAfter.js
import React, { useState } from 'react';
import SelectableProductItem from './selectable-product-item'; // 导入优化后的子组件

function ProductListAfter() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 1200, selected: false },
    { id: 2, name: 'Mouse', price: 25, selected: false },
    { id: 3, name: 'Keyboard', price: 75, selected: false },
  ]);

  // 父组件的 handler 变得更通用，因为它只接收子组件告知的ID和新状态
  const handleProductSelectionChange = (productId, newSelectedState) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, selected: newSelectedState } : product
      )
    );
  };

  return (
    <div>
      <h2>Product List (After Optimization)</h2>
      {products.map(product => (
        <SelectableProductItem
          key={product.id}
          product={product}
          onSelectionChange={handleProductSelectionChange} // 传递一个通用的 onChange handler
        />
      ))}
      <p>
        Total Selected: {products.filter(p => p.selected).length}
      </p>
    </div>
  );
}

export default ProductListAfter;