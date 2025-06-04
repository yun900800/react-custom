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
        <MainLayout 
          show={show} 
          toggle={<div className="toggle-wrapper">
              <Toggle toggle={popup} bgColor={'var(--color-jade-green)'} />
            </div>}
          sidebar={<Breadcrumb links={breadcrumbLinks} />}>
          <AppRoutes user={user} />
        </MainLayout>
      </Router>
    </>
  )
}


