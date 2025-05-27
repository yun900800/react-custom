import React, { useState } from 'react'
import { 
  BrowserRouter as Router,  
  Navigate,
  Outlet,
  Route, Routes
} from 'react-router-dom'
import './styles/main.css'
import TailwindUI from './component/tailwind-ui/tailwind-ui.js'
import TextStylingCombinations from './component/tailwind-ui/text-styling-combination.js';
import ResponsiveText from './component/tailwind-ui/responsive-text.js';
import ExampleUI from './component/tailwind-ui/example-ui.js';
import { Scene } from './component/three/scene'; 
import AppStyledComponent from './component/styles/app-styled-component.js';
import { Layout } from './component/layout/layout.js';
import { ResponseLayout } from './component/layout/response-layout.js'
import ResponseImages from './component/tailwind-ui/response-images.js'
import LayoutOne from './component/layout/layout-one.js'

import LoginForm  from './component/login/login-form.js'
import { useSelector } from 'react-redux'
import LayoutTwo from './component/layout/layout-two.js'
import { Welcome } from './stories/welcome.js';
import Breadcrumb  from './component/Breadcrumb.js';
import App from './App';

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
          
          {/* <div className='content'>
            <Routes>
              <Route path="/" exact element={<App />} />
              <Route path="/login" exact element={<LoginForm />} />
              <Route path="/welcome" element={
                <ProtectedRoute isAllowed={!!user}>
                    <Welcome />
                </ProtectedRoute>
                } />
              <Route path="/tailwindui" element={
                <ProtectedRoute isAllowed={!!user}>
                  <Layout>
                    <TailwindUI />
                  </Layout>
                </ProtectedRoute>
                } />
              <Route element={<ProtectedRoute isAllowed={!!user} />}>
                <Route path="/tailwindtext" element={ <Layout><TextStylingCombinations /></Layout>} />
                <Route path="/tailwindresponse" element={<Layout><ResponsiveText /></Layout>} />
              </Route>
              <Route path="/tailwindexampleui" element={
                <ProtectedRoute isAllowed={
                  !!user && user.permissions && user.permissions.includes('analyze')
                }>
                  <Layout>
                  <ExampleUI/>
                  </Layout>
                </ProtectedRoute>
                }/>
              <Route path="/scene" element={
                <ProtectedRoute isAllowed={
                  !!user && user.permissions && user.permissions.includes('analyze')
                }>
                  <Layout>
                    <Scene/>
                  </Layout>
                </ProtectedRoute>
                }/>
              <Route path="/styled" element={
                <ProtectedRoute isAllowed={
                  !!user && user.permissions && !user.permissions.includes('admin')
                }>
                  <Layout>
                    <AppStyledComponent/>
                  </Layout>
                </ProtectedRoute>
              }/>
              <Route path="/images-card" element={
                  <ProtectedRoute isAllowed={
                    !!user && user.permissions && !user.permissions.includes('admin')
                  }>
                    <ResponseLayout>
                      <ResponseImages
                        {
                          ...{
                            src: "https://img1.baidu.com/it/u=3543009939,2144310597&fm=253&fmt=auto&app=138&f=JPEG?w=704&h=500",
                            alt: "这是富士山"
                        }
                      }                      
                        />
                      <ResponseImages 
                        {
                          ...{
                            src: "https://img0.baidu.com/it/u=694832972,884680727&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
                            alt: "这是绿野仙踪"
                        }
                      }
                        />
                        <ResponseImages
                        {
                          ...{
                            src: "https://images.unsplash.com/photo-1742403949587-42a767b9ea5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            alt: "这是富士山"
                        }
                      }                      
                        />
                      <ResponseImages 
                        {
                          ...{
                            src: "https://images.unsplash.com/photo-1743046813915-94cf6d5e6942?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            alt: "这是绿野仙踪"
                        }
                      }
                        />
                        <ResponseImages
                        {
                          ...{
                            src: "https://images.unsplash.com/photo-1742403949587-42a767b9ea5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            alt: "这是富士山"
                        }
                      }                      
                        />
                      <ResponseImages 
                        {
                          ...{
                            src: "https://images.unsplash.com/photo-1743046813915-94cf6d5e6942?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            alt: "这是绿野仙踪"
                        }
                      }
                        />
                        <ResponseImages
                        {
                          ...{
                            src: "https://images.unsplash.com/photo-1742403949587-42a767b9ea5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            alt: "这是富士山"
                        }
                      }                      
                        />
                      <ResponseImages 
                        {
                          ...{
                            src: "https://images.unsplash.com/photo-1743046813915-94cf6d5e6942?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            alt: "这是绿野仙踪"
                        }
                      }
                        />
                    </ResponseLayout>
                  </ProtectedRoute>
              }/>
              <Route path="/layoutone" element={
                <ProtectedRoute isAllowed={
                  !!user
                }>
                  <LayoutOne>
                    <AppStyledComponent/>
                  </LayoutOne>
                </ProtectedRoute>
              }/>
              <Route path="/layouttwo" element={
                <ProtectedRoute isAllowed={
                  !!user
                }>
                  <LayoutTwo>
                    <div className='fitem'>
                      原来这是一个假定的高度，在flexbox布局中，flex-grow属性会让子元素在父元素的高度不够时，自动撑开到父元素的高度。
                      这就是flex-grow的作用。
                    </div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                    <div className='fitem'></div>
                  </LayoutTwo>
                </ProtectedRoute>
              }/>
              <Route path="/login" element={
                <ProtectedRoute isAllowed={
                  !!user
                }>
                  <LayoutOne>
                    <LoginForm/>
                  </LayoutOne>
                </ProtectedRoute>
              }/>
            </Routes> 
            
          </div> */}
          <div className="content">
              <AppRoutes user={user} />
            </div>
        </main>
      </Router>
    </>
  )
}

const ProtectedRoute = ({isAllowed, redirectPath = '/login', children}) =>{
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
}


