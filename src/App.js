import React from 'react'
import Header from './components/user/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/user/Home'
import About from './components/user/About'
import Contact from './components/user/Contact'
import Login from './components/user/Login'
import Signup from './components/user/Signup'
import Bank from './components/user/Bank'
import Logout from './components/user/Logout'
import ProtectedRoute from './components/user/ProtectedRoute'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>}/> 

        <Route element={<ProtectedRoute/>}>
        <Route path='/bank' element={<Bank/>}/>
        <Route path='/logout' element={<Logout/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App