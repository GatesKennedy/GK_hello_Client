import React, { useEffect, useState } from 'react';
//  REDUX
import { connect } from 'react-redux';
import { shape, bool, string, func } from 'prop-types';
import { setModal } from '../UI/axn_ui';
//  COMPS
import Auth from '../../1_Kingdom_____/Auth/Auth';

//  STYLE
import Backdrop from './Backdrop';
import styled from 'styled-components';
import { ModalCont } from './Styled';

const UiCont = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
  z-index: 500;

  border-radius: 8px;
  box-shadow: 1px 1px 1px black;
  padding: 8px;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
`;
const ModalMsg = styled.div`
  display: flex;
  color: #333;

  padding: 8px;
  margin-bottom: 4px;
  /* box-shadow: 1px 1px 1px black; */
  border-radius: 4px;
`;

//=============================================
const Modal = ({
  _setModalState,
  ui: { modalShow, modalType, modalMsg, loading },
  auth: { isAuthenticated },
  setModal,
}) => {
  //  STATE
  if (!isAuthenticated) modalType = 'guest';
  const authType = <Auth />;
  const contentResult = (type) => {
    console.log(`|    Modal > contentResult() > type: `, type);
    switch (type) {
      case 'auth':
      case 'guest':
        return authType;
      default:
        return 'default goody';
    }
  };
  const [message, setMessage] = useState(
    `You'll need to log in for that feature...`
  );
  //  EFFECT
  useEffect(() => {
    console.log(`$$$  New Modal State: `, {
      modalShow,
      modalType,
      modalMsg,
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
      <Backdrop
        id='modal-backdrop'
        _show={modalShow}
        _setModal={setModal}
        __setModalState={_setModalState}
      />
      <UiCont
        id='modal-UiCont'
        className='bg-gry2'
        style={{
          transform: modalShow ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: modalShow ? 1 : 0,
        }}
      >
        <ModalMsg id='Modal-ModalMsg' className='bg-gry1'>
          {message}
        </ModalMsg>
        {contentResult(modalType)}
      </UiCont>
    </ModalCont>
  );
};

//=============================================
Modal.propTypes = {
  setModal: func.isRequired,
  ui: shape({
    modalShow: bool,
    modalType: string,
    modalMsg: string,
    loading: bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  auth: state.auth,
});

export default connect(mapStateToProps, { setModal })(Modal);
