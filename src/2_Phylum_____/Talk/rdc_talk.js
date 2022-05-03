import {
  TALK_LOAD,
  // TALK_UPDATE,
  TALK_CLEAR,
  TALK_SET_NOW,
  TALK_CHAT_LOAD,
  TALK_SET_UPDATE,
  // TALK_NOTE_LOAD,
  // TALK_NOTE_UPDATE,c
  TALK_ERROR,
  LOGOUT,
} from '../../Redux/axn_types';

const initialState = {
  access: [],
  talkNowId: '',
  talkNow: {},
  chat: [],
  note: [],
  loading: true,
  error: {},
};

const talkReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TALK_SET_NOW:
      return {
        ...state,
        talkNow: payload,
        loading: false,
      };
    case TALK_LOAD:
      return {
        ...state,
        access: payload,
        loading: false,
      };
    case TALK_CHAT_LOAD:
      return {
        ...state,
        chat: payload,
        loading: false,
      };
    case TALK_SET_UPDATE:
      return {
        ...state,
        chat: payload,
        loading: false,
      };
    case TALK_CLEAR:
      return {
        ...state,
        chat: [],
        note: [],
        loading: false,
      };
    case TALK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        access: [],
        talkNow: {},
        chat: [],
        note: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default talkReducer;
