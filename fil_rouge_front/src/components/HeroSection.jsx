import hero from '../assets/images/hero.jpg';
import { IoSearch } from "react-icons/io5";
function HeroSection() {
  return (
    <section className="relative w-full h-[60vh]">
  <img
    src={hero}
    alt="Hero"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center px-4">
    <div className="bg-[#393B3D]/60 rounded-2xl p-6 md:p-8 w-full max-w-4xl text-center">
      <h1 className="text-white text-2xl md:text-4xl font-semibold mb-6">
        Trouvez des artisans près de <br className="hidden md:block" />
        chez vous.
      </h1>
      <div className="flex flex-col md:flex-row items-stretch bg-white rounded-2xl md:rounded-full overflow-hidden shadow-lg p-2 gap-2 md:gap-0">
        <input
          type="text"
          placeholder="Sélectionnez votre zone"
          className="flex-1 px-5 py-4 outline-none text-sm rounded-xl md:rounded-none"
        />
        <div className="hidden md:block w-px h-12 bg-gray-300"></div>
        <input
          type="text"
          placeholder="Service"
          className="flex-1 px-5 py-4 outline-none text-sm rounded-xl md:rounded-none"
        />
        <button className="bg-[#FA7B0C] hover:bg-orange-600 text-white px-8 py-4 rounded-xl md:rounded-full flex items-center justify-center">
          <IoSearch size={20} />
        </button>
      </div>
    </div>

  </div>
</section>

  )
}

export default HeroSection