import React, { useEffect, useState } from 'react';
//  REDUX
import { connect } from 'react-redux';
import { shape, bool, string, func } from 'prop-types';
import { setModal } from '../UI/axn_ui';
//  COMPS
import Auth from '../../1_Kingdom_____/Auth/Auth';
//  STYLE
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { Act } from '../../Design/Styled_aoe';
const ModalCont = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  border: none;
  /* box-shadow: 1px 1px 1px black; */
  box-sizing: border-box;

  @media (min-width: 600px) {
    .Modal {
      width: 500px;
      left: calc(50% - 250px);
    }
  }
`;
const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);

  transition: all 0.7s ease-in-out;
`;
const UiCont = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  z-index: 500;

  width: 320px;
  max-width: 80vw;
  min-width: 300px;
  /* min-height: 36vh; */

  border-radius: 8px;
  /* box-shadow: 2px 2px 2px white; */
  padding: 8px 8px 6px 8px;
  box-sizing: border-box;
  transition: all 0.3s ease-in;
`;
const ModalMsg = styled.div`
  display: flex;

  padding: 8px;
  margin-bottom: 4px;
  border-radius: 4px 4px 0px 0px;
`;
const ModalInsert = styled.div`
  display: flex;
  flex-direction: inherit;
  justify-content: center;
  align-content: center;
  min-height: calc(28vh + 4px);
  width: 100%;

  padding: 8px;
`;

//=============================================
const Modal = ({
  _setModalState,
  ui: { modalShow, modalType, modalMsg },
  auth: { isAuthenticated },
  setModal,
}) => {
  //  EFFECT
  useEffect(() => {
    _setModalState(modalShow);
  }, [modalShow]);
  //  STYLE
  const styleIcon = {
    position: 'relative',
    top: '-142px',
    right: '-172px',
    zIndex: modalShow ? 501 : -100,
    opacity: modalShow ? 1 : 0,
    transition: 'all 1s ease-in-out',

    cursor: 'pointer',
  };
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
  function handleCancel() {
    setModal(false);
    _setModalState(false);
  }

  //=============================================
  //=============================================
  return (
    <ModalCont
      id='modal-ModalCont'
      style={{
        zIndex: modalShow ? 100 : -100,
      }}
    >
      <IoMdClose
        id='Modal-IoMdClose'
        className='styleIcon'
        style={styleIcon}
        onClick={() => handleCancel()}
      />{' '}
      <Backdrop
        id='modal-backdrop'
        style={{
          opacity: modalShow ? 1 : 0,
        }}
        onClick={() => handleCancel()}
      />
      <UiCont
        id='modal-UiCont'
        className='bg-gry2'
        style={{
          transform: modalShow ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: modalShow ? 1 : 0,
        }}
      >
        {modalMsg !== 'void' && (
          <ModalMsg id='Modal-ModalMsg' className='bg-gry1 txt-gry6'>
            {modalMsg}
          </ModalMsg>
        )}
        <ModalInsert
          className='bg-blk1'
          style={{
            borderRadius:
              modalMsg === 'void' ? '4px 4px 4px 4px' : '0px 0px 4px 4px',
          }}
        >
          {contentResult(modalType)}
        </ModalInsert>
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
