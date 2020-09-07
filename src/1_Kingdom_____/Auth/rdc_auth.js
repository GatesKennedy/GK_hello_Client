import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
} from '../../Redux/axn_types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  role: 'guest',
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        role: payload.role,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      console.log('rdc_auth.js > payload.token: ', payload.token);
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: localStorage.getItem('token'),
        role: payload.role,
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
