import React, { useEffect, useState } from 'react';
//  REDUX
import { connect } from 'react-redux';
import { shape, bool, string, arrayOf } from 'prop-types';
import { setModal } from '../UI/axn_ui';
//  COMPS
import Auth from '../../Kingdom_____/Auth/Auth';

//  STYLE
import Backdrop from './Backdrop';
import styled from 'styled-components';
import { ModalCont } from './Styled';

const UiCont = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  z-index: 500;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
`;

//=============================================
const Modal = ({
  _modalClosed,
  ui: { modalShow, modalType, modalStr, loading },
  setModal,
  _setModalState,
  auth: { isAuthenticated },
}) => {
  //  STATE
  const [modalContent, setModalContent] = useState(null);
  if (!isAuthenticated) modalType = 'guest';
  const AuthModal = <Auth />;

  const contentResult = (type) => {
    console.log(`(^=^)  contentResult() > type: `, type);
    switch (type) {
      case 'auth':
      case 'guest':
        return <Auth />;
      default:
        return 'default goody';
    }
  };

  //  EFFECT
  useEffect(() => {
    console.log(`($=$)  New Modal State: `, {
      modalShow,
      modalType,
      modalContent,
      modalStr,
    });
    _setModalState(modalShow);
  }, [modalShow]);

  //=============================================
  return (
    <ModalCont
      id='modal-ModalCont'
      style={{
        transform: modalShow ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: modalShow ? 1 : 0,
      }}
    >
      <Backdrop id='modal-backdrop' show={modalShow} clicked={_modalClosed} />
      <UiCont
        id='modal-UiCont'
        style={{
          transform: modalShow ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: modalShow ? 1 : 0,
        }}
      >
        {/* {modalType === 'guest' && (
          <div>Oops, you'll need to logged in for that...</div>
        )} */}
        {contentResult(modalType)}
      </UiCont>
    </ModalCont>
  );
};

//=============================================
Modal.propTypes = {
  ui: shape({
    modalShow: bool,
    modalType: string,
    // modalContent: arrayOf(string),
    modalStr: string,
    loading: bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  auth: state.auth,
});

export default connect(mapStateToProps, { setModal })(Modal);
