import api from "./api"


export const getAllArtisan = async () => {
  const res = await api.get('/artisans');
  return res.data.artisans;
}
export const getOneArtisan = async (id) => {
  const res = await api.get(`/artisans/${id}`);
  return res.data.artisan;
}
export const updateArtisan = async (id,data) => {
  const res = await api.post(`/artisans/${id}`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return res.data.artisan;
}