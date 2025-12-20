
import { useState } from 'react'
// import './App.css'
import Navbar from './layouts/navbar'
import Footer from './layouts/Footer'
import { Route, Routes } from 'react-router-dom'
import AccueilPage from './pages/AccueilPage'
import ServicePape from './pages/ServicePape'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ForgetPassword from './auth/forgetPassword'


function App() {


  return (
    <div className='bg-gradient-to-br from-[#f9c999] to-white'>
    <Navbar />
      <main className="">
        <Routes>
          <Route path='/' element={<AccueilPage />} />
          <Route path='/services' element={<ServicePape />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<ForgetPassword />} />
        </Routes>
      </main>
    <Footer />
    </div>
  )
}

export default App
