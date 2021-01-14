import { API } from '../../../utils/API';

const setAuthToken = async (token) => {
  if (token) {
    API.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete API.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
