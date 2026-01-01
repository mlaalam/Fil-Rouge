import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../slices/Category";
import AddCategory from "./AddCategory";

function ServicesHome() {
  const [showForm , setShowForm] = useState(false);
  const dispatch = useDispatch();
  const {data:categories ,loading } = useSelector((state)=>state.categories);
  useEffect(()=>{
    dispatch(getCategory())
  },[dispatch]);
  return (
    <div className="mx-25 mt-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold text-[#1D2B53] ">
          Tables categoier et services
        </h1>
      </div>
      <div className="flex justify-between gap-4">
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm w-[50%]">
          <button onClick={()=>setShowForm(!showForm)} className="bg-blue-500 p-3 mb-2 rounded-lg text-white hover:bg-blue-600 cursor-pointer">
            Ajouter Catigory
          </button>
          <table className="w-full border-2 border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 text-center text-xl font-semibold text-gray-700">
                  # ID
                </th>
                <th className="py-3 text-center text-xl font-semibold text-gray-700">
                  Title
                </th>
                <th className="py-3 text-center text-xl font-semibold text-gray-700">
                  Date & Heure
                </th>
                <th className="py-3 text-center text-xl font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((item, index) => (
                <tr key={index}>
                  <td className="text-center text-xl py-4">{item.id}</td>
                  <td className="text-center text-xl py-4">{item.title}</td>
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
          {showForm ? <AddCategory setShowForm={setShowForm} showForm={showForm} /> : ''}
        </div>
        {/* <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm w-[50%]">
          <button className="bg-blue-500 p-3 mb-2 rounded-lg text-white hover:bg-blue-600 cursor-pointer">
            Ajouter Services
          </button>
          <table className="w-full border-2 border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 text-center text-xl font-semibold text-gray-700">
                  # ID
                </th>
                <th className="py-3 text-center text-xl font-semibold text-gray-700">
                  Title
                </th>
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
        </div> */}
      </div>
    </div>
  );
}

export default ServicesHome;
