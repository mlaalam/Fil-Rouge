
import {FaBriefcase} from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
function DashbordUser() {
  const tableData = [
    {
      id: "1",
      title: "Testst",
      dateHeure: "15 Jan 2025, 14:32",
      catigpry:"Peintre"
    },
    {
      id: "2",
      title: "Testst",
      dateHeure: "15 Jan 2025, 14:32",
      catigpry:"Peintre"
    },
    {
      id: "3",
      title: "Testst",
      dateHeure: "15 Jan 2025, 14:32",
      catigpry:"Peintre"
    },
    {
      id: "4",
      title: "Testst",
      dateHeure: "15 Jan 2025, 14:32",
      catigpry:"Peintre"
    },
    
    
  ];

  return (
  <div className="mx-25 mt-10 min-h-screen">
  <div className="mb-5">
    <h1 className="text-2xl font-bold text-[#1D2B53]">Mon projets</h1>
  </div>
  <div className="w-[70%] flex mx-auto gap-10 grid grid-cols-3 mb-12">
      <div className="w-[100%]">
      <div className="bg-white h-28 rounded-lg p-4 shadow-[0_10px_25px_rgba(0,123,131,0.4)] flex justify-between items-center">
        <div>
          <p className="text-gray-400">Total projets</p>
          <span className="text-2xl font-bold text-[#1D2B53]">542</span>
        </div>
        <div className="bg-[#9333EA] text-center p-4 w-12 h-12 rounded-lg"><FaBriefcase className="text-white" /></div>
      </div>
    </div>
    <div className="w-[100%]">
      <div className="bg-white h-28 rounded-lg p-4 shadow-[0_10px_25px_rgba(22,163,74,0.45)] flex justify-between items-center">
        <div>
          <p className="text-gray-400">Projet terminé</p>
          <span className="text-2xl font-bold text-[#1D2B53]">20</span>
        </div>
        <div className="bg-green-400 text-center p-4 w-12 h-12 rounded-lg"><MdDoneOutline className="text-white" /></div>
      </div>
    </div>
      <div className="w-[100%]">
        <div className="bg-white h-28 rounded-lg p-4 shadow-[0_10px_25px_rgba(22,163,74,0.45)] flex justify-between items-center">
          <div>
              <p className="text-gray-400">Projet en cours</p>
              <span className="text-2xl font-bold text-[#1D2B53]">23</span>
            </div>
            <div className="bg-[#EA580C] text-center p-4 w-12 h-12 rounded-lg"><GiSandsOfTime className="text-white" /></div>
        </div>
      </div>
  </div>
    
    <div className="w-[70%] mx-auto">
      <button className="bg-blue-500 p-3 rounded-lg text-white hover:bg-blue-600 cursor-pointer mb-6">
        Ajouter projet
      </button>
      <table className="w-full border-2 border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 text-center text-xl font-semibold text-gray-700"># ID</th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">Title</th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">Secteur</th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">
              Date & Heure
            </th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {tableData.map((item, index) => (
            <tr key={index}>
              <td className="text-center text-xl py-4">{item.id}</td>
              <td className="text-center text-xl py-4">{item.title}</td>
              <td className="text-center text-xl py-4">{item.catigpry}</td>
              <td className="text-center text-xl py-4">{item.dateHeure}</td>
              <td className="py-4 flex gap-7 justify-center">
                <button className="bg-blue-400 text-xl rounded-xl px-3 py-1 text-white">
                  modifier
                </button>
                <button className="bg-red-400 text-xl rounded-xl px-3 py-1 text-white">
                  supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>

  )
}

export default DashbordUser