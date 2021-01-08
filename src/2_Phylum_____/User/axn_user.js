import { API } from '../../utils/API';

//  REDUX
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
import {
  USER_LOAD,
  PROFILE_LOAD,
  USER_UPDATE,
  USER_CLEAR,
  USER_UPDATE_ERROR,
  USER_LOAD_ERROR,
} from '../../Redux/axn_types';
//  UTILS
import setAuthToken from '../../1_Kingdom_____/Auth/utils/setAuthToken';

//  Load User (AUTH)
//==========================
export const loadUser = (profile) => async (dispatch) => {
  console.log('axn  loadUser() > ENTER FXN');
  //  Set Headers with 'x-auth-token': 'token'
  if (localStorage.token) {
    console.log('(o_O) authUser() > setAuthToken() > wait...');
    await setAuthToken(localStorage.token);
  }

  try {
    //  AUTH & LOAD USER
    const { data } = await API.get('api/user/');
    console.log('AXN    authUser() > LOADED_USER: \n', data);

    const profileObj = {
      identityObj: {
        name: data.name,
        email: data.email,
        entity: data.entity,
        location: data.location,
        web_url: data.website,
        img_url: data.img_url,
      },
      personalityObj: {
        puzzle: data.puzzle,
        thought: data.thought,
        joke: data.joke,
        question: data.question,
      },
    };
    const userObj = {
      id: data.id,
      name: data.name,
      role: data.role,
    };

    dispatch({
      type: USER_LOAD,
      payload: userObj,
    });
    dispatch({
      type: PROFILE_LOAD,
      payload: profileObj,
    });
    console.log('(^=^) authUser() > DONE');
  } catch (err) {
    console.log('(>_<) authUser() > catch: ', err.message);
    dispatch({
      type: USER_LOAD_ERROR,
      payload: err,
    });
    return err;
  }
};

// //  Authenticate User
// //==========================
// export const authUser = () => async (dispatch) => {
//   console.log('axn > authUser() > ENTER FXN');
//   //  Set Headers with 'x-auth-token': 'token'
//   if (localStorage.token) {
//     console.log('(o_O) authUser() > setAuthToken() > wait...');
//     await setAuthToken(localStorage.token);
//   }

//   try {
//     //  AUTH & LOAD USER
//     const { data } = await API.get('api/user/');
//     console.log('(^=^) authUser() > LOADED_USER: \n', data);

//     const payload = {
//       user: { id: data.id, name: data.name },
//       profile: data,
//       token: localStorage.token,
//     };
//     dispatch({
//       type: USER_LOAD,
//       payload: payload,
//     });
//     dispatch({
//       type: PROFILE_LOAD,
//       payload: payload,
//     });
//     console.log('(^=^) authUser() > DONE');
//   } catch (err) {
//     console.log('(>_<) authUser() > catch: ', err.message);
//     dispatch({
//       type: AUTH_ERROR,
//       payload: err,
//     });
//   }
// };
