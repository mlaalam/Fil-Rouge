import api from "./api"


export const getAllArtisan = async () => {
  const res = await api.get('/artisans');
  return res.data.artisans;
}
export const getOneArtisan = async (id) => {
  const res = await api.get(`/artisans/${id}`);
  return res.data.artisan;
}
export const updateArtisan = async (id,nom_complet,image,propos,secteur,ville,jours_de_travail,heures_par_jour,role,numero,password) => {
  const formData = new FormData();
 if (nom_complet) formData.append("nom_complet", nom_complet);
  if (image) formData.append("image", image);
  if (propos) formData.append("propos", propos);
  if (secteur) formData.append("secteur", secteur);
  if (ville) formData.append("ville", ville);
  if (jours_de_travail) formData.append("jours_de_travail", jours_de_travail);
  if (heures_par_jour) formData.append("heures_par_jour", heures_par_jour);
  if (numero) formData.append("numero", numero);
  if (password) formData.append("password", password);
  if (role) formData.append("role", role);
  const res = await api.post(`/artisans/${id}?_method=PATCH`,formData);
  return res.data.artisan;
}

export const supprProfile = async (id) =>{
  await api.delete(`/artisans/${id}`);
  return id;
}
export const approve = async (id) =>{
  const res = await api.put(`artisans/${id}/approve`);
  return res.data.artisan;
}
export const suspend = async (id) =>{
  const res = await api.put(`artisans/${id}/suspend`);
  return res.data.artisan;
}