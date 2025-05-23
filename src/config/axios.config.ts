import axios from "axios";
import { APP_CONFIG } from "./app.config";

const apiClient = axios.create({
  baseURL: APP_CONFIG.env.BACKEND_API,
  withCredentials: true,
});

export default apiClient;
