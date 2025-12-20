import hero from '../assets/images/hero.jpg';
import { IoSearch } from "react-icons/io5";
function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[60vh] mb-18">
      <img
        src={hero}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4 md:px-10">
        
        <div className="bg-[#393B3D]/50  rounded-xl p-4 md:p-6 w-full max-w-md md:max-w-xl">
          
          
          <h1 className="text-white text-xl md:text-3xl font-semibold mb-4 text-center md:text-left">
            Trouvez des artisans près de <br className="hidden md:block" />
            chez vous.
          </h1>

          <div className="flex flex-col md:flex-row items-stretch md:items-center bg-white rounded-2xl md:rounded-full overflow-hidden shadow-lg gap-2 md:gap-0 p-2 md:p-0">
            
            <input
              type="text"
              placeholder="sélectionnez votre zone"
              className="w-full md:flex-1 px-4 py-3 outline-none text-sm rounded-xl md:rounded-none"
            />

            <div className="hidden md:block w-px h-6 bg-gray-300"></div>

            <input
              type="text"
              placeholder="service"
              className="w-full md:flex-1 px-4 py-3 outline-none text-sm rounded-xl md:rounded-none"
            />

            <button className="bg-[#FA7B0C] hover:bg-orange-600 text-white px-6 py-3 rounded-full md:rounded-full flex justify-center items-center">
              <IoSearch />
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection