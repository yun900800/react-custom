import React from 'react'
import App from './App'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import TaskList from './stories/TaskList'
import store from './lib/store'
import { Provider } from 'react-redux'
import './styles/main.css'
import TailwindUI from './component/tailwind-ui/tailwind-ui.js'
import TextStylingCombinations from './component/tailwind-ui/text-styling-combination.js'
export default function RouterApp() {
  return (
    <>
      <Router>
        <main className="">
          <nav>
            <ul>
              <li>
                <Link to="/" className="bg-gray-200 rounded-md shadow-xs">
                  home
                </Link>
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
            </ul>
          </nav>
          <Routes>
            <Route path="/" exact element={<App />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/tailwindui" element={<TailwindUI />} />
            <Route path="/tailwindtext" element={<TextStylingCombinations />} />
          </Routes>
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
