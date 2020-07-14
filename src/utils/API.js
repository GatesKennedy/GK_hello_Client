import axios from 'axios';

const NewApi = () => {
  const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: 'json',
  });

  // // Add a request interceptor
  // API.interceptors.request.use(
  //   function (config) {
  //     var configStr = JSON.stringify(config);
  //     console.log('(0_0) API reqInterceptor > configStr: ' + configStr);
  //     return config;
  //   },
  //   function (error) {
  //     var errorStr = JSON.stringify(errorStr);
  //     console.log('(0_0) API reqInterceptor > errorStr: ' + errorStr);
  //     return Promise.reject(error);
  //   }
  // );

  // // Add a response interceptor
  // API.interceptors.response.use(
  //   function (response) {
  //     var resStr = JSON.stringify(response);
  //     console.log('API reqInterceptor > resStr: ' + resStr);
  //     return response;
  //   },
  //   function (error) {
  //     // Any status codes that falls outside the range of 2xx cause this function to trigger
  //     // Do something with response error
  //     var errorStr = JSON.stringify(error);
  //     console.log('API reqInterceptor > errorStr: ' + errorStr);
  //     return Promise.reject(error);
  //   }
  // );

  return API;
};

export const API = NewApi();

console.log('(._.) API.js > LOG PROCESS.ENV: ' + process.env);
