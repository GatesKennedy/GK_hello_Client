import {
  PROFILE_LOAD,
  PROFILE_UPDATE,
  PROFILE_CLEAR,
  PROFILE_ERROR,
} from '../../Redux/axn_types';

const initialState = {
  profile: [],
  user: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PROFILE_LOAD:
    case PROFILE_UPDATE:
      return {
        ...state,
        profile: payload.profile,
        user: payload.user,
        loading: false,
      };
    case PROFILE_CLEAR:
      return {
        ...state,
        profile: [],
        user: [],
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
