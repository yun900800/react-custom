import React from "react";
import App from "./App";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import TaskList from './stories/TaskList'
import store from './lib/store'
import { Provider } from 'react-redux'
export default function RouterApp() {
    return (
        <>
        <Router> 
          <main>
            <nav>
              <ul>
                <li className="text-3xl font-bold underline"><Link  to="/">home</Link></li>
                <li><Link  to="/welcome">welcome</Link></li>
              </ul>
            </nav>
            <Routes>
                <Route path="/" exact element={<App/>} />
                <Route path="/welcome" element={<Welcome/>} />
            </Routes>
          </main>
        </Router>
        </>
    );
}

const Welcome = () => (
    <>
      <Provider store={store}>
          <TaskList></TaskList>
      </Provider>
    </>
);