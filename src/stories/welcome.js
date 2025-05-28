import React from "react";
import { Provider } from 'react-redux'
import store from '../lib/store'

import TaskList from './TaskList'
import '../index.css';
import HocApp from "../component/hocs/HocApp";
import ConsumerApp from "../component/render-props-pattern/ConsumerApp";
import ExclusiveStateLiftApp from "../component/exclusive-state-lift/exclusive-state-lift";
import BeforeApp from "../component/generic-content-card/BeforeApp";
import AfterApp from "../component/generic-content-card/AfterApp";
import PanelApp from "../component/layout/PanelApp";
import TwoColumnApp from "../component/layout/TwoColumnApp";
import MouseTrackerApp from "../component/layout/MouseTrackerApp";
import UseEffectApp from "../component/layout/useInnerWidth";
export const Welcome = () => {
  console.log('这个组件载入index.css'); 
  return (
    <>
      <div className="task-container">
        <Provider store={store}>
          <TaskList></TaskList>
        </Provider>
        <HocApp />
        <ConsumerApp />
        <ExclusiveStateLiftApp />
        <BeforeApp />
        <AfterApp />
      </div>
      <PanelApp />
      <TwoColumnApp />
      <MouseTrackerApp />
      <UseEffectApp />
    </>
  )
}