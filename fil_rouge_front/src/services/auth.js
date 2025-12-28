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
  return role ;
}

export const getUserName = () =>{
  const user = localStorage.getItem('user');
  return user;
}
export const getUserId = () =>{
  const user_id = localStorage.getItem('user_id');
  return user_id;
}