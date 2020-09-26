import { API } from '../../../utils/API';

const setAuthToken = async (token) => {
  // console.log('AUTH Middleware > setAuthToken.js > token: \n', token);
  if (token) {
    API.defaults.headers.common['x-auth-token'] = token;
    console.log('AUTH   Middleware > setAuthToken.js > Set token ');
  } else {
    delete API.defaults.headers.common['x-auth-token'];
    console.log('AUTH   Middleware > setAuthToken.js > Delete token ');
  }
};

export default setAuthToken;
