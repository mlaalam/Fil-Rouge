import { FaBriefcase } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { doneProject, getMyProject, supprProject } from "../../slices/projectSlice";
import { getUserId } from "../../services/auth";
import { LoadingIndicator } from "../application/loading-indicator/loading-indicator";
import AddProject from "./AddProject";
function DashbordUser() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [selectProject ,setSelectProject] = useState(null);
  
  const {
    data: projects,
    loading,
    error,
  } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getMyProject());
  }, [dispatch]);

  // ---------------------
  const userId = Number(getUserId());
  const totalProject = projects.filter(
    (pro) => pro.artisan_id === userId
  ).length;
  const totalProjectDone = projects.filter(
    (pro) => pro.artisan_id === userId && pro.status === 1
  ).length;
  const totalProjectCours = projects.filter(
    (pro) => pro.artisan_id === userId && pro.status === 0
  ).length;

  return (
    <div className="px-4 sm:px-6 lg:px-10 mt-10 min-h-screen">
      
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-[#1D2B53]">Mon projets</h1>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="w-[100%]">
          <div className="bg-white h-28 rounded-lg p-4 shadow-[0_10px_25px_rgba(0,123,131,0.4)] flex justify-between items-center">
            <div>
              <p className="text-gray-400">Total projets</p>
              <span className="text-2xl font-bold text-[#1D2B53]">
                {totalProject}
              </span>
            </div>
            <div className="bg-[#9333EA] text-center p-4 w-12 h-12 rounded-lg">
              <FaBriefcase className="text-white" />
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <div className="bg-white h-28 rounded-lg p-4 shadow-[0_10px_25px_rgba(22,163,74,0.45)] flex justify-between items-center">
            <div>
              <p className="text-gray-400">Projet terminé</p>
              <span className="text-2xl font-bold text-[#1D2B53]">
                {totalProjectDone}
              </span>
            </div>
            <div className="bg-green-400 text-center p-4 w-12 h-12 rounded-lg">
              <MdDoneOutline className="text-white" />
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <div className="bg-white h-28 rounded-lg p-4 shadow-[0_10px_25px_rgba(22,163,74,0.45)] flex justify-between items-center">
            <div>
              <p className="text-gray-400">Projet en cours</p>
              <span className="text-2xl font-bold text-[#1D2B53]">
                {totalProjectCours}
              </span>
            </div>
            <div className="bg-[#EA580C] text-center p-4 w-12 h-12 rounded-lg">
              <GiSandsOfTime className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 flex flex-col">
        <div className="">
          <button
            onClick={() =>{ setShowForm(!showForm); setSelectProject(null)}}
            className="bg-blue-500 p-3 rounded-lg text-white hover:bg-blue-600 transition mb-4"
          >
            Ajouter projet
          </button>
        </div>
        <div className="w-full overflow-x-auto">
            {/* {loading && (
              <div className="flex justify-center py-10">
                <LoadingIndicator type="dot-circle" size="md" />
              </div>
            )} */}
          <table className="min-w-[700px] w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 text-center text-lg font-semibold text-gray-700">
                  # ID
                </th>
                <th className="py-3 text-center text-lg font-semibold text-gray-700">
                  Title
                </th>
                <th className="py-3 text-center text-lg font-semibold text-gray-700">
                  Secteur
                </th>
                <th className="py-3 text-center text-lg font-semibold text-gray-700">
                  Date & Heure
                </th>
                <th className="py-3 text-center text-lg font-semibold text-gray-700">
                  Date Fin
                </th>
                <th className="py-3 text-center text-lg font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="text-center py-3">{item.id}</td>
                  <td className="text-center py-3">{item.title}</td>
                  <td className="text-center py-3">{item.category?.title}</td>
                  <td className="text-center py-3">
                    {new Date(item.created_at).toLocaleString("sv-SE")}
                  </td>
                  <td className="text-center py-3">
                    {item.date_fin ? 'Terminé' : 'En cours' }
                  </td>
                  <td className="flex flex-col md:flex-row gap-2 justify-center py-3">
                    <button onClick={()=>{setSelectProject(item.id); setShowForm(!showForm)}} className="bg-blue-400 text-white px-3 py-1 rounded-lg hover:bg-blue-500 transition">
                      Modifier
                    </button>
                    <button onClick={()=>dispatch(doneProject(item.id))} className="bg-green-400 text-white px-3 py-1 rounded-lg hover:bg-green-500 transition">
                      Terminé
                    </button>
                    <button onClick={()=>dispatch(supprProject(item.id))} className="bg-red-400 text-white px-3 py-1 rounded-lg hover:bg-red-500 transition">
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          {showForm && (
            <div className=" shadow-lg rounded-lg p-6">
              <AddProject showForm={showForm} setShowForm={setShowForm} project={selectProject} />
            
            </div>
          )}
      </div>
    </div>
  );
}

export default DashbordUser;
