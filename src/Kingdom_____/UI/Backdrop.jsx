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
  props.show ? (
    <BackdropCont id='modal-backdrop' onClick={props.clicked}></BackdropCont>
  ) : null;

export default Backdrop;
