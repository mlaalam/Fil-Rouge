
import { useState } from 'react'
import './App.css'
import Navbar from './layouts/navbar'
import Footer from './layouts/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import AccueilPage from './pages/AccueilPage'
import ServicePape from './pages/ServicePape'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ForgetPassword from './auth/forgetPassword'
import PageDashbord from './pages/admin/PageDashbord'
import { getUserRole } from './services/auth'
import Authorized from './components/errors/Authorized'
import ProtectedRoute from './auth/ProtectedRoute'
import DashboardHome from './components/admin/DashboardHome'
import UsersHome from './components/admin/UsersHome'
import ServicesHome from './components/admin/ServicesHome'
import AvisHome from './components/admin/AvisHome'
import ProjectHome from './components/admin/ProjectHome'
import DashbordPage from './pages/users/DashbordPage'
import Error from './components/errors/Error'
import Profil from './pages/users/Profil'


function App() {
const role = getUserRole();
const location = useLocation();
const hideNav = location.pathname.startsWith('/admin');
const hideFooter = location.pathname.startsWith('/users');
const [searchVille ,setSearchVille] = useState("");
const [searchCategory ,setSearchCategory] = useState("");
  return (
    <div className='bg-gray-100'>
      {!hideNav && <Navbar />}
      <main>
        <Routes>
          <Route path='/' element={<AccueilPage searchVille={searchVille} searchCategory={searchCategory} setSearchVille={setSearchVille} setSearchCategory={setSearchCategory} />} />
          <Route path='/services' element={<ServicePape searchVille={searchVille} searchCategory={searchCategory} setSearchVille={setSearchVille} setSearchCategory={setSearchCategory} />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<ForgetPassword />} />
          <Route path='/profil/:id' element={<Profil />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute allowedRole="admin">
                <PageDashbord /> 
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            
            <Route path="users" element={<UsersHome />} />
            <Route path="services" element={<ServicesHome />} />
            <Route path="reviews" element={<AvisHome />} />
            <Route path="projects" element={<ProjectHome />} /> 
           
          </Route>
          <Route path='users/dashbord' element={
            <ProtectedRoute allowedRole="artisan">
              <DashbordPage />
            </ProtectedRoute>
          } />
          <Route path="/not-authorized" element={<Authorized/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    {(!(hideNav || hideFooter)) && <Footer />}
    </div>
  )
}

export default App
