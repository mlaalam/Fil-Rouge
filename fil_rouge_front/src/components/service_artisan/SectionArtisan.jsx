
import { FaLocationDot } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import Pagination from "../pagination";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineWatchLater } from "react-icons/md";
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
  },[dispatch]);
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
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Artisans not found</p>
      </div>
    );
  }

  return (
  
    <><section className="mx-auto max-w-[80%] mb-18 ">
      <h className="text-2xl font-semibold text-[#FA7B0C]">Les artisans professionnels</h>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 flex gap-6 place-items-center mt-4">
        {currentArtisans.map((art)=>(
          <div key={art.id} className=" bg-white w-full rounded-xl shadow-md  flex flex-col p-4 transition-transform duration-300 hover:-translate-y-2 gap-3">
              <img src={art.image} alt="image artisan" className='h-[40%] w-[40%] mx-auto rounded-xl' />
              <div className='flex justify-between items-center'>
                <h4 className='font-semibold text-[#1F2937]'>{art.nom_complet}</h4>
                <span className='flex text-[#1F2937] items-center gap-1 text-sm font-medium'><FaLocationDot />{art.ville}</span>
                </div>
              <div className="flex justify-between items-center">
                <span className="text-[#2C5DA1] font-medium">{art.secteur}</span>
                <span className="flex items-center gap-1 text-[#1F2937] text-sm font-medium">
                  <MdOutlineWatchLater className="text-lg" />
                  {art.heures_par_jour}h/{art.jours_de_travail}j
                </span>
              </div>
              <div className="flex items-center gap-1">
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
              {/* <p className='line-clamp-2'>{art.propos}</p> */}
                <button onClick={() => {
                    dispatch(showArtisan(art.id));
                    navigate(`/profil/${art.id}`);
                  }} className= 'w-full cursor-pointer text-white h-8 bg-[#FA7B0C] shadow-amber-600 rounded-full font-semibold flex justify-center items-center gap-2'><FaRegEye className='text-white' /> Voir profil</button>
          </div>
        ))}
          
        </div>
    </section>
    <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default SectionArtisan;
