import { API_URL } from '@/app/(constants)';
import axios from 'axios';

export const api = axios.create({
  baseURL: `${API_URL}/api`,

  withCredentials: true,
});
