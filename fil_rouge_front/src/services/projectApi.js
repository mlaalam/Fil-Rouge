
import api from "./api"; 

export const getUserProject = async () => {
  const res = await api.get("/myprojects");
  return res.data.projects;
};
export const getAllProject = async () => {
  const res = await api.get("/projects");
  return res.data.projects;
};
export const storeProject = async (title,description,image,category) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("category", category);
  formData.append("image", image);
  const res = await api.post("/projects",formData);
  return res.data.projects;
};
export const updateProject = async (id , data) => {
  const res = await api.put(`/projects/${id}`,{data});
  return res.data;
};
export const deleteProject = async (id) => {
  const res = await api.delete(`/projects/${id}`);
  return res.data;
};
export const doneProject = async (id) => {
  const res = await api.put(`/projects/${id}/done`);
  return res.data;
};
