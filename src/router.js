import React, { useState } from 'react'
import App from './App'
import { 
  useNavigate,
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Link,
  Navigate,
  Outlet  
} from 'react-router-dom'
import TaskList from './stories/TaskList'
import store, { updateUser } from './lib/store'
import { Provider } from 'react-redux'
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
import { useSelector,useDispatch } from 'react-redux'

export default function RouterApp() {
  const [show,setShow] = useState(false); 
  const popup = (e)=>{
    setShow(!show);
    e.stopPropagation();
  }
  const user = useSelector(state => {
    return state.user.user
  });
  
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
              <li>
                <Link to="/images-card">images-card</Link>
              </li>
              <li>
                <Link to="/layoutone">layout-one</Link>
              </li>
              <li>
                <Logout/>
              </li>
            </ul>
          </nav>
          <div className='content'>
          {/* {user ? (
            <button onClick={handleLogout}>Sign Out</button>
          ) : (
            <button onClick={handleLogin}>Sign In</button>
          )} */}

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
          </div>
        </main>
      </Router>
    </>
  )
}

const Welcome = () => (
  <div className="task-container">
    <Provider store={store}>
      <TaskList></TaskList>
    </Provider>
  </div>
)

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () =>{
    dispatch(updateUser(null));
    navigate('/login');
  }
  return (
    <a onClick={handleLogout}>退出</a>
  )
}

const ProtectedRoute = ({isAllowed, redirectPath = '/login', children}) =>{
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
}


