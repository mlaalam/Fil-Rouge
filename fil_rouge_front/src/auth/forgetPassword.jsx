import { useState } from "react";

function forgetPassword() {
  const [email , setEmail] = useState('');
  return (
    <div className="min-h-screen bg-[#F6EFE9] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg">
        {/* <h2 className="text-2xl font-bold text-center">Connexion</h2> */}
        <p className="text-center text-gray-500 mt-1">
          Mot de passe oublié
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="Votre email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-orange-400"
            />
            {/* {fieldErrors?.email && (
              <p className="text-red-500">{fieldErrors.email[0]}</p>
            )} */}
          </div>
          <button
            type="submit"
            // disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold mt-4"
          >
            {/* {loading ? "Connexion en cours..." : "Se connecter"} */} send
          </button>
        </form>
      </div>
    </div>
  );
}

export default forgetPassword