import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser, resetRegister } from "../slices/RegisterSlice";

export default function Register() {
   const dispatch = useDispatch();
  const { loading, success, fieldErrors } = useSelector(
    (state) => state.register
  );
  const [role, setRole] = useState("client");
  const [nom,setNom] = useState('');
  const [prenom,setPrenom] = useState('');
  const [email,setEmail] = useState('');
  const [numero,setNumero] = useState('');
  const [password,setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const hendleSubmit = async (e) =>{
      e.preventDefault();
      dispatch(
        RegisterUser({ nom, prenom, email, role, numero, password ,passwordConfirm })
      )
  }
    useEffect(() => {
    if (success) {
      dispatch(resetRegister());
    }
  }, [success, dispatch]);

  return (
    <div className="min-h-screen bg-[#F6EFE9] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-center">Créer un compte</h2>
        <p className="text-center text-gray-500 mt-1">
          Rejoignez Khdamlink gratuitement
        </p>
        <form className="mt-6 space-y-4" onSubmit={hendleSubmit}>
        <div className="mt-6 border-2 border-gray-400 rounded-full flex p-1">
          <button
            type="button"
            onClick={() => setRole("client")}
            className={`w-1/2 py-2 rounded-full font-semibold transition
              ${role === "client"
                ? "bg-orange-500 text-white"
                : "text-gray-700"
              }`}
          >
            Client
          </button>

          <button
            type="button"
            onClick={() => setRole("artisan")}
            className={`w-1/2 py-2 rounded-full font-semibold transition
              ${role === "artisan"
                ? "bg-orange-500 text-white"
                : "text-gray-700"
              }`}
          >
            Artisan
          </button>
          <input type="hidden" name="role" value={role}/>
        </div>
        
          <div>
            <label className="font-semibold">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              onChange={(e)=>setNom(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
            />
            {fieldErrors.nom && <p className="text-red-500">{fieldErrors.nom}</p>}
          </div>
          <div>
            <label className="font-semibold">Prenom</label>
            <input
              type="text"
              placeholder="Votre prenom"
              onChange={(e)=>setPrenom(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
            />
            {fieldErrors.prenom && <p className="text-red-500">{fieldErrors.prenom}</p>}
          </div>
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="Votre email"
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
            />
            {fieldErrors.email && <p className="text-red-500">{fieldErrors.email}</p>}
          </div>
          <div>
            <label className="font-semibold">Téléphone</label>
            <input
              type="text"
              placeholder="+212 06XXXXXX"
              onChange={(e)=>setNumero(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
            />
            {fieldErrors.numero && <p className="text-red-500">{fieldErrors.numero}</p>}
          </div>
          <div>
            <label className="font-semibold">Mot de passe</label>
            <input
              type="password"
              placeholder="********"
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
            />
            {fieldErrors.password && <p className="text-red-500">{fieldErrors.password}</p>}
          </div>
          <div>
            <label className="font-semibold">Mot de passe confirmé</label>
            <input
              type="password"
              placeholder="********"
              onChange={(e)=>setPasswordConfirm(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
            />
            {fieldErrors.password && <p className="text-red-500">{fieldErrors.password}</p>}
          </div>
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1" />
            <p>
              J'accepte les{" "}
              <span className="underline cursor-pointer">
                conditions d'utilisation
              </span>{" "}
              et la{" "}
              <span className="underline cursor-pointer">
                politique de confidentialité
              </span>
            </p>
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
          <a href="/login" className="text-orange-500 font-semibold cursor-pointer">
            Se connecter
          </a>
        </p>

      </div>
    </div>
  );
}
