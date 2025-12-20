import { FaKey } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import elc from '../assets/images/tonnerre.png'
import air from '../assets/images/climatisation.png'
import plo from '../assets/images/plomberie.png'

function Services() {
  return (
<section className="px-4 mb-18">
  <h1 className="text-center text-[#FA7B0C] text-2xl font-bold">
    Trouvez l'artisan qu'il vous faut
  </h1>

  <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-7 gap-2 my-6 place-items-center">
    <div className="w-full h-full rounded-xl bg-gradient-to-br from-green-100 to-white shadow-md flex flex-col justify-center items-start p-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-green-500/50">
      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
        🌱
      </div>
      <p className="text-sm font-semibold text-gray-800">Jardinage</p>
    </div>
    <div className="w-full h-full rounded-xl bg-gradient-to-br from-red-290 to-white shadow-md  flex flex-col justify-center items-start p-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-red-500/50">
      <div className='w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-2'>
        <FaKey className="text-red-500 text-xl" />
      </div>
      <p className='text-sm font-semibold text-gray-800'>Serrurerie</p>
    </div>
    <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-200 to-white shadow-md flex flex-col justify-center items-start p-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-500/50">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2">
              <img src={air} alt="image climatisation" />
        </div>
        <p className='text-sm font-semibold text-gray-800'>Climatisation</p>
    </div>
    <div className="w-full h-full rounded-xl bg-gradient-to-br from-red-200 to-white shadow-md flex flex-col justify-center items-start p-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-red-400/50">
        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-2">
              <FaHome className="text-red-500 text-xl" />
        </div>
        <p className='text-sm font-semibold text-gray-800'>Électroménager</p>
    </div>
    <div className="w-full h-full rounded-xl bg-gradient-to-br from-yellow-200 to-white shadow-md flex flex-col justify-center items-start p-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-yellow-500/50">
        <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center mb-2">
              <img src={elc} alt="image Électricité" />
        </div>
        <p className='text-sm font-semibold text-gray-800'>Électricité</p>
    </div>
    <div className="w-full h-full rounded-xl bg-gradient-to-br from-yellow-200 to-white shadow-md flex flex-col justify-center items-start p-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-yellow-500/50">
        <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center mb-2">
              <img src={elc} alt="image Électricité" />
        </div>
        <p className='text-sm font-semibold text-gray-800'>Électricité</p>
    </div>
    <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-300 to-white shadow-md flex flex-col justify-center items-start p-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-600/50">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2">
              <img className="w-8 h-8" src={plo} alt="image plomberie" />
        </div>
        <p className='text-sm font-semibold text-gray-800'>Plomberie</p>
    </div>
    
  </div>
</section>


  )
}

export default Services