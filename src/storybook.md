# storybook学习记录

1. .storybook/main.js 配置故事扫描的目录:
   `   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
   stories: ['../src/components/**/*.stories.@(js|jsx)'],`
2. .storybook/preview.js 配置一些css文件样式.

3. Task.tsx 包含三个属性,一个是否选中的图标,一个文本,还有一个图标

4. 理解复合组件如何构成,以及如何传递参数来进行各种状态测试

5. 为什么要为组件的输入定义sharp?以及装饰器在storybook中的作用?设计组件的时候如何考虑边缘情况和测试边缘情况
   比如在TaskList中的loading和empty的情况.
