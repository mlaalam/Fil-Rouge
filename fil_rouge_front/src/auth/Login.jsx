import { useState ,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../slices/LoginSlice";
import { Link, useNavigate } from "react-router-dom";
import { getUserRole, isAuthenticate } from "../services/auth";
export default function Login() {
  const dispatch = useDispatch();
  const { loading, error, fieldErrors } = useSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }))
  };
  const isAuth = isAuthenticate();
  useEffect(() => {
      if (isAuth) {
        const role = getUserRole();
        if(role === 'admin'){
          navigate('/dashbord')
        }else{
          navigate('/')
        }
          
      }
    }, [isAuth]);

  return (
    <div className="min-h-screen bg-[#F6EFE9] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-center">Connexion</h2>
        <p className="text-center text-gray-500 mt-1">
          Connectez-vous à votre compte pour continuer
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
            />
            {fieldErrors?.email && (
              <p className="text-red-500">{fieldErrors.email[0]}</p>
            )}
          </div>

          <div>
            <label className="font-semibold">Mot de passe</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
            />
            {fieldErrors?.password && (
              <p className="text-red-500">{fieldErrors.password[0]}</p>
            )}
          </div>
          <div className="text-sm text-right">
            <Link
              to="/forgot-password"
              className="text-orange-500 hover:underline font-semibold">
              Mot de passe oublié ?
            </Link>
          </div>
          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold mt-4"
          >
            {loading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Vous n'avez pas de compte ?{" "}
          <Link to="/register" className="text-orange-500 font-semibold cursor-pointer">
            Inscrivez-vous
          </Link>
        </p>
      </div>
    </div>
  );
}
