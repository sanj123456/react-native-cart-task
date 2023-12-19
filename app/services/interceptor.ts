import axios from 'axios';
import {constants} from '../core';
import {errorToast} from '../core/helpers';

const AxiosInstance = axios.create({
  baseURL: constants.baseURL,
  timeout: 20000,
  transformRequest: [
    function (data) {
      if (data && data._parts) {
        return data;
      } else {
        return JSON.stringify(data);
      }
    },
  ],
  headers: {'Content-Type': 'application/json'},
});

// Response Interceptor
AxiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  error => {
    errorToast();
    return error.response;
  },
);

export default AxiosInstance;
