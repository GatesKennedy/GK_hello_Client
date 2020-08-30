import {
  MODAL_SHOW_SET,
  MODAL_TYPE_SET,
  MODAL_ERROR,
} from '../../Redux/axn_types';

const initialState = {
  modalShow: false,
  modalType: '',
  modalData: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    //    GET
    case MODAL_SHOW_SET:
      return {
        ...state,
        modalShow: payload,
        loading: false,
      };
    case MODAL_TYPE_SET:
      return {
        ...state,
        modalType: payload,
        // modalData: payload.data,
        loading: false,
      };
    //    ERROR
    case MODAL_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    //  DEFAULT
    default:
      return state;
  }
}
