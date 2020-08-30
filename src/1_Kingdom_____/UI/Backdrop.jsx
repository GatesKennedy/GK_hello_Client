import React from 'react';
//  STYLE
import styled from 'styled-components';

const BackdropCont = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);

  @media (min-width: 600px) {
    .Modal {
      width: 500px;
      left: calc(50% - 250px);
    }
  }
`;

const Backdrop = (props) =>
  props._show ? (
    <BackdropCont
      id='Backdrop-BackdropCont'
      onClick={() => {
        console.log('clk: BackdropCont > props._show: ', props._show);
        console.log('clk: BackdropCont > !props._show: ', !props._show);
        props._setModal(!props._show);
        props.__setModalState(!props._show);
      }}
    ></BackdropCont>
  ) : null;

export default Backdrop;
