import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCategory } from "../../slices/Category";
import { editProfile, getArtisan } from "../../slices/artisanSlice";
import { getUserRole } from "../../services/auth";


function EditProfil({showForm , setShowForm , profile}) {
  const [nom_complet , setNom_complet] = useState('')
  const [image , setImage] = useState(null)
  const [propos , setPropos] = useState('')
  const [secteur , setSecteur] = useState('')
  const [ville , setVille] = useState('')
  const [jours_de_travail , setJours_de_travail] = useState('')
  const [heures_par_jour , setHeures_par_jour] = useState('')
  const [role , setRole] = useState('')
  const [numero , setNumero] = useState('')
  const [password , setPasaword] = useState('')
  const dispatch = useDispatch();
  const {data:categories} = useSelector((state)=>state.categories);
  const {data:artisan, loadingEdit ,fieldErrors} = useSelector((state)=>state.artisans);
  useEffect(()=>{
    dispatch(getCategory());
  },[dispatch]);
useEffect(() => {
  if (profile) {
    setNom_complet(profile.nom_complet || "");
    setPropos(profile.propos || "");
    setSecteur(profile.secteur || "");
    setVille(profile.ville || "");
    setJours_de_travail(profile.jours_de_travail || "");
    setHeures_par_jour(profile.heures_par_jour || "");
    setNumero(profile.numero || "");
    setRole(profile.role || "");
  }
}, [profile]);

  const hendelSubmit = async (e) =>{
    e.preventDefault();
    const res = await dispatch(
    editProfile({
      id: profile.id,
      nom_complet,
      image,
      propos,
      secteur,
      ville,
      jours_de_travail,
      heures_par_jour,
      role,
      numero,
      password,
    })
  );
  if (editProfile.fulfilled.match(res)) {
    dispatch(getArtisan())
    setShowForm(false); 
    }
  }
  const roleUser = getUserRole();
  return (
    <div>
      <div onClick={()=>setShowForm(!showForm)} className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div onClick={(e)=>e.stopPropagation()} className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Modifier le profil
        </h2>
        <form className="space-y-4" onSubmit={hendelSubmit}>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 mb-2" />
            <input
              type="file"
              onChange={(e)=>setImage(e.target.files[0])}
              accept="image/*"
              className="text-sm text-gray-600"
            />
            {fieldErrors.image && <p className="text-red-500">{fieldErrors.image}</p>}
          </div>
          <input
            type="text"
            value={nom_complet}
            onChange={(e)=>setNom_complet(e.target.value)}
            placeholder="Nom complet"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          {fieldErrors.nom_complet && <p className="text-red-500">{fieldErrors.nom_complet}</p>}
          <input
            type="text"
            placeholder="Ville"
            value={ville}
            onChange={(e)=>setVille(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          {fieldErrors.ville && <p className="text-red-500">{fieldErrors.ville}</p>}
          <input
            type="text"
            placeholder="New password"
            value={password}
            onChange={(e)=>setPasaword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          /> 
          {fieldErrors.password && <p className="text-red-500">{fieldErrors.password}</p>}
          {roleUser === 'artisan' ? (
            <div className="grid grid-cols-2 gap-3">
            <select value={secteur} onChange={(e)=>setSecteur(e.target.value)}  className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="">Select Secteur</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.title}>{cat.title}</option>
                  ))}
            </select>
            <select value={role} onChange={(e)=>setRole(e.target.value)}  className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="">Select Role</option>
                    <option value="client">Client</option>
                    <option value="artisan">Artisan</option>
            </select>
          </div>
          ): ''
          
        }
          
          <input
            type="text"
            placeholder="+ 212 XXXXXXXX"
            value={numero}
            onChange={(e)=>setNumero(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          {fieldErrors.numero && <p className="text-red-500">{fieldErrors.numero}</p>}
          <textarea
            rows="3"
            placeholder="À propos"
            value={propos}
            onChange={(e)=>setPropos(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          {roleUser === 'artisan'?
          (
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Jours / semaine"
              value={jours_de_travail}
              onChange={(e)=>setJours_de_travail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="number"
              placeholder="Heures / jour"
              value={heures_par_jour}
              onChange={(e)=>setHeures_par_jour(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>  
          ): ''
        }
          
          <div className="flex justify-end gap-3 pt-4">
            <button onClick={()=>setShowForm(!showForm)}
              type="button"
              className="px-5 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              { loadingEdit ? 'Enregistrer ...' : 'Enregistrer'}
            </button>
          </div>

        </form>
      </div>
    </div>
    </div>
  )
}

export default EditProfil