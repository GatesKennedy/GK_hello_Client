import React from 'react';
//  STYLE
import styled from 'styled-components';

const BackdropCont = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  @media (min-width: 600px) {
    .Modal {
      width: 500px;
      left: calc(50% - 250px);
    }
  }
`;

const Backdrop = (props) =>
  props._show ? <BackdropCont id='Backdrop-BackdropCont'></BackdropCont> : null;

export default Backdrop;
