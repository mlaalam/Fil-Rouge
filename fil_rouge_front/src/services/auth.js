import api from "./api";

export const auth = {
  register: (data) =>
    api.post("/register", data ),

  login: (email, password) =>
    api.post("/login", { email, password }),

  logout: () => api.post("/logout"),
};
