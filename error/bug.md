SyntaxError: C:\Users\86135\Desktop\我的demo\react-custom\src\stories\Page.stories.ts: Unexpected token, expected "from" (1:12)

> 1 | import type { Meta, StoryObj } from '@storybook/react';
    |             ^
  2 | import { within, userEvent } from '@storybook/testing-library';
  3 | import { Page } from './Page';
  4 | const meta = ({

## 解决方案
1. 安装npm install --save-dev @babel/preset-typescript  

2. 配置.babelrc中添加 preset :"@babel/preset-typescript"   

## 疑问
1. @babel/preset-typescript 与 ts-loader的区别是什么?怎么选择使用的问题?
