import React, { useState } from 'react'
import App from './App'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import TaskList from './stories/TaskList'
import store from './lib/store'
import { Provider } from 'react-redux'
import './styles/main.css'
import TailwindUI from './component/tailwind-ui/tailwind-ui.js'
import TextStylingCombinations from './component/tailwind-ui/text-styling-combination.js';
import ResponsiveText from './component/tailwind-ui/responsive-text.js';
import ExampleUI from './component/tailwind-ui/example-ui.js'
export default function RouterApp() {

  const [show,setShow] = useState(false);

  const popup = (e)=>{
    setShow(!show);
    e.stopPropagation();
  }
  
  return (
    <>
      <Router>
        <main className={show?'st-container st-menu-open st-effect-1':'st-container st-effect-1'}>
          <a className='toggle' id="toggle" onClick={popup}>点击弹出</a>
          <nav className='st-menu st-effect-1'>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/welcome">welcome</Link>
              </li>
              <li>
                <Link to="/tailwindui">tailwindui</Link>
              </li>
              <li>
                <Link to="/tailwindtext">tailwindtext</Link>
              </li>
              <li>
                <Link to="/tailwindresponse">tailwindresponse</Link>
              </li>
              <li>
                <Link to="/tailwindexampleui">tailwindexampleui</Link>
              </li>
            </ul>
          </nav>
          <div className='content'>
            <Routes>
              <Route path="/" exact element={<App />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/tailwindui" element={<TailwindUI />} />
              <Route path="/tailwindtext" element={<TextStylingCombinations />} />
              <Route path="/tailwindresponse" element={<ResponsiveText/>}/>
              <Route path="/tailwindexampleui" element={<ExampleUI/>}/>
            </Routes>
          </div>
        </main>
      </Router>
    </>
  )
}

const Welcome = () => (
  <>
    <Provider store={store}>
      <TaskList></TaskList>
    </Provider>
  </>
)
