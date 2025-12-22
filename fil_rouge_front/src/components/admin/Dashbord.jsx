import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
function Dashbord() {
  return (
    <div className='bg-[#E5E7EB] w-full h-[1000px]'>
        <div className="bg-white w-[15%] h-full flex flex-col justify-start items-start gap-5 p-8">
            <img className="h-16 w-auto rounded-lg " src={logo} alt="image logo" />
            <Link to='/' >Dashbord</Link>
            <Link to='/' >Dashbord</Link>
            <Link to='/' >Dashbord</Link>
        </div>
    </div>
  )
}

export default Dashbord