import axios from 'axios';
import initialConfig, { handleInterceptorsResponse, handleInterceptorsError } from './initialConfig';

const apiService = axios.create({ ...initialConfig, baseURL: process.env.REACT_APP_API });

apiService.interceptors.response.use(
  handleInterceptorsResponse,
  handleInterceptorsError
);

export default apiService;
