import { API } from '../../utils/API';

//  REDUX
import { setAlert } from '../../Kingdom_____/Alert/axn_alert';
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  PROFILE_LOAD,
  PROFILE_UPDATE,
  PROFILE_CLEAR,
  PROFILE_ERROR,
} from '../../Redux/axn_types';

//  UTILS
import setAuthToken from './utils/setAuthToken';

//  Authenticate User
//==========================
export const authUser = () => async (dispatch) => {
  console.log('(^=^) authUser() > ENTER FXN');
  //  Set Headers with 'x-auth-token': 'token'
  if (localStorage.token) {
    console.log('(o_O) authUser() > setAuthToken() > wait...');
    await setAuthToken(localStorage.token);
  }

  try {
    //  AUTH & LOAD USER
    const { data } = await API.get('api/user/');
    console.log('AXN AUTH > authUser() > LOADED_USER: \n', data);

    const payload = {
      user: { id: data.id, name: data.name },
      profile: data,
      token: localStorage.token,
    };
    dispatch({
      type: USER_LOADED,
      payload: payload,
    });
    dispatch({
      type: PROFILE_LOAD,
      payload: payload,
    });
    console.log('(^=^) authUser() > DONE');
  } catch (err) {
    console.log('(>_<) authUser() > catch: ', err.message);
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};

//  Login User
//==========================
export const loginUser = (emailRaw, password) => async (dispatch) => {
  console.log('(O_O) login() > ENTER FXN');
  //  req config
  const email = emailRaw.toLowerCase();
  const body = JSON.stringify({ email, password });
  console.log('(._.) login() > body = ', body);
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    //  LOGIN user
    const res = await API.post('/api/user/login', body, config);
    console.log('(o_O) login() > resStr: ', res.data);
    dispatch(setAlert(res.data.msg, 'success'));
    await dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    //  AUTH user
    await dispatch(authUser());
    dispatch(setAlert('Welcome!', 'success'));
  } catch (err) {
    //  CATCH Error
    console.log('(-_-) login() > FAIL > errStr: ', err);
    console.log('(-_-) login() > FAIL > errStr: ', err.errors);
    const errors = err.errors;
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
export const registerUser = (
  username,
  email,
  password,
  role = 'user'
) => async (dispatch) => {
  console.log('(O_O) register() > ENTER FXN');
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ username, email, password, role });
  //~~~~~~~~~~~~~~
  //  Create User
  try {
    const { data } = await API.post('/api/user/register', body, config);
    const resStr = JSON.stringify(data);
    console.log('AUTH REGI: res.data = ' + resStr);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    }); //  AUTH user
    await dispatch(authUser());
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
};

//  Logout / Clear Profile
//==========================
export const logoutUser = () => (dispatch) => {
  console.log('(O_O) logout() > ENTER FXN');
  dispatch({ type: PROFILE_CLEAR });
  dispatch({ type: LOGOUT });
  console.log('(^=^) logout() > DONE');
};