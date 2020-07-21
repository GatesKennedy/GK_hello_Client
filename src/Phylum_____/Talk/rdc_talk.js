import {
  TALK_LOAD,
  TALK_UPDATE,
  CHAT_UPDATE,
  NOTE_UPDATE,
  TALK_CLEAR,
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
    case TALK_LOAD:
    case TALK_UPDATE:
      return {
        ...state,
        chat: payload.chats,
        note: payload.notes,
        loading: false,
      };
    case CHAT_UPDATE:
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
