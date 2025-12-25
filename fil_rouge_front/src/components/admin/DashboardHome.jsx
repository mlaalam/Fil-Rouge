import { FaHammer } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaStar ,FaBriefcase} from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import TableBord from "./TableBord";
function DashboardHome() {
  return (
    <>
      <div className="mx-25 mt-15">
        <div className="">
          <h1 className="text-2xl font-bold text-[#1D2B53]">Tableau de bord</h1>
          <p className="font-semibold text-[#1D2B53]">Bienvenue sur votre panneau d'administration KhadmaLink</p>
        </div>
        <div className="mt-8 flex gap-5 grid grid-cols-5">
          <div className="bg-white w-full h-25 rounded-lg p-4 shadow-[0_10px_25px_rgba(0,123,131,0.4)] flex justify-between items-start">
              <div>
                <p className="text-gray-400">Total Artisans</p>
                <span className="text-2xl font-bold text-[#1D2B53]">1,247</span>
              </div>
              <div className="bg-[#007B83] text-center p-4 w-12 h-12 rounded-lg"><FaHammer className="text-white" /></div>
          </div>
          <div className="bg-white w-full h-25 rounded-lg p-4 shadow-[0_10px_25px_rgba(29,43,83,0.4)] flex justify-between items-start">
              <div>
                <p className="text-gray-400">Total Clients</p>
                <span className="text-2xl font-bold text-[#1D2B53]">3,892</span>
              </div>
              <div className="bg-[#1D2B53] text-center p-4 w-12 h-12 rounded-lg"><FaUsers className="text-white" /></div>
          </div>
          <div className="bg-white w-full h-25 rounded-lg p-4 shadow-[0_10px_25px_rgba(250,204,21,0.4)] flex justify-between items-start">
              <div>
                <p className="text-gray-400">Nombre d'Avis</p>
                <span className="text-2xl font-bold text-[#1D2B53]">8,456</span>
              </div>
              <div className="bg-[#FACC15] text-center p-4 w-12 h-12 rounded-lg"><FaStar className="text-white" /></div>
          </div>
          <div className="bg-white w-full h-25 rounded-lg p-4 shadow-[0_10px_25px_rgba(147,51,234,0.4)] flex justify-between items-start">
              <div>
                <p className="text-gray-400">Projets Publiés</p>
                <span className="text-2xl font-bold text-[#1D2B53]">542</span>
              </div>
              <div className="bg-[#9333EA] text-center p-4 w-12 h-12 rounded-lg"><FaBriefcase className="text-white" /></div>
          </div>
          <div className="bg-white w-full h-25 rounded-lg p-4 shadow-[0_10px_25px_rgba(234,88,12,0.4)] flex justify-between items-start">
              <div>
                <p className="text-gray-400">En Attente Validation</p>
                <span className="text-2xl font-bold text-[#1D2B53]">23</span>
              </div>
              <div className="bg-[#EA580C] text-center p-4 w-12 h-12 rounded-lg"><GiSandsOfTime className="text-white" /></div>
          </div>
          
        </div>
      </div>
      <section className="mx-25 mt-10">
            <h1 className="text-2xl font-bold text-[#1D2B53] mb-5">Actions Rapides</h1>
            <div className="flex gap-4">
              <div className="bg-white rounded-lg w-62 h-28 p-3 flex flex-col items-center justify-center gap-1">  
                <div className="flex justify-center items-center bg-[#D9EDBF] w-12 h-12 rounded-xl">
                  <FaPlus className="text-[#357C81] text-lg" />
                </div>
                <h5 className="font-semibold text-[#1D2B53]">
                  Ajouter Catégorie
                </h5>
              </div>
              <div className="bg-white rounded-lg w-62 h-28 p-3 flex flex-col items-center justify-center gap-1">  
                <div className="flex justify-center items-center bg-[#DCFCE7] w-12 h-12 rounded-xl">
                  <FaCheck className="text-[#16A34A] text-lg" />
                </div>
                <h5 className="font-semibold text-[#1D2B53]">
                  Valider Artisan
                </h5>
              </div>
              <div className="bg-white rounded-lg w-62 h-28 p-3 flex flex-col items-center justify-center gap-1">  
                <div className="flex justify-center items-center bg-[#FEE2E2] w-12 h-12 rounded-xl">
                  <MdBlock  className="text-[#DC2626] text-lg" />
                </div>
                <h5 className="font-semibold text-[#1D2B53]">
                  Suspendre Utilisateur
                </h5>
              </div>
            </div>
      </section>
      <TableBord />
    </>
    
  );
}
export default DashboardHome;
