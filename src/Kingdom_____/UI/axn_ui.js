import {
  MODAL_SHOW_SET,
  MODAL_TYPE_SET,
  MODAL_ERROR,
} from '../../Redux/axn_types';

//  =============
//  ==   SET   ==
//  =============

//=============================
// SET: Modal Show and Type
export const setModal = (modalShow, modalType = false) => async (dispatch) => {
  console.log(`axn    setModal() > `, {
    modalShow: modalShow,
    modalType: modalType,
  });

  try {
    dispatch({
      type: MODAL_SHOW_SET,
      payload: modalShow,
    });
    if (modalType) {
      dispatch({
        type: MODAL_TYPE_SET,
        payload: modalType,
      });
    }
  } catch (err) {
    dispatch({
      type: MODAL_ERROR,
      payload: { msg: err.message, status: err.response },
    });
  }
};
// SET: Modal Type
export const setModalType = (modalType, modalStr) => async (dispatch) => {
  console.log(`ENTER      setModalType()`);

  try {
    dispatch({
      type: MODAL_TYPE_SET,
      payload: { type: modalType, str: modalStr },
    });
  } catch (err) {
    dispatch({
      type: MODAL_ERROR,
      payload: { msg: err.message, status: err.response },
    });
  }
};
