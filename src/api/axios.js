import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Tambahkan token kalau ada
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // atau dari state manager
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
