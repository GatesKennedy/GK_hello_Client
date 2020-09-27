import {
  PROFILE_LOAD,
  PROFILE_UPDATE,
  PROFILE_CLEAR,
  PROFILE_ERROR,
} from '../../Redux/axn_types';

const initialState = {
  name: null,
  email: null,
  entity: null,
  location: null,
  puzzle: null,
  thought: null,
  web_url: null,
  img_url: null,
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
        name: payload.name,
        email: payload.email,
        entity: payload.entity,
        location: payload.location,
        puzzle: payload.puzzle,
        thought: payload.thought,
        web_url: payload.web_url,
        img_url: payload.img_url,
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
