import man from '../assets/images/utilisateur.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function TopArtusan() {
  const tableData = [
    {
      id: "1",
      utilisateur: "Mohammed Alami",
      category: "Plomberie",
      ville: "casablanca",
      jours_de_travail: "4",
      heures_par_jour: "8",
      desp:1
    },
    {
      id: "2",
      utilisateur: "Fatima Zahra",
      category: "Peinture",
      ville: "Marrakech",
      jours_de_travail: "7",
      heures_par_jour: "8",
      desp:0
    },
    {
      id: "3",
      utilisateur: "Youssef Bennani",
      category: "Chauffage",
      ville: "rabat",
      jours_de_travail: "5",
      heures_par_jour: "8",
      desp:1
    },
    {
      id: "4",
      utilisateur: "Ahmed Tazi",
      category: "Serrurerie",
      ville: "fes",
      jours_de_travail: "6",
      heures_par_jour: "8",
      desp:0
    },
    {
      id: "5",
      utilisateur: "Sanaa El Idrissi",
      category: "Électricité",
      ville: "casablanca",
      jours_de_travail: "7",
      heures_par_jour: "8",
      desp:1
    },
  ];

  const getCategoryColor = (status) => {
    switch (status) {
      case "Électricité":
        return "text-gray-800 bg-yellow-200";
      case "Serrurerie":
        return "text-gary-800 bg-green-200";
      case "Chauffage":
        return "text-gray-800 bg-blue-200";
      case "Peinture":
        return "text-gray-800 bg-red-200";
      case "Plomberie":
        return "text-purple-800 bg-purple-200";
      default:
        return "text-gray-800  bg-gray-200";
    }
  };
  const getDespColor = (status) =>{
    switch(status){
      case 1:
        return "bg-green-500";
      default:
        return "bg-red-500";
    }
  }

  return (
    <section className="mx-auto max-w-[80%] mb-18">
          <h1 className="text-[#FA7B0C] text-2xl font-bold">Top artisan</h1>
        <p className=" mb-8">Les professionnels les mieux notés par nos clients</p>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 place-items-center ">
        {tableData.map((art)=>(
          // <div key={art.id}>
            <div key={art.id}  className="md:w-full md:h-full bg-white w-full rounded-xl border-3 border-gray-300 shadow-[0_4px_12px_rgba(156,163,175,0.6)]  flex flex-col p-4 transition-transform duration-300 hover:-translate-y-2 gap-2">
              <div className={`w-3 h-3 rounded-full ${getDespColor(art.desp)}`}></div>
              <img src={man} alt="image man" className='w-14 h-14 mx-auto' />
              <h1 className='font-semibold text-center'>{art.utilisateur}</h1>
              <div className={`${getCategoryColor(art.category)} rounded-full w-2/3 mx-auto flex justify-center items-center`}><span className=''>{art.category}</span></div>
              <div className='w-2/3 mx-auto flex justify-center items-center gap-2'><FaLocationDot /><span className=''>{art.ville}</span></div>
              <div className='w-2/3 mx-auto flex justify-center items-center gap-2'><FaStar  className='text-yellow-500' /><span className='font-bold'>4.9 </span>(127 avis)</div>
              <div className='w-full bg-[#FA7B0C] rounded-full mx-auto flex justify-center items-center gap-2'><FaRegEye className='text-white' /><button className='text-white font-semibold h-10'>Voir profil</button></div>
            </div>
          // </div>
        ))}
      
      </div>  
      
    </section>
  )
}

export default TopArtusan