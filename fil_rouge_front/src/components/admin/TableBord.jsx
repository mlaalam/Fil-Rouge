import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtisan } from "../../slices/artisanSlice";


const TableBord = () => {
  const dispatch = useDispatch();
  const {data:artisans , loading ,error} = useSelector((state)=>state.artisans);
  useEffect(()=>{
    dispatch(getArtisan());
  },[dispatch]);

  const [currentPage , setCurrentPage] = useState(1);
  const [rowPerPage , setRowPerPage] = useState(5);

  const indexOfLastRow = currentPage * rowPerPage;
  const indexOfFirstRow = indexOfLastRow / rowPerPage;
  const currentArtisan = artisans.slice(indexOfFirstRow, indexOfLastRow);


  const getStatusColor = (status) => {
    switch (status) {
      case "En attente":
        return "text-yellow-800 border-yellow-200";'pending';
      case "Actif":
        return "text-green-800 border-green-200";
      case "Suspendu":
        return "text-red-800 border-red-200";
      default:
        return "text-gray-800 border-gray-200";
    }
  };
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
      <h1 className="text-2xl font-bold text-[#1D2B53] mb-5">Activité Récente</h1>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
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
            <option value={5}>5</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
          </select>
        </span>
      </div>
        <table className="w-full border-2 border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">action</th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">Utilisateur</th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">Role</th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">
              Date & Heure
            </th>
            <th className="py-3 text-center text-xl font-semibold text-gray-700">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {currentArtisan.map((item, index) => (
            <tr key={index}>
              <td className="text-center text-xl py-4">{item.action}</td>
              <td className="text-center text-xl py-4">{item.nom_complet}</td>
              <td className={`text-center text-xl py-4 ${getRoleColor(item.role)}`}>{item.role}</td>
              <td className="text-center text-xl py-4">{new Date(item.created_at).toLocaleString('sv-SE')}</td>
              <td className={`text-center text-xl py-4 ${getStatusColor(item.status)}`}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TableBord;