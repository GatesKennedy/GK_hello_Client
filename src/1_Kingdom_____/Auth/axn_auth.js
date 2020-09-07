import { API } from '../../utils/API';

//  REDUX
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
import { setModal } from '../../1_Kingdom_____/UI/axn_ui';
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_LOAD,
  AUTH_ERROR,
  LOGOUT,
  PROFILE_LOAD,
  PROFILE_CLEAR,
} from '../../Redux/axn_types';

//  UTILS
import setAuthToken from './utils/setAuthToken';

//  Authenticate User
//==========================
export const authUser = () => async (dispatch) => {
  console.log('axn > authUser() > ENTER FXN');
  //  Set Headers with 'x-auth-token': 'token'
  if (localStorage.token) {
    console.log('(o_O) authUser() > setAuthToken() > wait...');
    await setAuthToken(localStorage.token);
  }

  try {
    //  AUTH & LOAD USER
    const { data } = await API.get('api/user/');
    console.log('(^=^) authUser() > LOADED_USER: \n', data);

    const payload = {
      user: { id: data.id, name: data.name },
      profile: data,
      token: localStorage.token,
    };
    dispatch({
      type: USER_LOAD,
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
export const loginUser = (emailRaw, passwordRaw) => async (dispatch) => {
  console.log('(O_O) login() > ENTER FXN');
  //  req config
  const email = emailRaw.toLowerCase();
  const body = { emailIn: email, passwordIn: passwordRaw };
  console.log('(._.) login() > body = ', body);
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    //  LOGIN user
    const { data } = await API.post('/api/auth/login', body, config);
    console.log('(o_O) login() > resStr: ', data);
    dispatch(setAlert(data.msg, 'success'));
    await dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    //  AUTH user
    await dispatch(authUser());
    dispatch(setAlert('Welcome!', 'success'));
    dispatch(setModal(false, 'void'));
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
  dispatch(setModal(false, 'guest'));
  console.log('(^=^) logout() > DONE');
};
