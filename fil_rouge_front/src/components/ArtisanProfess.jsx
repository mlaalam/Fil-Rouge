import artis from '../assets/images/elictric.PNG'
import { FaLocationDot } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getArtisan, showArtisan } from '../slices/artisanSlice';
function ArtisanProfess({searchVille,searchCategory}) {

  const {data:artisans ,loading,error} = useSelector((state)=>state.artisans);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    dispatch(getArtisan());
  },[dispatch]);
  const getJustArtisan = Array.isArray(artisans) 
  ? artisans.filter(u => u.role === 'artisan')
  : [];


  const filterArtisan = getJustArtisan.filter((art)=>{
    return (
      (searchVille === "" || art.ville?.toLowerCase().includes(searchVille.toLowerCase()))&&
      (searchCategory === "" || art.secteur?.toLowerCase().includes(searchCategory.toLowerCase()))
    );
  });
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
        {filterArtisan.slice(0 ,4).map((art)=>(
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
              <p className='line-clamp-2'>{art.propos}</p>
              <div className='flex grid md:grid-cols-2 grid-cols-1  md:items-center md:justify-center gap-2'>
                <button className='group text-[#FA7B0C] h-8 border-2 border-[#FA7B0C] shadow-amber-600 rounded-full hover:text-white hover:bg-[#FA7B0C] font-semibold flex justify-center items-center gap-2'>
                  <LuMessageCircle className='text-[#FA7B0C] group-hover:text-white'/> 
                    Contacter
                </button>
                <button onClick={() => {
                                    dispatch(showArtisan(art.id));
                                    navigate(`/profil/${art.id}`);
                                  }} className= ' cursor-pointer text-white h-8 bg-[#FA7B0C] shadow-amber-600 rounded-full font-semibold flex justify-center items-center gap-2'><FaRegEye className='text-white' /> Voir profil</button>
              </div>
          </div>
        ))}
          
        </div>
        <button className='bg-[#FA7B0C] mx-auto p-4 rounded-xl text-white flex justify-center items-center gap-2 mt-5'><FaArrowRight /> <Link to="/services" >Voir ...</Link></button>
    </section>
    
    </>
  )
}

export default ArtisanProfess