import { FaStar } from "react-icons/fa";
import man from '../assets/images/utilisateur.png'
import CommentCard from "./CommentCard";
function Comments() {
  return (

        <section className="mb-18 max-w-[80%] mx-auto">
        <h className="font-semibold text-[#1F2937] mb-6">Des milliers de clients satisfaits</h>
          <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 flex gap-2 place-items-center mt-4">
            <div className='flex flex-col md:w-full md:h-full bg-white rounded-xl p-4'>
              <div className="flex gap-1 mb-4">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-gray-300" />
              </div>
              <p className="max-w-sm mt-2">Utilisez notre moteur de recherche pour trouver l'artisan parfait selon votre ville et le service souhaité.</p>
            <div className="flex items-center gap-4 mt-3">
              <img src={man} alt="image man" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <span className="text-gray-700 font-semibold">Hamza</span>
                <span className="text-gray-500 text-sm">Casablanca</span>
              </div>
            </div>
            </div>
            <div className='flex flex-col md:w-full md:h-full bg-white rounded-xl p-4'>
              <div className="flex gap-1 mb-4">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-gray-300" />
              </div>
              <p className="max-w-sm mt-2">Utilisez notre moteur de recherche pour trouver l'artisan parfait selon votre ville et le service souhaité.</p>
            <div className="flex items-center gap-4 mt-3">
              <img src={man} alt="image man" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <span className="text-gray-700 font-semibold">Hamza</span>
                <span className="text-gray-500 text-sm">Casablanca</span>
              </div>
            </div>
            </div>
            <div className='flex flex-col md:w-full md:h-full bg-white rounded-xl p-4'>
              <div className="flex gap-1 mb-4">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-gray-300" />
              </div>
              <p className="max-w-sm mt-2">Utilisez notre moteur de recherche pour trouver l'artisan parfait selon votre ville et le service souhaité.</p>
            <div className="flex items-center gap-4 mt-3">
              <img src={man} alt="image man" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <span className="text-gray-700 font-semibold">Hamza</span>
                <span className="text-gray-500 text-sm">Casablanca</span>
              </div>
            </div>
            </div>
            <CommentCard />
          </div>
          
      </section>
      
    
    
  )
}

export default Comments