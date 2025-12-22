import api from "./api";

export const auth = {
  register: (data) =>
    api.post("/register", data ),

  login: (email, password) =>
    api.post("/login", { email, password }),

  logout: () => api.post("/logout"),
};

export const isAuthenticate = () =>{
  const token = localStorage.getItem('auth_token');
  return !!token;
}

export const getUserRole = () =>{
  const role = localStorage.getItem('role');
  return role;
}