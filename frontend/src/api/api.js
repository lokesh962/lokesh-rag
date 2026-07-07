import axios from "axios";
import { getUserId } from "../utils/user";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach the user ID to every request
api.interceptors.request.use((config) => {
  config.headers["X-User-ID"] = getUserId();
  return config;
});

export default api;