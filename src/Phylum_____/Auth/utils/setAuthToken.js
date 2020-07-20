import { API } from '../../../utils/API';

const setAuthToken = async (token) => {
  console.log('setAuthToken() > token: ', token);
  if (token) {
    API.defaults.headers.common['x-auth-token'] = token;
    console.log('AUTH Middleware > setAuthToken > set token > Done');
  } else {
    delete API.defaults.headers.common['x-auth-token'];
    console.log('AUTH Middleware > setAuthToken > delete token > Done');
  }
};

export default setAuthToken;
