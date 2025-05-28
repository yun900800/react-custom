// components/SelectableProductItem.js
import React, { useState, useEffect } from 'react';

function SelectableProductItem({ product, onSelectionChange }) {
  // SelectableProductItem 内部管理自己的选中状态
  const [isSelected, setIsSelected] = useState(product.selected);

  // 监听外部 prop.selected 的变化，保持同步
  useEffect(() => {
    setIsSelected(product.selected);
  }, [product.selected]);

  const handleToggleSelect = () => {
    const newSelectedState = !isSelected;
    setIsSelected(newSelectedState);
    // 通过 onSelectionChange prop 将自身的状态变化通知父组件
    // 这里我们将商品的ID和新的选中状态传回父组件
    onSelectionChange(product.id, newSelectedState);
  };

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '5px',
        backgroundColor: isSelected ? '#e0ffe0' : 'white',
      }}
    >
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={handleToggleSelect}>
        {isSelected ? 'Deselect' : 'Select'}
      </button>
      {/* 可以在这里添加更多与该商品项相关的复杂交互和状态 */}
    </div>
  );
}

export default SelectableProductItem;