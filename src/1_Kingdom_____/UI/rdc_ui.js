import {
  MODAL_SET,
  MODAL_SHOW_SET,
  MODAL_TYPE_SET,
  MODAL_ERROR,
} from '../../Redux/axn_types';

const initialState = {
  modalShow: false,
  modalType: 'guest',
  modalMsg: 'void',
  modalData: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    //    GET
    case MODAL_SET:
      const { modalShow, modalType, modalMsg } = payload;
      return {
        ...state,
        modalShow: modalShow,
        modalType: modalType,
        modalMsg: modalMsg,
        loading: false,
      };
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
