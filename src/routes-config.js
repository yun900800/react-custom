import React from 'react';
import App from './App';
import LoginForm from './component/login/login-form.js';
import { Welcome } from './stories/welcome.js';
import TailwindUI from './component/tailwind-ui/tailwind-ui.js';
import TextStylingCombinations from './component/tailwind-ui/text-styling-combination.js';
import ResponsiveText from './component/tailwind-ui/responsive-text.js';
import ExampleUI from './component/tailwind-ui/example-ui.js';
import { Scene } from './component/three/scene';
import AppStyledComponent from './component/styles/app-styled-component.js';
import { Layout } from './component/layout/layout.js';
import { ResponseLayout } from './component/layout/response-layout.js';
import ResponseImages from './component/tailwind-ui/response-images.js';
import LayoutOne from './component/layout/layout-one.js';
import LayoutTwo from './component/layout/layout-two.js';

const ResponseLayoutImage = () => { 
  return (
    <>
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
      </>
  );
}

const LayoutTwoApp = () => {
  return (
    <>
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
    </>
  );
}

export const routesConfig = [
  { path: '/', element: <App />, isProtected: false },
  { path: '/login', element: <LoginForm />, isProtected: false },
  { path: '/welcome', element: <Welcome />, isProtected: true },
  { path: '/tailwindui', element: <TailwindUI />, isProtected: true, layout: Layout },
  { path: '/tailwindtext', element: <TextStylingCombinations />, isProtected: true, layout: Layout },
  { path: '/tailwindresponse', element: <ResponsiveText />, isProtected: true, layout: Layout },
  { path: '/tailwindexampleui', element: <ExampleUI />, isProtected: true, layout: Layout, permissions: ['analyze'] },
  { path: '/scene', element: <Scene />, isProtected: true, layout: Layout, permissions: ['analyze'] },
  { path: '/styled', element: <AppStyledComponent />, isProtected: true, layout: Layout, permissions: ['!admin'] },
  { path: '/images-card', element: <ResponseLayoutImage />, isProtected: true, layout: ResponseLayout },
  { path: '/layoutone', element: <AppStyledComponent />, isProtected: true, layout: LayoutOne },
  { path: '/layouttwo', element: <LayoutTwoApp />, isProtected: true, layout: LayoutTwo },
];