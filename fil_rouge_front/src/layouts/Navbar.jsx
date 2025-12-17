import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-[#FCF6F0] shadow-md fixed top-0 left-0 w-full z-50">
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
            {/* <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">
              Admin Panel
            </Link> */}

            <Link
              to="/login"
              className="px-4 py-2 border border-[#FA7B0C] text-[#FA7B0C] rounded-lg hover:bg-[#FA7B0C] hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-[#FA7B0C] text-white rounded-lg hover:bg-[#FA7B0C]"
            >
              Register
            </Link>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <Link to="/" onClick={closeMenu} className="text-gray-700">
              Accueil
            </Link>
            <Link to="/services" onClick={closeMenu} className="text-gray-700">
              Services
            </Link>
            {/* <Link to="/dashboard" onClick={closeMenu} className="text-gray-700">
              Admin Panel
            </Link> */}

            <Link
              to="/login"
              onClick={closeMenu}
              className="text-[#FA7B0C]"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={closeMenu}
              className="bg-[#FA7B0C] text-white text-center py-2 rounded-lg"
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
