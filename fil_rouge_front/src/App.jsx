
import { useState } from 'react'
import './App.css'
import Navbar from './layouts/navbar'
import Footer from './layouts/Footer'
import { Route, Routes } from 'react-router-dom'
import AccueilPage from './pages/AccueilPage'
import ServicePape from './pages/ServicePape'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'


function App() {


  return (
    <>
    <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path='/' element={<AccueilPage />} />
          <Route path='/services' element={<ServicePape />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </main>
    <Footer />
    </>
  )
}

export default App
