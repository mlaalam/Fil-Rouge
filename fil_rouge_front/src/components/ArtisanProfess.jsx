import artis from '../assets/images/elictric.PNG'
import { FaLocationDot } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import Pagination from './pagination';
function ArtisanProfess() {
  return (
    <><section className="mx-auto max-w-[80%] mb-18 ">
      <h className="text-2xl font-semibold text-[#FA7B0C]">Les artisans professionnels</h>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 flex gap-2 place-items-center mt-4">
          <div className="md:w-full md:h-full bg-white w-full rounded-xl shadow-md  flex flex-col p-4 transition-transform duration-300 hover:-translate-y-2 gap-2">
              <img src={artis} alt="image artisan" className='h-[50%] w-full rounded-xl' />
              <div className='flex justify-between items-center'>
                <h4 className='font-semibold text-[#1F2937]'>Mouad laalam</h4>
                <span className='flex text-[#1F2937] items-center gap-1 text-sm font-medium'><FaLocationDot />Casablanca</span>
                </div>
              <div className="flex justify-between items-center">
                <span className="text-[#2C5DA1] font-medium">Électricité</span>
                <span className="flex items-center gap-1 text-[#1F2937] text-sm font-medium">
                  <MdOutlineWatchLater className="text-lg" />
                  24/7
                </span>
              </div>
              <p>Je suis électricien : j’installe, répare et entretiens les installations électriques afin d’assurer la sécurité et le bon fonctionnement de votre logement ou de vos équipements</p>
              <div className='flex grid md:grid-cols-2 grid-cols-1  md:items-center md:justify-center gap-2'>
                <button className='group text-[#FA7B0C] h-8 border-2 border-[#FA7B0C] shadow-amber-600 rounded-full hover:text-white hover:bg-[#FA7B0C] font-semibold flex justify-center items-center gap-2'>
                  <LuMessageCircle className='text-[#FA7B0C] group-hover:text-white'/> 
                    Contacter
                </button>
                <button className='text-white h-8 bg-[#FA7B0C] shadow-amber-600 rounded-full font-semibold flex justify-center items-center gap-2'><FaRegEye className='text-white' /> Voir profil</button>
              </div>
          </div>
          <div className="md:w-full md:h-full bg-white w-full rounded-xl shadow-md  flex flex-col p-4 transition-transform duration-300 hover:-translate-y-2 gap-2">
              <img src={artis} alt="image artisan" className='h-[50%] w-full rounded-xl' />
              <div className='flex justify-between items-center'>
                <h4 className='font-semibold text-[#1F2937]'>Mouad laalam</h4>
                <span className='flex text-[#1F2937] items-center gap-1 text-sm font-medium'><FaLocationDot />Casablanca</span>
                </div>
              <div className="flex justify-between items-center">
                <span className="text-[#2C5DA1] font-medium">Électricité</span>
                <span className="flex items-center gap-1 text-[#1F2937] text-sm font-medium">
                  <MdOutlineWatchLater className="text-lg" />
                  24/7
                </span>
              </div>
              <p>Je suis électricien : j’installe, répare et entretiens les installations électriques afin d’assurer la sécurité et le bon fonctionnement de votre logement ou de vos équipements</p>
              <div className='flex grid md:grid-cols-2 grid-cols-1  md:items-center md:justify-center gap-2'>
                <button className='group text-[#FA7B0C] h-8 border-2 border-[#FA7B0C] shadow-amber-600 rounded-full hover:text-white hover:bg-[#FA7B0C] font-semibold flex justify-center items-center gap-2'>
                  <LuMessageCircle className='text-[#FA7B0C] group-hover:text-white'/> 
                    Contacter
                </button>
                <button className='text-white h-8 bg-[#FA7B0C] shadow-amber-600 rounded-full font-semibold flex justify-center items-center gap-2'><FaRegEye className='text-white' /> Voir profil</button>
              </div>
          </div>
          <div className="md:w-full md:h-full bg-white w-full rounded-xl shadow-md  flex flex-col p-4 transition-transform duration-300 hover:-translate-y-2 gap-2">
              <img src={artis} alt="image artisan" className='h-[50%] w-full rounded-xl' />
              <div className='flex justify-between items-center'>
                <h4 className='font-semibold text-[#1F2937]'>Mouad laalam</h4>
                <span className='flex text-[#1F2937] items-center gap-1 text-sm font-medium'><FaLocationDot />Casablanca</span>
                </div>
              <div className="flex justify-between items-center">
                <span className="text-[#2C5DA1] font-medium">Électricité</span>
                <span className="flex items-center gap-1 text-[#1F2937] text-sm font-medium">
                  <MdOutlineWatchLater className="text-lg" />
                  24/7
                </span>
              </div>
              <p>Je suis électricien : j’installe, répare et entretiens les installations électriques afin d’assurer la sécurité et le bon fonctionnement de votre logement ou de vos équipements</p>
              <div className='flex grid md:grid-cols-2 grid-cols-1  md:items-center md:justify-center gap-2'>
                <button className='group text-[#FA7B0C] h-8 border-2 border-[#FA7B0C] shadow-amber-600 rounded-full hover:text-white hover:bg-[#FA7B0C] font-semibold flex justify-center items-center gap-2'>
                  <LuMessageCircle className='text-[#FA7B0C] group-hover:text-white'/> 
                    Contacter
                </button>
                <button className='text-white h-8 bg-[#FA7B0C] shadow-amber-600 rounded-full font-semibold flex justify-center items-center gap-2'><FaRegEye className='text-white' /> Voir profil</button>
              </div>
          </div>
          <div className="md:w-full md:h-full bg-white w-full rounded-xl shadow-md  flex flex-col p-4 transition-transform duration-300 hover:-translate-y-2 gap-2">
              <img src={artis} alt="image artisan" className='h-[50%] w-full rounded-xl' />
              <div className='flex justify-between items-center'>
                <h4 className='font-semibold text-[#1F2937]'>Mouad laalam</h4>
                <span className='flex text-[#1F2937] items-center gap-1 text-sm font-medium'><FaLocationDot />Casablanca</span>
                </div>
              <div className="flex justify-between items-center">
                <span className="text-[#2C5DA1] font-medium">Électricité</span>
                <span className="flex items-center gap-1 text-[#1F2937] text-sm font-medium">
                  <MdOutlineWatchLater className="text-lg" />
                  24/7
                </span>
              </div>
              <p>Je suis électricien : j’installe, répare et entretiens les installations électriques afin d’assurer la sécurité et le bon fonctionnement de votre logement ou de vos équipements</p>
              <div className='flex grid md:grid-cols-2 grid-cols-1  md:items-center md:justify-center gap-2'>
                <button className='group text-[#FA7B0C] h-8 border-2 border-[#FA7B0C] shadow-amber-600 rounded-full hover:text-white hover:bg-[#FA7B0C] font-semibold flex justify-center items-center gap-2'>
                  <LuMessageCircle className='text-[#FA7B0C] group-hover:text-white'/> 
                    Contacter
                </button>
                <button className='text-white h-8 bg-[#FA7B0C] shadow-amber-600 rounded-full font-semibold flex justify-center items-center gap-2'><FaRegEye className='text-white' /> Voir profil</button>
              </div>
          </div>
          <div className="md:w-full md:h-full bg-white w-full rounded-xl shadow-md  flex flex-col p-4 transition-transform duration-300 hover:-translate-y-2 gap-2">
              <img src={artis} alt="image artisan" className='h-[50%] w-full rounded-xl' />
              <div className='flex justify-between items-center'>
                <h4 className='font-semibold text-[#1F2937]'>Mouad laalam</h4>
                <span className='flex text-[#1F2937] items-center gap-1 text-sm font-medium'><FaLocationDot />Casablanca</span>
                </div>
              <div className="flex justify-between items-center">
                <span className="text-[#2C5DA1] font-medium">Électricité</span>
                <span className="flex items-center gap-1 text-[#1F2937] text-sm font-medium">
                  <MdOutlineWatchLater className="text-lg" />
                  24/7
                </span>
              </div>
              <p>Je suis électricien : j’installe, répare et entretiens les installations électriques afin d’assurer la sécurité et le bon fonctionnement de votre logement ou de vos équipements</p>
              <div className='flex grid md:grid-cols-2 grid-cols-1  md:items-center md:justify-center gap-2'>
                <button className='group text-[#FA7B0C] h-8 border-2 border-[#FA7B0C] shadow-amber-600 rounded-full hover:text-white hover:bg-[#FA7B0C] font-semibold flex justify-center items-center gap-2'>
                  <LuMessageCircle className='text-[#FA7B0C] group-hover:text-white'/> 
                    Contacter
                </button>
                <button className='text-white h-8 bg-[#FA7B0C] shadow-amber-600 rounded-full font-semibold flex justify-center items-center gap-2'><FaRegEye className='text-white' /> Voir profil</button>
              </div>
          </div>
        </div>
        
    </section>
    <Pagination /></>
  )
}

export default ArtisanProfess