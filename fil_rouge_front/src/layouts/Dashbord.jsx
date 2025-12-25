import logo from "../assets/images/logo.jpg";
import { GiProgression } from "react-icons/gi";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
function Dashbord({ userName = 'Mouad Laalam' }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  const linkClass = ({ isActive }) =>
    `font-semibold flex justify-center items-center gap-2 rounded-xl w-full px-4 py-2
     ${isActive ? "bg-[#007B83] text-white" : "text-gray-600 hover:bg-blue-100"}`;

  return (
    <div className="flex w-full h-screen bg-[#E5E7EB]">
      <nav className="bg-white w-[15%] h-full flex flex-col justify-start items-start gap-5 p-8">
        <img className="h-16 w-auto rounded-lg" src={logo} alt="logo" />

        <NavLink to="/admin" end className={linkClass}>
          <GiProgression /> Dashboard
        </NavLink>

        <NavLink to="/admin/users" className={linkClass}>
          <FaUsers /> Utilisateur
        </NavLink>

        <NavLink to="/admin/services" className={linkClass}>
          <BsStack /> Services / Catégories
        </NavLink>

        {/* <NavLink to="/dashbord/reviews" className={linkClass}>
          <FaStar /> Avis & Notations
        </NavLink> */}

        <NavLink to="/admin/projects" className={linkClass}>
          <FaBriefcase /> Projets artisans
        </NavLink>

        <div className="flex items-center gap-2 mt-auto w-full">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            {userName
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
          <span className="text-gray-700 font-semibold">Admin Mouad</span>
        </div>

        <div className="flex items-center w-full">
          <button
            onClick={logout}
            className="w-full cursor-pointer text-red-600 flex justify-start items-center mx-4 gap-2"
          >
            <CiLogout /> Déconnexion
          </button>
        </div>
      </nav>
      <main className="flex-1 flex flex-col overflow-y-auto p-6">
        <Outlet /> 
      </main>
    </div>
  );
}

export default Dashbord