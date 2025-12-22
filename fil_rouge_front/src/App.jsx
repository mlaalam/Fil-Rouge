
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
import PageDashbord from './pages/admin/PageDashbord'
import { getUserRole } from './services/auth'


function App() {
const role = getUserRole();

  return (
    <div className='bg-gradient-to-br from-[#f9c999] to-white'>
    {role === 'admin'? '' : <Navbar />}
      <main className="">
        <Routes>
          <Route path='/' element={<AccueilPage />} />
          <Route path='/services' element={<ServicePape />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<ForgetPassword />} />
          <Route path='/dashbord' element={<PageDashbord />} />
        </Routes>
      </main>
    {role === 'admin'? '' : <Footer />}
    </div>
  )
}

export default App
