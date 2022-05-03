import {
  MODAL_SET,
  // MODAL_SHOW_SET, // ???
  // MODAL_TYPE_SET, // ???
  MODAL_ERROR,
} from '../../Redux/axn_types';

//  =============
//  ==   SET   ==
//  =============

//=============================
// SET: Modal Show and Type
export const setModal = (
  modalShow,
  modalType = 'guest',
  modalMsg = 'void'
) => async (dispatch) => {
  const setObj = {
    modalShow: modalShow,
    modalType: modalType,
    modalMsg: modalMsg,
  };

  try {
    dispatch({
      type: MODAL_SET,
      payload: setObj,
    });
  } catch (err) {
    dispatch({
      type: MODAL_ERROR,
      payload: { msg: err.message, status: err.response },
    });
  }
};
// SET: Modal Type
