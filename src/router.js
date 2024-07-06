import React, { useState } from 'react'
import App from './App'
import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Link,
  Navigate,
  Outlet  
} from 'react-router-dom'
import TaskList from './stories/TaskList'
import store from './lib/store'
import { Provider } from 'react-redux'
import './styles/main.css'
import TailwindUI from './component/tailwind-ui/tailwind-ui.js'
import TextStylingCombinations from './component/tailwind-ui/text-styling-combination.js';
import ResponsiveText from './component/tailwind-ui/responsive-text.js';
import ExampleUI from './component/tailwind-ui/example-ui.js';
import { Scene } from './component/three/scene'; 
import AppStyledComponent from './component/styles/app-styled-component.js';
export default function RouterApp() {
  const [user, setUser] = React.useState(null);
  const [show,setShow] = useState(false);
  const popup = (e)=>{
    setShow(!show);
    e.stopPropagation();
  }
  const handleLogin = () => setUser({ 
      id: '1', 
      name: 'robin', 
      permissions: ['analyze'],
      roles: ['admin'],}
  );
  const handleLogout = () => setUser(null);
  
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
              <li>
                <Link to="/scene">scene</Link>
              </li>
              <li>
                <Link to="/styled">styled</Link>
              </li>
            </ul>
          </nav>
          <div className='content'>
          {user ? (
            <button onClick={handleLogout}>Sign Out</button>
          ) : (
            <button onClick={handleLogin}>Sign In</button>
          )}

            <Routes>
              <Route path="/" exact element={<App />} />
              <Route path="/welcome" element={
                <ProtectedRoute isAllowed={!!user}>
                  <Welcome />
                </ProtectedRoute>
                } />
              <Route path="/tailwindui" element={
                <ProtectedRoute isAllowed={!!user}>
                  <TailwindUI />
                </ProtectedRoute>
                } />
              <Route element={<ProtectedRoute isAllowed={!!user} />}>
                <Route path="/tailwindtext" element={<TextStylingCombinations />} />
                <Route path="/tailwindresponse" element={<ResponsiveText />} />
              </Route>
              {/* <Route path="/tailwindtext" element={
                <ProtectedRoute user={user}>
                  <TextStylingCombinations />
                </ProtectedRoute>
                } />
              <Route path="/tailwindresponse" element={
                <ProtectedRoute user={user}>
                  <ResponsiveText/>
                </ProtectedRoute>
                }/> */}
              <Route path="/tailwindexampleui" element={
                <ProtectedRoute isAllowed={
                  !!user && user.permissions.includes('analyze')
                }>
                  <ExampleUI/>
                </ProtectedRoute>
                }/>
              <Route path="/scene" element={
                <ProtectedRoute isAllowed={
                  !!user && user.permissions.includes('analyze')
                }>
                  <Scene/>
                </ProtectedRoute>
                }/>
              <Route path="/styled" element={
                <ProtectedRoute isAllowed={
                  !!user && user.permissions.includes('admin')
                }>
                  <AppStyledComponent/>
                </ProtectedRoute>
                }/>
            </Routes>
          </div>
        </main>
      </Router>
    </>
  )
}

const Welcome = () => (
  <div class="task-container">
    <Provider store={store}>
      <TaskList></TaskList>
    </Provider>
  </div>
)

const ProtectedRoute = ({isAllowed, redirectPath = '/', children}) =>{
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
}


