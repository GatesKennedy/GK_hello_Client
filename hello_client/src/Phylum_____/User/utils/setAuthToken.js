import { API } from '../../../utils/API';

const setAuthToken = async (token) => {
  if (token) {
    console.log('AUTH Middleware > setAuthToken > set token');
    API.defaults.headers.common['x-auth-token'] = token;
  } else {
    console.log('AUTH Middleware > setAuthToken > delete token');
    delete API.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
