import {
  TALK_LOAD,
  TALK_UPDATE,
  TALK_CLEAR,
  TALK_CHAT_LOAD,
  TALK_CHAT_UPDATE,
  TALK_NOTE_LOAD,
  TALK_NOTE_UPDATE,
  TALK_ERROR,
} from '../../Redux/axn_types';

const initialState = {
  chat: [],
  note: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
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
