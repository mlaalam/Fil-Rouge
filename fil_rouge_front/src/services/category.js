import api from "./api"


export const getAllCategory = async () =>{
  const res = await api.get('/categories');
  return res.data.categories;
}

export const saveCategory = async (title,icon) =>{
  const formData = new FormData();
  formData.append('title',title)
  if (icon) formData.append("icon", icon);
  const res = await api.post('/categories',formData);
  // console.log("BACKEND RESPONSE:", res.data);
  return res.data.categorie;
}
export const updateCategory = async (id ,title,icon) =>{
  const formData = new FormData();
  if (title) formData.append('title',title)
  if (icon) formData.append("icon", icon);
  const res = await api.post(`/categories/${id}`,formData);
  return res.data.categorie;
}