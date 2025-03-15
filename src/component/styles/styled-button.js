import React from "react";
import styled from "styled-components";

// 这个组件包含两部分内容,
// 一个是包含三个默认属性type,disabled, aria-label
// 原始的组件标签是动态的，根据props的输入值而变化
export const StyledButton = styled.button.attrs((props) => ({
    type: props.type || "button",  // 设置 HTML 的 type 属性，默认为 "button"
    disabled: props.disabled || false,  // 处理禁用状态
    "aria-label": props.label || "Styled button", // 设置无障碍标签
}))`
    background-color: ${(props) => (props.disabled ? "#ccc" : props.bg || "#007bff")};
    color: ${(props) => (props.disabled ? "#666" : "#fff")};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    transition: background-color 0.3s ease, transform 0.2s ease;
    
    &:hover {
        background-color: ${(props) => (!props.disabled ? "#0056b3" : "#ccc")};
        transform: ${(props) => (!props.disabled ? "scale(1.05)" : "none")};
    }
`;

// 另一个示例：带默认 href 的 Link 组件
export const StyledLink = styled.a.attrs((props) => ({
    href: props.href || "#", // 默认链接地址
    target: props.newTab ? "_blank" : "_self", // 是否在新标签页打开
    rel: props.newTab ? "noopener noreferrer" : undefined, // 安全性处理
  }))`
    color: ${(props) => props.color || "#007bff"};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  
    &:hover {
      text-decoration: underline;
    }
`;
