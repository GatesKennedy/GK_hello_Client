import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTH_ERROR,
  LOGOUT,
  USER_LOADED,
} from '../../Redux/axn_types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: {},
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      console.log('rdc_auth.js > payload.token: ', payload.token);
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: localStorage.getItem('token'),
        user: payload.user,
        isAuthenticated: true,
        loading: false,
      };

    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: {},
        loading: false,
      };
    case AUTH_ERROR:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
