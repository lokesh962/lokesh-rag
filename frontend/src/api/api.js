import axios from "axios";
import { getUserId } from "../utils/user";

const api = axios.create({
  baseURL: "https://lokesh-rag-1.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  config.headers["X-User-ID"] = getUserId();
  return config;
});

export default api;