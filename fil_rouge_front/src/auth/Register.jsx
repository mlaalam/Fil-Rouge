import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../slices/RegisterSlice";
import { useNavigate } from "react-router-dom";
import artis from '../assets/images/elictric.PNG'
import { getUserRole, isAuthenticate } from "../services/auth";
export default function Register() {
   const dispatch = useDispatch();
  const { loading, fieldErrors } = useSelector(
    (state) => state.register
  );
  const navigate = useNavigate();
  const [role, setRole] = useState("client");
  const [nom_complet,setNomCcomplet] = useState('');
  const [email,setEmail] = useState('');
  const [numero,setNumero] = useState('');
  const [password,setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const hendleSubmit = async (e) =>{
      e.preventDefault();
      dispatch(
        RegisterUser({ nom_complet, email, role, numero, password ,passwordConfirm })  
      )
  }
  const isAuth = isAuthenticate();
  useEffect(() => {
    if (isAuth) {
        navigate('/')
    }
  }, [isAuth]);

  return (
    <div className="bg-[#F6EFE9] w-full min-h-screen flex items-center justify-center p-8">
  <div className="bg-white flex w-[70%] rounded-2xl shadow-lg overflow-hidden">
    
    <div className="w-1/2 p-6">
      <h2 className="text-2xl font-bold text-center">Créer un compte</h2>
      <p className="text-center text-gray-500 mt-1">
        Rejoignez Khdamlink gratuitement
      </p>

      <form className="mt-6 space-y-4" onSubmit={hendleSubmit}>
        <div className="border-2 border-gray-400 rounded-full flex p-1">
          <button
            type="button"
            onClick={() => setRole("client")}
            className={`w-1/2 py-2 rounded-full font-semibold transition
              ${role === "client" ? "bg-orange-500 text-white" : "text-gray-700"}`}
          >
            Client
          </button>

          <button
            type="button"
            onClick={() => setRole("artisan")}
            className={`w-1/2 py-2 rounded-full font-semibold transition
              ${role === "artisan" ? "bg-orange-500 text-white" : "text-gray-700"}`}
          >
            Artisan
          </button>
          <input type="hidden" name="role" value={role} />
        </div>

      
        <div>
          <label className="font-semibold">Nom complet</label>
          <input
            type="text"
            placeholder="Votre nom complet"
            onChange={(e) => setNomCcomplet(e.target.value)}
            className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
          />
          {fieldErrors.nom_complet && <p className="text-red-500">{fieldErrors.nom_complet}</p>}
        </div>

        <div>
          <label className="font-semibold">Email</label>
          <input
            type="email"
            placeholder="Votre email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
          />
          {fieldErrors.email && <p className="text-red-500">{fieldErrors.email}</p>}
        </div>

        <div>
          <label className="font-semibold">Téléphone</label>
          <input
            type="text"
            placeholder="+212 06XXXXXX"
            onChange={(e) => setNumero(e.target.value)}
            className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
          />
          {fieldErrors.numero && <p className="text-red-500">{fieldErrors.numero}</p>}
        </div>

        <div>
          <label className="font-semibold">Mot de passe</label>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
          />
           {fieldErrors.password && <p className="text-red-500">{fieldErrors.password}</p>}
        </div>

        <div>
          <label className="font-semibold">Mot de passe confirmé</label>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
          />
           {fieldErrors.password && <p className="text-red-500">{fieldErrors.password}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold mt-4"
        >
          {loading ? "Création..." : "S'inscrire"}
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Vous avez déjà un compte ?{" "}
        <a href="/login" className="text-orange-500 font-semibold">
          Se connecter
        </a>
      </p>
    </div>


    <div className="w-1/2">
      <img
        src={artis}
        alt="image register"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>

  );
}

{/* <div className="bg-[#F6EFE9] w-[100%] flex items-center justify-center p-8"> */}
    //   <div className="bg-white w-[30%]  rounded-2xl p-6 shadow-lg">
    //     <h2 className="text-2xl font-bold text-center">Créer un compte</h2>
    //     <p className="text-center text-gray-500 mt-1">
    //       Rejoignez Khdamlink gratuitement
    //     </p>
    //     <form className="mt-6 space-y-4" onSubmit={hendleSubmit}>
    //     <div className="mt-6 border-2 border-gray-400 rounded-full flex p-1">
    //       <button
    //         type="button"
    //         onClick={() => setRole("client")}
    //         className={`w-1/2 py-2 rounded-full font-semibold transition
    //           ${role === "client"
    //             ? "bg-orange-500 text-white"
    //             : "text-gray-700"
    //           }`}
    //       >
    //         Client
    //       </button>

    //       <button
    //         type="button"
    //         onClick={() => setRole("artisan")}
    //         className={`w-1/2 py-2 rounded-full font-semibold transition
    //           ${role === "artisan"
    //             ? "bg-orange-500 text-white"
    //             : "text-gray-700"
    //           }`}
    //       >
    //         Artisan
    //       </button>
    //       <input type="hidden" name="role" value={role}/>
    //     </div>
        
    //       <div>
    //         <label className="font-semibold">Nom complet</label>
    //         <input
    //           type="text"
    //           placeholder="Votre nom complet"
    //           onChange={(e)=>setNomCcomplet(e.target.value)}
    //           className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
    //         />
    //         {fieldErrors.nom_complet && <p className="text-red-500">{fieldErrors.nom_complet}</p>}
    //       </div>
    //       <div>
    //         <label className="font-semibold">Email</label>
    //         <input
    //           type="email"
    //           placeholder="Votre email"
    //           onChange={(e)=>setEmail(e.target.value)}
    //           className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
    //         />
    //         {fieldErrors.email && <p className="text-red-500">{fieldErrors.email}</p>}
    //       </div>
    //       <div>
    //         <label className="font-semibold">Téléphone</label>
    //         <input
    //           type="text"
    //           placeholder="+212 06XXXXXX"
    //           onChange={(e)=>setNumero(e.target.value)}
    //           className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
    //         />
    //         {fieldErrors.numero && <p className="text-red-500">{fieldErrors.numero}</p>}
    //       </div>
    //       <div>
    //         <label className="font-semibold">Mot de passe</label>
    //         <input
    //           type="password"
    //           placeholder="********"
    //           onChange={(e)=>setPassword(e.target.value)}
    //           className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
    //         />
    //         {fieldErrors.password && <p className="text-red-500">{fieldErrors.password}</p>}
    //       </div>
    //       <div>
    //         <label className="font-semibold">Mot de passe confirmé</label>
    //         <input
    //           type="password"
    //           placeholder="********"
    //           onChange={(e)=>setPasswordConfirm(e.target.value)}
    //           className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
    //         />
    //         {fieldErrors.password && <p className="text-red-500">{fieldErrors.password}</p>}
    //       </div>
          
    //       <button
    //         type="submit"
    //          disabled={loading}
    //         className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold mt-4"
    //       >
    //         {loading ? "Création..." : "S'inscrire"}
    //       </button>
    //     </form>
    //     <p className="text-center text-sm mt-4">
    //       Vous avez déjà un compte ?{" "}
    //       <a href="/login" className="text-orange-500 font-semibold cursor-pointer">
    //         Se connecter
    //       </a>
    //     </p>

    //   </div>
    //   <div className="">
    //     <img src={artis} className="h-full w-full" alt="image register" />
    //   </div>
    // </div>