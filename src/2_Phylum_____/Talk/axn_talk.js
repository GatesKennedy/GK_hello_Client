import { API } from '../../utils/API';

//  REDUX
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
import {
  TALK_CHAT_LOAD,
  TALK_SET_NOW,
  TALK_SET_UPDATE,
  TALK_CHAT_POST,
  TALK_LOAD,
  TALK_ERROR,
  TALK_CLEAR,
  LOGOUT,
} from '../../Redux/axn_types';
//  UTILS
import setAuthToken from '../../1_Kingdom_____/Auth/utils/setAuthToken';

//  Set Messages Now
//==========================
export const setTalkNow = (talkObj) => (dispatch) => {
  try {
    dispatch({
      type: TALK_SET_NOW,
      payload: talkObj,
    });
  } catch (err) {
    dispatch({
      type: TALK_ERROR,
      payload: err,
    });
  }
};

//  Get Talk Access  [PRIVATE]
//==========================
export const loadTalkAccess = () => async (dispatch) => {
  //  !!! > should be middleware function
  //  Set Headers with 'x-auth-token': 'token'
  if (localStorage.token) {
    await setAuthToken(localStorage.token);
  } else {
    dispatch({ type: TALK_CLEAR });
    dispatch({ type: LOGOUT });
    return;
  }

  try {
    const res = await API.get('/api/chat');

    await dispatch({
      type: TALK_LOAD,
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
      type: TALK_ERROR,
      payload: errors,
    });
  }
};

//  Load User Chat  [PRIVATE]
//==========================
export const loadChat = () => async (dispatch) => {
  //  !!! > should be middleware function
  //  Set Headers with 'x-auth-token': 'token'
  if (localStorage.token) {
    await setAuthToken(localStorage.token);
  } else {
    dispatch({ type: TALK_CLEAR });
    dispatch({ type: LOGOUT });
    return;
  }

  try {
    const { data } = await API.get('/api/chat/history');

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
//  Post User Chat [PRIVATE]
//==========================
export const postTalkHistory = (talk_id, msgObj) => async (dispatch) => {
  setAuthToken(localStorage.token);
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  const body = {
    id: msgObj.send_id,
    talkId: talk_id,
    body: msgObj.body,
    seen: msgObj.seen,
  };

  try {
    const { data } = await API.post('/api/chat/', body, config);
    dispatch({
      type: TALK_CHAT_POST,
    });
  } catch (err) {
    dispatch({
      type: TALK_ERROR,
      payload: err,
    });
  }
};
//  Update User Chat [PRIVATE]
//==========================
export const setChatHistory = (talk_id, msgObj) => async (dispatch) => {
  try {
    const chatObj = {
      id: msgObj.send_id,
      talkId: talk_id,
      body: msgObj.body,
      seen: msgObj.seen,
    };

    dispatch({
      type: TALK_SET_UPDATE,
    });
  } catch (err) {
    dispatch({
      type: TALK_ERROR,
      payload: err,
    });
  }
};
