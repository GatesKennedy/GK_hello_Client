import {
  USER_LOAD,
  USER_LOAD_ERROR,
  USER_UPDATE,
  USER_CLEAR,
  USER_UPDATE_ERROR,
} from '../../Redux/axn_types';

const initialState = {
  id: null,
  name: null,
  role: null,
  email: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOAD:
    case USER_UPDATE:
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        role: payload.role,
        email: payload.email,
        loading: false,
      };
    case USER_CLEAR:
      return {
        ...state,
        id: null,
        name: null,
        role: null,
        email: null,
        loading: false,
      };
    case USER_LOAD_ERROR:
    case USER_UPDATE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
