import {
  MODAL_SET,
  // MODAL_SHOW_SET, // ???
  // MODAL_TYPE_SET, // ???
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
