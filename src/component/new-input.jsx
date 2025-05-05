import React, { useRef, useState } from 'react'
import './input.css'
import Sparkles from '../sparkle/sparkles'

const Input = ({ id = '', label = '', type = 'text' }) => {
  const [value, handleChange] = useState('');
  const inputRef = useRef('');
  const spanRef = useRef(null); // 用于获取临时 span 元素的引用
  const adjustWidth = (value)=>{
    // 将输入值添加到 span 中，计算其实际宽度
    spanRef.current.textContent = value;
    // 设置宽度为输入值的长度 + 1，用 ch 单位来确保自动适配字符宽度
    if (inputRef.current) {
      inputRef.current.style.width = `${spanRef.current.offsetWidth + 5}px`; 
    }
  }
  return (
    <div className="wrapper">
      <label htmlFor={id}>
        <Sparkles color="green">{label}</Sparkles>
      </label>
      <input
        type={type}
        id={id}
        data-testid={id}
        label={label}
        ref={inputRef} 
        onChange={({ target }) => {
          handleChange(target.value);
          adjustWidth(target.value); // 在每次输入时调整宽度
        }}
        value={value}
  
      />
      {/* 临时的 span 元素，用来计算宽度 */}
      <span
        ref={spanRef}
        style={{
          visibility: 'hidden', // 隐藏 span 元素，但它仍然占位
          whiteSpace: 'pre', // 保持空格和换行符的原始格式
          font: 'inherit', // 使用与 input 相同的字体
        }}
      >
        {value}
      </span>
    </div>
  )
}
export default Input
