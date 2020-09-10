import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../../Redux/axn_types';

export const setAlert = (msg, alertType, timeout = 400000) => (dispatch) => {
  // generate ID
  const id = uuid.v4();
  // dispatch
  dispatch({
    type: SET_ALERT,
    payload: { id, msg, alertType },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
