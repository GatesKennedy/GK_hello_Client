import {
  TALK_LOAD,
  TALK_UPDATE,
  TALK_CLEAR,
  TALK_SET_NOW,
  TALK_CHAT_LOAD,
  TALK_CHAT_UPDATE,
  TALK_NOTE_LOAD,
  TALK_NOTE_UPDATE,
  TALK_ERROR,
} from '../../Redux/axn_types';

const initialState = {
  access: [],
  talkNow: {},
  chat: [],
  note: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
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
    case TALK_CHAT_UPDATE:
      return {
        ...state,
        chat: payload,
        loading: false,
      };
    case TALK_CHAT_UPDATE:
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
    default:
      return state;
  }
}
