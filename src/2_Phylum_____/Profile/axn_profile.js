import { API } from '../../utils/API';
//  REDUX
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
import { PROFILE_UPDATE, PROFILE_ERROR } from '../../Redux/axn_types';
//  UTILS
import setAuthToken from '../../1_Kingdom_____/Auth/utils/setAuthToken';

//  Update Profile (AUTH)
//==========================
export const updateProfile = (email, password) => async (dispatch) => {
  //  Set Headers with 'x-auth-token': 'token'
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const body = JSON.stringify({ email, password });
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const res = await API.post('/api/user/login', body, config);
    await dispatch({
      type: PROFILE_UPDATE,
      payload: res.data,
    });
    dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    //  CATCH Error
    const errors = err.errors;
    if (Array.isArray(errors)) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'warn')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: errors,
    });
  }
};
