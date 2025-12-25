

const TableBord = () => {
  const tableData = [
    {
      action: "Nouveau artisan inscrit",
      utilisateur: "Mohammed Alami",
      role: "Artisan",
      dateHeure: "15 Jan 2025, 14:32",
      statut: "En attente"
    },
    {
      action: "Nouveau avis ajouté",
      utilisateur: "Fatima Zahra",
      role: "Client",
      dateHeure: "15 Jan 2025, 13:18",
      statut: "Actif"
    },
    {
      action: "Projet ajouté par artisan",
      utilisateur: "Youssef Bennani",
      role: "Artisan",
      dateHeure: "15 Jan 2025, 11:45",
      statut: "Publié"
    },
    {
      action: "Compte suspendu",
      utilisateur: "Ahmed Tazi",
      role: "Client",
      dateHeure: "15 Jan 2025, 09:22",
      statut: "Suspendu"
    },
    {
      action: "Réclamation utilisateur",
      utilisateur: "Sanaa El Idrissi",
      role: "Client",
      dateHeure: "14 Jan 2025, 16:55",
      statut: "En cours"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "En attente":
        return "text-yellow-800 border-yellow-200";
      case "Actif":
        return "text-green-800 border-green-200";
      case "Publié":
        return "text-blue-800 border-blue-200";
      case "Suspendu":
        return "text-red-800 border-red-200";
      case "En cours":
        return "text-purple-800 border-purple-200";
      default:
        return "text-gray-800 border-gray-200";
    }
  };
  const getRoleColor = (role) =>{
      switch (role) {
      case "Artisan":
        return "text-blue-400";
      default:
        return "text-gray-800";
    }
  }

  return (
    <div className="mx-25 mt-10">
      <h1 className="text-2xl font-bold text-[#1D2B53] mb-5">Activité Récente</h1>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
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
          {tableData.map((item, index) => (
            <tr key={index}>
              <td className="text-center text-xl py-4">{item.action}</td>
              <td className="text-center text-xl py-4">{item.utilisateur}</td>
              <td className={`text-center text-xl py-4 ${getRoleColor(item.role)}`}>{item.role}</td>
              <td className="text-center text-xl py-4">{item.dateHeure}</td>
              <td className={`text-center text-xl py-4 ${getStatusColor(item.statut)}`}>{item.statut}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TableBord;