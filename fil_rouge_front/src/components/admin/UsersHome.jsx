import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { approveProfil, deleteProfile, getArtisan, suspendProfil } from '../../slices/artisanSlice';
import EditProfil from '../users/EditProfil';

function UsersHome() {
const [currentPage , setCurrentPage] = useState(1);
const [rowPerPage, setRowPerPage] =useState(10);
const [selectProfile ,setSelectProfile] = useState(null);
const [showForm , setShowForm] = useState(false);



  const dispatch = useDispatch();
  const { data:artisans,loading,successMessage} = useSelector((state)=> state.artisans)
  useEffect(()=>{
      dispatch(getArtisan());
  },[dispatch]);
  const indexOfLastRow = currentPage * rowPerPage ;
  const indexOfFirstRow = indexOfLastRow - rowPerPage;
  const currentArtisan = artisans.slice(indexOfFirstRow ,indexOfLastRow);
  const getStatusColor = (status) => {
    switch (status) {
      case "En attente":
        return "text-yellow-800 border-yellow-200";
      case "Actif":
        return "text-green-800 border-green-200";
      case "Suspend":
        return "text-red-800 border-red-200";
      default:
        return "text-gray-800 border-gray-200";
    }
  };
  useEffect(() => {
  if (successMessage) {
    alert(successMessage); 
  }
}, [successMessage]);
  const getRoleColor = (role) =>{
      switch (role) {
      case "artisan":
        return "text-blue-400";
      default:
        return "text-gray-800";
    }
  }

  return (
    <div className="mx-25 mt-10">
      <div className='flex justify-between items-center mb-5 '>
        <h1 className="text-2xl font-bold text-[#1D2B53] ">Table Utilisateur</h1>
      </div>
      <div className="w-[90%] mx-auto">
      {/* <button className="bg-blue-500 p-3 rounded-lg text-white hover:bg-blue-600 cursor-pointer mb-6">
        Ajouter utilisateur
      </button> */}
      <div className="flex justify-end items-center mb-4">
        <span className="text-gray-600">
          <select
            value={rowPerPage}
            onChange={(e) => {
              setRowPerPage(Number(e.target.value));
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
            <th className="py-3 text-center text-xl font-semibold text-gray-700">Utilisateur</th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">Role</th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">
              Date & Heure
            </th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">
              Status
            </th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {currentArtisan.map((item, index) => (
            <tr key={index}>
              <td className="text-center text-xl py-4">{item.id}</td>
              <td className="text-center text-xl py-4">{item.nom_complet}</td>
              <td className={`text-center text-xl py-4 ${getRoleColor(item.role)}`}>{item.role}</td>
              <td className="text-center text-xl py-4">{new Date(item.created_at).toLocaleString('sv-SE')}</td>
              <td className={`text-center text-xl py-4 ${getStatusColor(item.status)}`}>{item.status}</td>
              <td className="py-4 flex gap-7 justify-center">
                <button onClick={()=>{setSelectProfile(item); setShowForm(true) } } className="bg-blue-400 text-xl rounded-xl px-3 py-1 text-white">
                  Edit
                </button>
                <button onClick={()=>dispatch(deleteProfile(item.id))} className="bg-red-400 text-xl rounded-xl px-3 py-1 text-white">
                    Delete
                </button>
                <button onClick={()=>dispatch(approveProfil(item.id))} className="bg-green-400 text-xl rounded-xl px-3 py-1 text-white">
                    Active
                </button>
                <button onClick={()=>dispatch(suspendProfil(item.id))} className="bg-red-500 text-xl rounded-xl px-3 py-1 text-white">
                    Suspend
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      {showForm ? <EditProfil showForm={showForm} setShowForm={setShowForm} profile={selectProfile} /> : ''}
    </div>
  );
};

export default UsersHome