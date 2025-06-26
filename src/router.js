import React, { useState } from 'react'
import { 
  BrowserRouter as Router,
} from 'react-router-dom'
import './styles/main.css'
import { useSelector } from 'react-redux'
import Breadcrumb  from './component/Breadcrumb.js';
import Toggle from './component/toggle.js';
import AppRoutes from './app-routes.js';
import MainLayout from './component/layout/main-layout.js';
import ToggleSwitch from './component/toggle-switch.tsx';

export default function RouterApp() {
  const user = useSelector(state => {
    return state.user.user
  });

  const breadcrumbLinks = [
    { path: '/', label: 'home' },
    { path: '/welcome', label: 'welcome' },
    { path: '/tailwindui', label: 'tailwindui' },
    { path: '/tailwindtext', label: 'tailwindtext' },
    { path: '/tailwindresponse', label: 'tailwindresponse' },
    { path: '/tailwindexampleui', label: 'tailwindexampleui' },
    { path: '/scene', label: 'scene' },
    { path: '/styled', label: 'styled' },
    { path: '/images-card', label: 'images-card' },
    { path: '/layoutone', label: 'layout-one' },
    { path: '/layouttwo', label: 'layout-two' },
  ];

  // 使用这种抽取组件的方式，内部的样式似乎没有效果
  // const ToggleWrapper = ({ toggle }) => {
  //   return (
  //     <div className="toggle-wrapper">
  //       <Toggle toggle={toggle} bgColor={'var(--color-jade-green)'} />
  //     </div>
  //   );
  // }
  
  return (
    <>
      <Router>
        {/* <MainLayout 
          show={show} 
          toggle={<div className="toggle-wrapper">
              <Toggle toggle={popup} bgColor={'var(--color-jade-green)'} />
            </div>}
          sidebar={<Breadcrumb links={breadcrumbLinks} />}>
          <AppRoutes user={user} />
        </MainLayout> */}
        <ToggleSwitch>
          {({ on, toggle }) => (
            <MainLayout
              show={on}
              toggle={
                <div className="toggle-wrapper">
                  <Toggle toggle={toggle} bgColor={'var(--color-jade-green)'} checked={on} />
                </div>
              }
              sidebar={<Breadcrumb links={breadcrumbLinks} />}
            >
              <AppRoutes user={user} />
            </MainLayout>
          )}
        </ToggleSwitch>
      </Router>
    </>
  )
}


