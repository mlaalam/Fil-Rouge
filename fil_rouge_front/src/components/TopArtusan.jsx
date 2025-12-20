import man from '../assets/images/utilisateur.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
function TopArtusan() {
  


  return (
    <section className="mx-auto max-w-[80%] mb-18">
      <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="bg-gradient-to-br from-blue-200 to-white rounded-xl shadow-md p-4"
        >
          <h1 className="text-[#FA7B0C] text-2xl font-bold">Top artisan</h1>
        <p className=" mb-8">Les professionnels les mieux notés par nos clients</p>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 place-items-center ">
        <div className="md:w-full md:h-full bg-white w-full rounded-xl shadow-md  flex flex-col p-4 transition-transform duration-300 hover:-translate-y-2 gap-2">
            <div className='w-3 h-3 rounded-full bg-green-500'></div>
            <img src={man} alt="image man" className='w-14 h-14 mx-auto' />
            <h1 className='font-semibold text-center'>Mouad laalam</h1>
            <div className='bg-[#F7D19C] rounded-full w-2/3 mx-auto flex justify-center items-center'><span className=''>Électroménager</span></div>
            <div className='w-2/3 mx-auto flex justify-center items-center gap-2'><FaLocationDot /><span className=''>Casablanca</span></div>
            <div className='w-2/3 mx-auto flex justify-center items-center gap-2'><FaStar  className='text-yellow-500' /><span className='font-bold'>4.9 </span>(127 avis)</div>
            <div className='w-full bg-[#FA7B0C] rounded-full mx-auto flex justify-center items-center gap-2'><FaRegEye className='text-white' /><button className='text-white font-semibold h-10'>Voir profil</button></div>
        </div>
        <div className="md:w-full md:h-full bg-white w-full rounded-xl shadow-md  flex flex-col p-4 transition-transform duration-300 hover:-translate-y-2 gap-2">
            <div className='w-3 h-3 rounded-full bg-green-500'></div>
            <img src={man} alt="image man" className='w-14 h-14 mx-auto' />
            <h1 className='font-semibold text-center'>Mouad laalam</h1>
            <div className='bg-[#F7D19C] rounded-full w-2/3 mx-auto flex justify-center items-center'><span className=''>Électroménager</span></div>
            <div className='w-2/3 mx-auto flex justify-center items-center gap-2'><FaLocationDot /><span className=''>Casablanca</span></div>
            <div className='w-2/3 mx-auto flex justify-center items-center gap-2'><FaStar  className='text-yellow-500' /><span className='font-bold'>4.9 </span>(127 avis)</div>
            <div className='w-full bg-[#FA7B0C] rounded-full mx-auto flex justify-center items-center gap-2'><FaRegEye className='text-white' /><button className='text-white font-semibold h-10'>Voir profil</button></div>
        </div>
        <div className="md:w-full md:h-full bg-white w-full rounded-xl shadow-md  flex flex-col p-4 transition-transform duration-300 hover:-translate-y-2 gap-2">
            <div className='w-3 h-3 rounded-full bg-red-500'></div>
            <img src={man} alt="image man" className='w-14 h-14 mx-auto' />
            <h1 className='font-semibold text-center'>Mouad laalam</h1>
            <div className='bg-[#F7D19C] rounded-full w-2/3 mx-auto flex justify-center items-center'><span className=''>Électroménager</span></div>
            <div className='w-2/3 mx-auto flex justify-center items-center gap-2'><FaLocationDot /><span className=''>Casablanca</span></div>
            <div className='w-2/3 mx-auto flex justify-center items-center gap-2'><FaStar  className='text-yellow-500' /><span className='font-bold'>4.9 </span>(127 avis)</div>
            <div className='w-full bg-[#FA7B0C] rounded-full mx-auto flex justify-center items-center gap-2'><FaRegEye className='text-white' /><button className='text-white font-semibold h-10'>Voir profil</button></div>
        </div>
        <div className="md:w-full md:h-full bg-white w-full rounded-xl shadow-md  flex flex-col p-4 transition-transform duration-300 hover:-translate-y-2 gap-2">
            <div className='w-3 h-3 rounded-full bg-green-500'></div>
            <img src={man} alt="image man" className='w-14 h-14 mx-auto' />
            <h1 className='font-semibold text-center'>Mouad laalam</h1>
            <div className='bg-[#F7D19C] rounded-full w-2/3 mx-auto flex justify-center items-center'><span className=''>Électroménager</span></div>
            <div className='w-2/3 mx-auto flex justify-center items-center gap-2'><FaLocationDot /><span className=''>Casablanca</span></div>
            <div className='w-2/3 mx-auto flex justify-center items-center gap-2'><FaStar  className='text-yellow-500' /><span className='font-bold'>4.9 </span>(127 avis)</div>
            <div className='w-full bg-[#FA7B0C] rounded-full mx-auto flex justify-center items-center gap-2'><FaRegEye className='text-white' /><button className='text-white font-semibold h-10'>Voir profil</button></div>
        </div>
        <div className="md:w-full md:h-full bg-white w-full rounded-xl shadow-md  flex flex-col p-4 transition-transform duration-300 hover:-translate-y-2 gap-2">
            <div className='w-3 h-3 rounded-full bg-red-500'></div>
            <img src={man} alt="image man" className='w-14 h-14 mx-auto' />
            <h1 className='font-semibold text-center'>Mouad laalam</h1>
            <div className='bg-[#F7D19C] rounded-full w-2/3 mx-auto flex justify-center items-center'><span className=''>Électroménager</span></div>
            <div className='w-2/3 mx-auto flex justify-center items-center gap-2'><FaLocationDot /><span className=''>Casablanca</span></div>
            <div className='w-2/3 mx-auto flex justify-center items-center gap-2'><FaStar  className='text-yellow-500' /><span className='font-bold'>4.9 </span>(127 avis)</div>
            <div className='w-full bg-[#FA7B0C] rounded-full mx-auto flex justify-center items-center gap-2'><FaRegEye className='text-white' /><button className='text-white font-semibold h-10'>Voir profil</button></div>
        </div>
      </div>  
      </motion.div>
      
    </section>
  )
}

export default TopArtusan