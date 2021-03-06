import { API } from '../../utils/API';
//  REDUX
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
import { setModal } from '../../1_Kingdom_____/UI/axn_ui';
import { loadUser } from '../../2_Phylum_____/User/axn_user';
import { loadChat, loadTalkAccess } from '../../2_Phylum_____/Talk/axn_talk';
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
  PROFILE_CLEAR,
} from '../../Redux/axn_types';
//  UTILS
import setAuthToken from './utils/setAuthToken';

//  Authenticate User
//==========================
export const authUser = (role) => async (dispatch) => {
  if (localStorage.token) {
    await setAuthToken(localStorage.token);
  } else {
    dispatch({ type: PROFILE_CLEAR });
    dispatch({ type: LOGOUT });
    return;
  }

  try {
    const { data } = await API.get('api/auth');
    dispatch({
      type: AUTH_SUCCESS,
      payload: data,
    });
    //  LOAD USER & LOAD PROFILE
    await dispatch(loadUser());
    await dispatch(loadTalkAccess());
    await dispatch(loadChat());
  } catch (err) {
    console.error('(>_<) authUser() > catch > err.message: ', err.message);
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};

//  Login User
//==========================
export const loginUser = (emailRaw, passwordRaw) => async (dispatch) => {
  //  req config
  const email = emailRaw.toLowerCase();
  const body = { emailIn: email, passwordIn: passwordRaw };
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    //  LOGIN user
    const { data } = await API.post('/api/auth/login', body, config);

    dispatch(setAlert(data.msg, 'good'));
    await dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    // console.log('(o_O) login() > LOGIN_SUCCESS > Pass');
    //  AUTH user
    await dispatch(authUser(data.role));
    // console.log('(o_O) login() > authUser() > Pass');
    dispatch(setModal(false, 'void'));
  } catch (err) {
    //  CATCH Error
    if (!err.response) {
      console.error(
        `loginUser() >
          catch(err) >
            name: ${err.name}
            message: ${err.message}
            config: {
              url: ${err.url}
              method: ${err.method}
            }
        `
      );
      dispatch(setAlert(`${err.name}: ${err.message}`, 'warn'));
      return;
    }

    const { errors } = err.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'warn')));
    } else dispatch(setAlert(err.response.data.msg));
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
  confirm,
  role = 'user'
) => async (dispatch) => {
  if (password !== confirm) {
    dispatch(setAlert(`oops.. passwords don't match`, `warn`));
    return;
  }
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ username, email, password, role });
  //~~~~~~~~~~~~~~
  //  Create User
  try {
    const { data } = await API.post('/api/auth/register', body, config);
    const resStr = JSON.stringify(data);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    }); //  AUTH user
    await dispatch(authUser());
    dispatch(setAlert(`Welcome! ${username}`, 'good'));
    dispatch(setModal(false, 'void'));
  } catch (err) {
    const { errors, msg } = err.response.data;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'warn')));
    } else dispatch(setAlert(msg));
    dispatch({
      type: REGISTER_ERROR,
    });
  }
};

//  Logout / Clear Profile
//==========================
export const logoutUser = () => (dispatch) => {
  //  !!! remove token from local storage!
  dispatch({ type: PROFILE_CLEAR });
  dispatch({ type: LOGOUT });
  dispatch(setModal(false, 'guest'));
  dispatch(setAlert('okee.. bye bye', 'good'));
};
