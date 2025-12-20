import { IoSearch } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import outil from '../assets/images/outils.png'
function FindArtisanSteps() {
  return (
    <section className=" mb-18 ">
      <h className="font-semibold text-[#1F2937] mx-[10%] mb-6">Trouvez votre artisan en 3 étapes simples</h>
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 flex gap-2 place-items-center mt-4">
          <div className='flex flex-col place-items-center md:w-full md:h-full'>
            <div className='w-16 h-16 rounded-full bg-[#ffa44a] flex justify-center items-center text-white mb-2'><IoSearch className=" w-8 h-8" /></div>
            <span className="font-semibold mb-2">1. Cherchez</span>
            <p className="max-w-sm text-center ">Utilisez notre moteur de recherche pour trouver l'artisan parfait selon votre ville et le service souhaité.</p>
          </div>
          <div className='flex flex-col place-items-center md:w-full md:h-full'>
            <div className='w-16 h-16 rounded-full bg-[#ffa44a] flex justify-center items-center text-white mb-2'><FaPhone className=" w-8 h-8" /></div>
            <span className="font-semibold mb-2">2. Contactez</span>
            <p className="max-w-sm text-center ">Consultez les profils, lisez les avis clients et contactez directement l'artisan qui vous convient.</p>
          </div>
          <div className='flex flex-col place-items-center md:w-full md:h-full'>
            <div className='w-16 h-16 rounded-full flex justify-center items-center text-white mb-2'><img src={outil} alt="image outils"  className="" /></div>
            <span className="font-semibold mb-2">3. Réparez</span>
            <p className="max-w-sm text-center ">Planifiez l'intervention avec votre artisan certifié et profitez d'un service de qualité garanti.</p>
          </div>
        </div>
    </section>
  )
}

export default FindArtisanSteps