import axios from "axios";
export const baseURL = "http://127.0.0.1:8000/";
import { get_access_token } from "./userService";
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json",
  },
});

localStorage.setItem(
  "refresh",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4OTg0MTU3NSwiaWF0IjoxNzg5NzU1MTc1LCJqdGkiOiJmMmExZjcxMmU3MDE0NmRhOWZhZDk1YTc4YzBkZDI2MCIsInVzZXJfaWQiOiI0In0.e8aif97YvNkUi6tHuk0ZvP88Kz9AgOf8YW72uBHcGgM",
);

api.interceptors.request.use((config) => {
  const access = localStorage.getItem("access");

  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const new_access = await get_access_token();

        originalRequest.headers.Authorization = `Bearer ${new_access}`;

        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
