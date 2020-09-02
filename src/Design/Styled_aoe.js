import styled from 'styled-components';
//===========

//==========
export const BodyCont = styled.div`
  display: flex;

  height: 100%;
  width: 100%;
  min-width: 100vw;
  min-height: 94vh;
  overflow: scroll;

  margin: 0px;
  padding: 0px;
`;

//  Select

export const Para = styled.p`
  display: flex;
  padding: 4px;

  width: 100%;
`;

export const Btn = styled.button`
  text-align: center;
  width: 5vw;
  margin: 2px;
`;

export const Btn1 = styled.button`
  display: flex;
  text-align: center;

  /* align-self: flex-end; */
  width: 64px;
  max-width: 64px;
  max-height: 16px;

  margin: 2px 2px 0px 0px;
  padding: 0px 4px 0px 9px;

  &:hover {
    transform: scale(1.02);
    background-color: #bdbdbd;
  }
`;
export const Btn2 = styled.button`
  text-align: center;
  width: 10vw;
  margin: 2px;
  padding: 0px 4px;
`;

export const ImageMed = styled.img`
  position: relative;
  top: 0px;

  clip-path: circle(50%);
  overflow: hidden;
  background-color: #262727;

  height: 96px;
  width: 96px;

  @media only screen and (max-width: 600px) {
    /* For desktop: */
    position: relative;
    top: 0px;
    width: calc(16vw - 8px);
    height: calc(16vw - 8px);
  }
`;
