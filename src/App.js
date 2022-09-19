import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import ListC from './pages/ListC/ListC'
import Single from './pages/single/Single'
import New from './pages/new/New'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import NewC from './pages/newC/NewC'
import NewS from './pages/newS/NewS'
import SingleC from './pages/singleC/SingleC'
import SingleS from './pages/singleS/SingleS'
import ListS from './pages/ListS/ListS'





function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route te index element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/users'>
              <Route index element={<List  />} />
              <Route path=':userId' element={<Single  />} />
              <Route path='new' element={<New />} />
            </Route>
            <Route path='/cars'>
              <Route index element={<ListC />} />
              <Route path=':carId' element={<SingleC />} />
              <Route path='newC' element={<NewC />} />
            </Route>
            <Route path='/services'>
              <Route index element={<ListS />} />
              <Route path=':serviceId' element={<SingleS />} />
              <Route path='newS' element={<NewS />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App