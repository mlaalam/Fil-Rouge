import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { getUserId, getUserName, getUserRole, isAuthenticate } from "../services/auth";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useDispatch} from "react-redux";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const role = getUserRole();
  const user = getUserName();
  const user_id = getUserId();
  const isAuth = isAuthenticate();
  const hendleLogout = () =>{
    localStorage.removeItem('auth_token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    navigate('/')
  }
  const dispatch = useDispatch();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <header className="bg-[#FCF6F0] shadow-md  top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-[#FA7B0C]"
            onClick={closeMenu}
          >
            <img className="h-16 w-auto rounded-lg" src={logo} alt="image logo" />
          </Link>

          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-[#FA7B0C]">
              Accueil
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-[#FA7B0C]">
              Services
            </Link>
            {!isAuth
              ? (
                <>
                <Link
                  to="/login"
                  className="px-4 py-2 border border-[#FA7B0C] text-[#FA7B0C] rounded-lg hover:bg-[#FA7B0C] hover:text-white"
                >
                  Connexion
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-[#FA7B0C] text-white rounded-lg hover:bg-[#FA7B0C]"
                >
                  Inscrivez-vous
                </Link>
              </>
          
              ):(
                <>
                  {role ==='artisan' ? 
                    <Link to="users/dashbord" className="text-gray-700 hover:text-[#FA7B0C]">
                      Dashbord
                    </Link>   :
                    ''
                  }
                
                  <div className="relative inline-block text-left z-50 overflow-visible">
                    <button
                      onClick={() => setOpen(!open)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg"
                    >
                      <span className="font-semibold text-gray-700 "> {user}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {open && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <button onClick={() => navigate(`/profil/${user_id}`)} className="block w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2">
                          <CgProfile /> Profile
                        </button>
                        <button
                          onClick={hendleLogout}
                          className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 flex justify-start gap-2 items-center"
                        >
                          <CiLogout /> Déconnexion
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )
                
            }
          </nav>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-gray-700"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>


      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <Link to="/" onClick={closeMenu} className="text-gray-700">
              Accueil
            </Link>
            <Link to="/services" onClick={closeMenu} className="text-gray-700">
              Services
            </Link>
            {!isAuth ? (
                <>
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="text-[#FA7B0C]"
                  >
                    Connexion
                  </Link>
                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="bg-[#FA7B0C] text-white text-center py-2 rounded-lg"
                  >
                    Inscrivez-vous
                  </Link></>
              ):(
                <>
                  {role==='artisan' ? 
                    <>
                      <Link to="users/dashbord" className="text-gray-700 hover:text-[#FA7B0C]">
                        Dashbord
                      </Link> 
                      <button onClick={() => navigate(`/profil/${user_id}`)} className="text-gray-700 hover:text-[#FA7B0C]">
                        Profil
                      </button> 
                      
                      </> :
                      ''
                    
                    
                }
                  <button
                    onClick={hendleLogout}
                    className="px-4 py-2 bg-red-400 text-white rounded-lg flex justify-start gap-2 items-center"
                  >
                    <CiLogout /> Déconnexion
                  </button>
                </>
              )
            }
              
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
