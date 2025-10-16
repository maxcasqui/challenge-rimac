import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rimac-front-end-challenge.netlify.app/api/',
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
