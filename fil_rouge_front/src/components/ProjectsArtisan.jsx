
import { FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProject } from '../slices/projectSlice';
import Pagination from "./pagination";
function ProjectsArtisan() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const {data:projects ,loading} = useSelector((state)=>state.projects);
  useEffect(()=>{
    dispatch(getProject())
  },[dispatch])

  const getStatusColor = (status) =>{
    switch(status){
      case "Terminé":
        return "text-green-500";
      default:
        return "text-red-500";
    }
  }
  const totalPages = Math.ceil(projects.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentArtisans = projects.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
  return (
    <><section className="mx-auto max-w-[80%] mb-18 ">
        <h className="text-2xl font-semibold text-[#FA7B0C]">Les projets</h>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-4 flex gap-6 place-items-center mt-4">
          {currentArtisans.map((art)=>(
            <div key={art.id} className=" bg-white w-full rounded-xl shadow-md  flex flex-col p-4 transition-transform duration-300 hover:-translate-y-2 gap-3">
                <img src={art.image} alt="image artisan" className='w-full h-50 rounded-xl' />
                <div className='flex justify-between items-center'>
                  <h4 className='font-semibold text-[#1F2937]'>{art.artisan.nom_complet}</h4>
                  <span className='flex text-[#1F2937] items-center gap-1 text-sm font-medium'>{art.title}</span>
                  </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#2C5DA1] font-medium">{art.category.title}</span>
                  <span className={`flex items-center gap-1 text-[#1F2937] text-sm font-medium ${getStatusColor(art.date_fin)}`}>
                    {art.date_fin ? 'Terminé' : 'En cours' }
                  </span>
                </div>
                <p className='line-clamp-2'>{art.description}</p>
                  <button className= 'w-full cursor-pointer text-white h-8 bg-[#FA7B0C] shadow-amber-600 rounded-full font-semibold flex justify-center items-center gap-2'><FaRegEye className='text-white' /> Voir project</button>
            </div>
          ))}
            
          </div>
          {/* <button className='bg-[#FA7B0C] mx-auto p-4 rounded-xl text-white flex justify-center items-center gap-2 mt-5'><FaArrowRight /> <Link to="/services" >Voir ...</Link></button> */}
      </section>
        <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </>
  )
}

export default ProjectsArtisan