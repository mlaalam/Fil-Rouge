
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
  return res.data.project;
};
export const updateProject = async (id, title, description, image, category) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("category", category);
  if (image) {
    formData.append("image", image);
  }

  const res = await api.post(`/projects/${id}?_method=PUT`, formData);
  return res.data.project; 
};
export const deleteProject = async (id) => {
  const res = await api.delete(`/projects/${id}`);
  return id;
};
export const finProject = async (id) => {
  const res = await api.put(`/projects/${id}/done`);
  return res.data.project;
};
