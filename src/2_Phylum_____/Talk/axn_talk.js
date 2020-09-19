import { API } from '../../utils/API';

//  REDUX
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
import {
  TALK_CHAT_LOAD,
  TALK_SET_NOW,
  TALK_LOAD,
  TALK_ERROR,
  TALK_CLEAR,
  LOGOUT,
} from '../../Redux/axn_types';
//  UTILS
import setAuthToken from '../../1_Kingdom_____/Auth/utils/setAuthToken';
import ChatBody from './ChatBody';

//  Set Messages Now
//==========================
export const setTalkNow = (talkObj) => (dispatch) => {
  console.log(`AXN  > setTalkNow() > ENTER`);
  try {
    dispatch({
      type: TALK_SET_NOW,
      payload: talkObj,
    });
  } catch (err) {
    console.log(`AXN  > setTalkNow() > catch err`);
    dispatch({
      type: TALK_ERROR,
      payload: err,
    });
  }
};

//  Get Talk Access  [PRIVATE]
//==========================
export const loadTalkAccess = () => async (dispatch) => {
  console.log('(O_O) chatLoad() > ENTER FXN');
  //  !!! > should be middleware function
  //  Set Headers with 'x-auth-token': 'token'
  if (localStorage.token) {
    console.log('(o_O) authUser() > setAuthToken() > wait...');
    await setAuthToken(localStorage.token);
  } else {
    console.log('(._.) authUser() > logout()...');
    dispatch({ type: TALK_CLEAR });
    dispatch({ type: LOGOUT });
    return;
  }

  try {
    const res = await API.get('/api/chat');
    console.log('(o_O) chatLoad() > resStr: ', res.data);

    await dispatch({
      type: TALK_LOAD,
      payload: res.data,
    });
    dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    //  CATCH Error
    console.log('(-_-) chatLoad() > FAIL > errStr: ', err);
    const errors = err.errors;
    if (Array.isArray(errors)) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'warn')));
    }
    dispatch({
      type: TALK_ERROR,
      payload: errors,
    });
  }
};
//  Init User Chat  [PRIVATE]
//==========================
export const loadChat = () => async (dispatch) => {
  console.log('(O_O) chatLoad() > ENTER FXN');
  //  !!! > should be middleware function
  //  Set Headers with 'x-auth-token': 'token'
  if (localStorage.token) {
    console.log('(o_O) authUser() > setAuthToken() > wait...');
    await setAuthToken(localStorage.token);
  } else {
    console.log('(._.) authUser() > logout()...');
    dispatch({ type: TALK_CLEAR });
    dispatch({ type: LOGOUT });
    return;
  }

  try {
    const { data } = await API.get('/api/chat/history');
    console.log('(o_O) chatLoad() > resStr: ', data);
    console.log('(o_O) chatLoad() > data[0]: ', data[0]);

    await dispatch({
      type: TALK_CHAT_LOAD,
      payload: data,
    });
    if (data.length > 0) {
      await dispatch({
        type: TALK_SET_NOW,
        payload: data[0],
      });
    }
    dispatch(setAlert(data.msg, 'success'));
  } catch (err) {
    //  CATCH Error
    console.log('(-_-) chatLoad() > FAIL > errStr: ', err);
    const errors = err.errors;
    if (Array.isArray(errors)) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'warn')));
    }
    dispatch({
      type: TALK_ERROR,
      payload: errors,
    });
  }
};
//  Update User Chat [PRIVATE]
//==========================
export const updateTalkHistory = (talkObj) => (dispatch) => {
  console.log(`AXN  > setTalkNow() > ENTER`);
  try {
    dispatch({
      type: TALK_SET_NOW,
      payload: talkObj,
    });
  } catch (err) {
    console.log(`AXN  > setTalkNow() > catch err`);
    dispatch({
      type: TALK_ERROR,
      payload: err,
    });
  }
};
