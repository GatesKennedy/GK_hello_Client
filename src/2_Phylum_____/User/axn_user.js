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
      identityObj: [
        {
          title: 'name',
          value: data.name,
          msg: 'name (IRL)',
          type: 'identity',
        },
        { title: 'email', value: data.email, msg: 'email', type: 'identity' },
        {
          title: 'entity',
          value: data.entity,
          msg: 'who sent you?',
          type: 'identity',
        },
        {
          title: 'location',
          value: data.location,
          msg: 'where?',
          type: 'identity',
        },
        {
          title: 'web_url',
          value: data.website,
          msg: 'what do you do?',
          type: 'identity',
        },
        {
          title: 'img_url',
          value: data.img_url,
          msg: 'upload?',
          type: 'identity',
        },
      ],
      personalityObj: [
        {
          title: 'puzzle',
          value: data.puzzle,
          msg: `what's your favorite brain teaser or riddle??`,
          type: 'personality',
        },
        {
          title: 'thought',
          value: data.thought,
          msg: `what's an important thought you've had?`,
          type: 'personality',
        },
        {
          title: 'joke',
          value: data.joke,
          msg: `what is funny?`,
          type: 'personality',
        },
        {
          title: 'question',
          value: data.question,
          msg: `what is confusing?`,
          type: 'personality',
        },
      ],
    };
    const userObj = {
      id: data.id,
      name: data.name,
      role: data.role,
    };

    await dispatch({
      type: USER_LOAD,
      payload: userObj,
    });
    await dispatch({
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
