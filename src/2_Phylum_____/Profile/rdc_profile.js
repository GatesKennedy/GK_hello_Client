import {
  PROFILE_LOAD,
  PROFILE_UPDATE,
  PROFILE_CLEAR,
  PROFILE_ERROR,
} from '../../Redux/axn_types';

const initialState = {
  identity: null,
  personality: null,
  loading: true,
  error: {},
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PROFILE_LOAD:
    case PROFILE_UPDATE:
      return {
        ...state,
        identity: payload.identityObj,
        personality: payload.personalityObj,
        loading: false,
      };
    case PROFILE_CLEAR:
      return {
        ...state,
        identity: null,
        personality: null,
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
};

export default profileReducer;
