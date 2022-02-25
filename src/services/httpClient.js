import Axios from 'axios';

// import { COOKIE_KEYS, getCookie } from 'utils/api-request.util';

export const REQUEST_TIMEOUT = 200000;

const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  timeout: REQUEST_TIMEOUT
});

axiosInstance.interceptors.request.use(function (config) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const userToken = 'Some dummy user token';// getCookie(COOKIE_KEYS.ACCESS_TOKEN);

  if (apiKey) {
    config.params.apiKey = apiKey;
  }

  if (userToken) {
    config.headers.Authorization = `Bearer ${ userToken }`;
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default axiosInstance;