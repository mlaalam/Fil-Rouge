import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Pagination() {
  return (
    <div className='mx-auto flex justify-center items-center mb-18 gap-4' >
        <button className='border-[#1F2937]  hover:bg-[#FA7B0C] w-10 h-10 rounded-xl text-[#1F2937] hover:text-white flex justify-center items-center font-semibold'><IoIosArrowBack /></button>
        <button className='bg-[#FA7B0C] w-10 h-10 rounded-xl text-white'>1</button>
        <button className='border-[#FA7B0C] border-2 w-10 h-10 rounded-xl text-black'>2</button>
        <button className='border-[#FA7B0C] border-2 w-10 h-10 rounded-xl text-black'>3</button>
        <div className=' flex justify-center items-center'>...</div>
        <button className='border-[#FA7B0C] border-2 w-10 h-10 rounded-xl text-black'>12</button>
        <button className='border-[#1F2937]  hover:bg-[#FA7B0C] w-10 h-10 rounded-xl text-[#1F2937] hover:text-white flex justify-center items-center font-semibold'><IoIosArrowForward /></button>
    </div>
  )
}

export default Pagination