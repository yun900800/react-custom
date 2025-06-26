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
import TwoColumnNewApp from "../component/layout/TwoColumnNewApp";
import ThemeContextApp from "../component/data-share/context/ThemeContextApp"; 
import ReduxApp from "../component/data-share/redux/ReduxApp";
import WithDataApp from "../component/data-share/hocs/WithDataApp";
import ThemeApp from "../component/data-share/children-pass-through/ThemeApp";
import FormApp from "../component/form/form-app";
import SvgApp from "../component/svg/SvgApp";
import FoccApp from "../component/facc/focc-app";
import FaccModuleProblemApp from "../component/facc-module-problem/Facc-module-problem-app";
import CloverApp from '../component/clover/CloverApp';
import StyleApp from "../component/style-component/style-app";
import PerformanceApp,{PromoteApp} from '../component/performance/performance-app'
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
      <TwoColumnNewApp />
      <ThemeContextApp />
      <ReduxApp />
      <WithDataApp />
      <ThemeApp />
      <FormApp />
      <SvgApp />
      <FoccApp />
      <FaccModuleProblemApp />
      <CloverApp/>
      <StyleApp/>
      <PerformanceApp/>
      <PromoteApp/>
    </>
  )
}