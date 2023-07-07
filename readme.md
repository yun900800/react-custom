# git 操作信息  
1. git rm -r --cached node_modules  
2. git commit -m '移除node_modules文件夹'  
3. git remote add origin https://github.com/repo.git  
4. git push origin master  

# 增加了一个jest用于测试react组件的环境
1. npm i -D @testing-library/react @testing-library/jest-dom jest-environment-jsdom
2. 在项目根目录下创建jest.config.js  
```
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
    testEnvironment: "jsdom"
};
```
3. 在项目的根目录下创建setUpTests.js  
```
import '@testing-library/jest-dom/extend-expect';
```
4. 在package.json 增加脚本  
```
"scripts": {
    "test" : "jest"
}
```
