// Before Optimization: Parent component handles individual item selection
import React, { useState } from 'react';

function ProductListBefore() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 1200, selected: false },
    { id: 2, name: 'Mouse', price: 25, selected: false },
    { id: 3, name: 'Keyboard', price: 75, selected: false },
  ]);

  const handleToggleSelect = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, selected: !product.selected } : product
      )
    );
  };

  return (
    <div>
      <h2>Product List (Before Optimization)</h2>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid gray', padding: '10px', margin: '5px', backgroundColor: product.selected ? '#e0ffe0' : 'white' }}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleToggleSelect(product.id)}>
            {product.selected ? 'Deselect' : 'Select'}
          </button>
        </div>
      ))}
      <p>
        Total Selected: {products.filter(p => p.selected).length}
      </p>
    </div>
  );
}

export default ProductListBefore;