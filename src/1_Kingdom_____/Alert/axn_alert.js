import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT, REMOVE_ALERTS } from '../../Redux/axn_types';

export const setAlert = (msg, alertType, timeout = 4000) => (dispatch) => {
  // generate ID
  const id = uuidv4();
  // dispatch
  dispatch({
    type: SET_ALERT,
    payload: { id, msg, alertType },
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export const removeAlerts = (msg, alertType, timeout = 4000) => (dispatch) => {
  dispatch({
    type: REMOVE_ALERTS,
  });
};
