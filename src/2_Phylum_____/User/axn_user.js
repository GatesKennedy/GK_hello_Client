import { API } from '../../utils/API';

//  REDUX
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
import {
  USER_LOAD,
  USER_UPDATE,
  USER_CLEAR,
  USER_UPDATE_ERROR,
  USER_LOAD_ERROR,
} from '../../Redux/axn_types';

//  Update Profile (AUTH)
//==========================
export const loadUser = (email, password) => async (dispatch) => {
  console.log('(O_O) loadUser() > ENTER FXN');
};
