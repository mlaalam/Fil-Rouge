

function ProjectHome() {
  const tableData = [
    {
      id: "1",
      title: "Testst",
      utilisateur: "Mohammed Alami",
      dateHeure: "15 Jan 2025, 14:32",
      catigpry:"Peintre"
    },
    {
      id: "2",
      title: "Testst",
      utilisateur: "Mohammed Alami",
      dateHeure: "15 Jan 2025, 14:32",
      catigpry:"Peintre"
    },
    {
      id: "3",
      title: "Testst",
      utilisateur: "Mohammed Alami",
      dateHeure: "15 Jan 2025, 14:32",
      catigpry:"Peintre"
    },
    {
      id: "4",
      title: "Testst",
      utilisateur: "Mohammed Alami",
      dateHeure: "15 Jan 2025, 14:32",
      catigpry:"Peintre"
    },
    
    
  ];

  return (
    <div className='mx-25 mt-10'>
      <div className='flex justify-between items-center mb-5'>
        <h1 className="text-2xl font-bold text-[#1D2B53] ">Les projets artisans</h1>
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
              Action
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {tableData.map((item, index) => (
            <tr key={index}>
              <td className="text-center text-xl py-4">{item.id}</td>
              <td className="text-center text-xl py-4">{item.title}</td>
              <td className="text-center text-xl py-4">{item.utilisateur}</td>
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
  )
}

export default ProjectHome