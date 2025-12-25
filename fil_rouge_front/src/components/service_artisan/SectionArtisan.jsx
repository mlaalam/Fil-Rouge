import artis from "../../assets/images/elictric.PNG";
import { FaLocationDot } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Pagination from "../pagination";
import { Link } from "react-router-dom";
function SectionArtisan() {
  const tableData = [
    {
      id: "1",
      utilisateur: "Mohammed Alami",
      category: "Plomberie",
      ville: "casablanca",
      jours_de_travail: "4",
      heures_par_jour: "8",
      desicrption: "En attente",
    },
    {
      id: "2",
      utilisateur: "Fatima Zahra",
      category: "Peinture",
      ville: "Marrakech",
      jours_de_travail: "7",
      heures_par_jour: "8",
      desicrption:
        "Je suis électricien : j’installe, répare et entretiens les installations électriques afin d’assurer la sécurité et le bon fonctionnement de votre logement ou de vos équipements",
    },
    {
      id: "3",
      utilisateur: "Youssef Bennani",
      category: "Chauffage",
      ville: "rabat",
      jours_de_travail: "5",
      heures_par_jour: "8",
      desicrption:
        "Je suis électricien : j’installe, répare et entretiens les installations électriques afin d’assurer la sécurité et le bon fonctionnement de votre logement ou de vos équipements",
    },
    {
      id: "4",
      utilisateur: "Ahmed Tazi",
      category: "Serrurerie",
      ville: "fes",
      jours_de_travail: "6",
      heures_par_jour: "8",
      desicrption:
        "Je suis électricien : j’installe, répare et entretiens les installations électriques afin d’assurer la sécurité et le bon fonctionnement de votre logement ou de vos équipements",
    },
    {
      id: "5",
      utilisateur: "Sanaa El Idrissi",
      category: "Électricité",
      ville: "casablanca",
      jours_de_travail: "7",
      heures_par_jour: "8",
      desicrption:
        "Je suis électricien : j’installe, répare et entretiens les installations électriques afin d’assurer la sécurité et le bon fonctionnement de votre logement ou de vos équipements",
    },
  ];
  return (
    <div className="mt-15">
      <h3 className="text-xl font-bold text-[#1D2B53] mb-6">Les artisans</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tableData.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col overflow-hidden"
          >
            <img
              src={artis}
              alt="artisan"
              className="h-48 w-full object-cover"
            />

            {/* CONTENT */}
            <div className="p-4 flex flex-col h-full">
              <h2 className="text-lg font-semibold text-[#1D2B53]">
                {cat.utilisateur}
              </h2>

              <p className="text-sm font-semibold text-[#2C5DA1]">{cat.category}</p>
              <p className="text-sm text-gray-500 flex justify-start items-center gap-2"><FaLocationDot />{cat.ville}</p>

              <p className="text-sm text-gray-400 mt-1">
                {cat.heures_par_jour}h/{cat.jours_de_travail}jour
              </p>

              <div className="flex items-center gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-lg ${
                      star <= cat.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  {cat.rating}<span className="font-bold">4.3</span> (127 avis)
                </span>
              </div>
              <div className="mt-auto pt-4">
                <button className="w-full bg-[#FA7B0C] hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition flex justify-center items-center gap-2" >
                  <FaEye /> <Link to="/profil">Voir le profil</Link> 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default SectionArtisan;
