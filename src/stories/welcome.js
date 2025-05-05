import React from "react";
import { Provider } from 'react-redux'
import store from '../lib/store'

import TaskList from './TaskList'
import '../index.css'
export const Welcome = () => {
  console.log('这个组件载入index.css'); 
  return (
    <div className="task-container">
      <Provider store={store}>
        <TaskList></TaskList>
      </Provider>
    </div>
  )
}