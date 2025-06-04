// 引入react和react-dom库文件
import React from 'react'
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
