import axios from "axios";
axios.defaults.withCredentials = true;

const api = axios.create({
	baseURL: "http://localhost:8000/api/v1",
	withCredentials: true,
	// baseURL: "http://local"
});

export const googleAuth = (code) => api.get(`/auth/google?code=${code}`);
export const loginAuth = (payload) => api.post('./auth/login', payload);
export const signupAuth = (payload) => api.post("./auth/signup", payload);
export const logoutAuth = () => api.post("./auth/logout");

export const getAllLocations = () => api.get("/doctor");

export const getUserData = () => api.get("/user");
// export const getAllUsers = () => api.get("/user/admin/");
// export const deleteUser = (id) => api.delete(`/user/admin?id=${id}`);