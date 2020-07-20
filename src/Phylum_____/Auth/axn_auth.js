import { API } from '../../utils/API';

/*
//  REDUX
//import { setAlert } from '../../Notify/rdx_axn/axn_alert';
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  PROFILE_CREATE,
  PROFILE_CLEAR,
  PROFILE_ERROR,
} from '../../../Main/util/axn_types';

//  UTILS
import setAuthToken from '../utils/setAuthToken';

//  Authenticate User
//==========================
export const authUser = () => async (dispatch) => {
  console.log('(^=^) authUser() > ENTER FXN');
  //  Set Headers with 'x-auth-token': 'token'
  if (localStorage.token) {
    console.log('(o_O) authUser() > setAuthToken()...');
    await setAuthToken(localStorage.token);
  }

  try {
    //  AUTH & LOAD USER
    //console.log('AXN AUTH > authUser() > LOAD_USER');
    const res = await API.get('api/auth/');
    const resStr = JSON.stringify(res.data);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    console.log('(^=^) authUser() > DONE');
  } catch (err) {
    console.log('(>_<) authUser() > catch: ' + err.message);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

/*
//  Login User
//==========================
export const login = ({ email, password }) => async (dispatch) => {
  console.log('(O_O) login() > ENTER FXN');
  //  req config
  const body = JSON.stringify({ email, password });
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  console.log('(._.) login() > body = ' + body);

  try {
    //  LOGIN user
    const res = await API.post('/api/auth', body, config);

    const resStr = JSON.stringify(res.data);
    console.log('(o_O) login() > resStr: ' + resStr);

    await dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    //  AUTH user
    await dispatch(authUser());
    dispatch(setAlert('Welcome!', 'success'));
  } catch (err) {
    //  CATCH Error
    console.log('(>_<) login() > FAIL');
    const errStr = JSON.stringify(err);
    console.log('(-_-) login() > FAIL > errStr: ' + errStr);
    const errors = err.message;
    if (Array.isArray(errors)) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'warn')));
    }
    dispatch({
      type: LOGIN_ERROR,
      payload: errors,
    });
  }
};

//  Register User / Auth User
//==========================
export const register = ({
  username,
  email,
  password,
  role = 'user',
}) => async (dispatch) => {
  console.log('(O_O) register() > ENTER FXN');
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ username, email, password, role });

  //  Create User
  try {
    const { data } = await API.post('/api/auth/register', body, config);
    const resStr = JSON.stringify(data);
    console.log('AUTH REGI: res.data = ' + resStr);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
    dispatch(setAlert(`Welcome! ${username}`, 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'warn')));
    }
    dispatch({
      type: REGISTER_ERROR,
    });
  }
  //  Create Profile
  try {
    //  SET GLOBAL HEADER with Token
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    //  CREATE PROFILE
    const rez = await API.post('/api/user/profile/create');
    const rezString = JSON.stringify(rez.data[0]);
    //console.log('AXN AUTH > Register > rez.data = ' + rezString);
    dispatch({
      type: PROFILE_CREATE,
      payload: rez.data[0],
    });
    setAlert('WELCOME, Friend!', 'success');
    //  LOAD USER/PROFILE
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

//  Logout / Clear Profile
//==========================
export const logout = () => (dispatch) => {
  console.log('(O_O) logout() > ENTER FXN');
  dispatch({ type: PROFILE_CLEAR });
  dispatch({ type: LOGOUT });
  console.log('(^=^) logout() > DONE');
};
*/
