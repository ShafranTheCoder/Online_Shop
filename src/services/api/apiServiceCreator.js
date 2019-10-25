import axios from 'axios';
import config, { handleInterceptorsResponse, handleInterceptorsError } from './initialConfig';


const apiServiceCreator = url => {
  const api = axios.create({
    ...config,
    timeout: false,
    baseURL: url
  });

  api.interceptors.response.use(
    handleInterceptorsResponse,
    handleInterceptorsError
  );

  return api;
}


export default apiServiceCreator;
