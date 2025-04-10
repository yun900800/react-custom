// 引入react和react-dom库文件
import React from 'react'
// 引入App.js文件
// import App from './App.js';
import './app.css'
import RouterApp from './router.js';
import { Provider } from 'react-redux'
import store from './lib/store'
import { createRoot } from 'react-dom/client'
const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

root.render(
    <Provider store={store}>
        <RouterApp />
    </Provider>

)
