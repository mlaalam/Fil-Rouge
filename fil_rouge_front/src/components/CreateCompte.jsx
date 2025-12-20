import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";

function CreateCompte() {
  return (
    <section className='bg-gradient-to-br from-[#FA7B0C] to-[#D97706] w-full h-[280px] flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
                <h4 className='text-white font-semibold mb-3'>Développez votre activité et trouvez de nouveaux clients chaque jour</h4>
                <button className='bg-white rounded-full w-60 h-9 '><Link to="/register" className='text-[#FA7B0C] font-bold flex justify-center items-center gap-2'><IoIosPersonAdd /> Créer un compte artisan</Link></button>
          </div>
    </section>
  )
}

export default CreateCompte