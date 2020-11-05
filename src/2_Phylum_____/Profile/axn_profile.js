import { API } from '../../utils/API';
//  REDUX
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
import { PROFILE_UPDATE, PROFILE_ERROR } from '../../Redux/axn_types';
//  UTILS
import setAuthToken from '../../1_Kingdom_____/Auth/utils/setAuthToken';

//  Update Profile (AUTH)
//==========================
export const updateProfile = (email, password) => async (dispatch) => {
  console.log('(O_O) updateProfile() > ENTER FXN');
  //  Set Headers with 'x-auth-token': 'token'
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const body = JSON.stringify({ email, password });
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  console.log('(._.) updateProfile() > body = ', body);

  try {
    const res = await API.post('/api/user/login', body, config);
    console.log('(o_O) updateProfile() > resStr: ', res.data);

    await dispatch({
      type: PROFILE_UPDATE,
      payload: res.data,
    });
    dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    //  CATCH Error
    console.log('(-_-) updateProfile() > FAIL > errStr: ', err);
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
