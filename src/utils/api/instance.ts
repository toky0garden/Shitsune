import { API_URL } from "@/constants";
import axios from "axios";

export const api = axios.create({
  baseURL: `http://${API_URL}/api`,

  withCredentials: true,
});
