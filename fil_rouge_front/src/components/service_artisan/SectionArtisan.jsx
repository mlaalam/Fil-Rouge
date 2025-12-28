import artis from "../../assets/images/elictric.PNG";
import { FaLocationDot } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Pagination from "../pagination";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getArtisan, showArtisan } from "../../slices/artisanSlice";
function SectionArtisan({villeInput , categoryInput}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {data:artisans ,loading, error} = useSelector((state)=>state.artisans);
  useEffect(()=>{
    dispatch(getArtisan());
  },[dispatch,artisans]);
  const getJustArtisan = Array.isArray(artisans) 
  ? artisans.filter(u => u.role === 'artisan')
  : [];

  const filterArtisanSer = getJustArtisan.filter((art) =>{
    return (
      (villeInput === "" || art.ville?.toLowerCase().includes(villeInput.toLowerCase()))&&
      (categoryInput === "" || art.secteur?.toLowerCase().includes(categoryInput.toLowerCase()))
    );
  });

  useEffect(() => {
  setCurrentPage(1);
}, [villeInput, categoryInput]);

  const totalPages = Math.ceil(filterArtisanSer.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentArtisans = filterArtisanSer.slice(
      indexOfFirstItem,
      indexOfLastItem
    );


  return (
    <div className="mt-15">
      <h3 className="text-xl font-bold text-[#1D2B53] mb-6">Les artisans</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentArtisans.map((art, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col overflow-hidden"
          >
            <img
              src={art.image}
              alt="artisan"
              className="h-38 w-full object-cover"
            />
            <div className="p-4 flex flex-col h-full">
              <h2 className="text-lg font-semibold text-[#1D2B53]">
                {art.nom_complet}
              </h2>

              <p className="text-sm font-semibold text-[#2C5DA1]">{art.secteur}</p>
              <p className="text-sm text-gray-500 flex justify-start items-center gap-2"><FaLocationDot />{art.ville}</p>

              <p className="text-sm text-gray-400 mt-1">
                {art.heures_par_jour}h/{art.jours_de_travail}jour
              </p>

              <div className="flex items-center gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-lg ${
                      star <= art.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  {art.rating}<span className="font-bold">4.3</span> (127 avis)
                </span>
              </div>
              <div className="mt-auto pt-4">
                <button  onClick={() => {
                    dispatch(showArtisan(art.id));
                    navigate(`/profil/${art.id}`);
                  }} className="w-full bg-[#FA7B0C] cursor-pointer hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition flex justify-center items-center gap-2" >
                  <FaEye /> <Link to="/profil">Voir le profil</Link> 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default SectionArtisan;
