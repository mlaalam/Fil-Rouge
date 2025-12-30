import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProject, supprProject } from "../../slices/projectSlice";
import { LoadingIndicator } from "../application/loading-indicator/loading-indicator";

function ProjectHome() {
const dispatch = useDispatch();
const {data:projects, loading,error} = useSelector((state)=>state.projects);
const [currentPage , setCurrentPage] = useState(1);
const [rowsPrePage , setRowsPerPage] = useState(10);

useEffect(()=>{
  dispatch(getProject());
},[dispatch]);

const indexOfLastRow = currentPage * rowsPrePage;
const indexOfFirstRow = indexOfLastRow - rowsPrePage;
const currentProject = projects.slice(indexOfFirstRow , indexOfLastRow);
 if (loading) {
    return (
      <div className="flex justify-center py-20">
        <LoadingIndicator type="dot-circle" size="md" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center py-20 text-red-500 text-lg">
        Error loading projects
      </div>
    );
  }
  return (
    <div className='mx-25 mt-10'>
      <div className='flex justify-between items-center mb-5'>
        <h1 className="text-2xl font-bold text-[#1D2B53] ">Les projets artisans</h1>
      </div>
        
      <div className="flex justify-end items-center mb-4">
        <span className="text-gray-600">
          <select
            value={rowsPrePage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="mx-2 border rounded px-2 py-1"
          >
            <option value={10}>10</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
          </select>
        </span>
      </div>
        <table className="w-full border-2 border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 text-center text-xl font-semibold text-gray-700"># ID</th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">Title</th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">Utilisateur</th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">Categories</th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">
              Date & Heure
            </th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">
              Date Fin
            </th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {currentProject.map((item, index) => (
            <tr key={index}>
              <td className="text-center text-xl py-4">{item.id}</td>
              <td className="text-center text-xl py-4">{item.title}</td>
              <td className="text-center text-xl py-4">{item.artisan?.nom_complet}</td>
              <td className="text-center text-xl py-4">{item.category?.title}</td>
              <td className="text-center text-xl py-4">{new Date(item.created_at).toLocaleString('sv-SE')}</td>
              <td className="text-center text-xl py-4">  {item.date_fin ? 'Terminé' : 'En cours' }</td>
              <td className="py-4 flex gap-7 justify-center">
                {/* <button className="bg-blue-400 text-xl rounded-xl px-3 py-1 text-white">
                  modifier
                </button> */}
                <button onClick={()=>dispatch(supprProject(item.id))} className="bg-red-400 text-xl rounded-xl px-3 py-1 text-white">
                  supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectHome