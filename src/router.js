import React, { useState } from 'react'
import { 
  BrowserRouter as Router,  
  Navigate,
  Outlet,
} from 'react-router-dom'
import './styles/main.css'
import { useSelector } from 'react-redux'
import Breadcrumb  from './component/Breadcrumb.js';

import AppRoutes from './app-routes.js';

export default function RouterApp() {
  const [show,setShow] = useState(false); 
  const popup = (e)=>{
    setShow(!show);
    e.stopPropagation();
  }
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
  
  return (
    <>
      <Router>
        <main className={show?'st-container st-menu-open st-effect-1':'st-container st-effect-1'}>
          <div className='toggle' id="toggle">
            <input className="menu-trigger hidden" id="togglenav" type="checkbox"/>
            <label className="burger-wrapper" htmlFor="togglenav" onClick={popup}>
              <div className="hamburger"></div>
            </label>
          </div>
          <Breadcrumb links={breadcrumbLinks} />
          <div className="content">
              <AppRoutes user={user} />
            </div>
        </main>
      </Router>
    </>
  )
}


