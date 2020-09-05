import styled from 'styled-components';
//===========

//==========
export const BodyCont = styled.section`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  /* height: 100%;
  width: 100%; */
  width: 100vw;
  min-height: 94vh;

  overflow: scroll;

  margin: 0px;
  padding: 0px;
`;

//  Select

export const Act = styled.div`
  cursor: pointer;
  will-change: transform;
  transform: scale(1);
  transition: transform 480ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.02);
    background-color: #bdbdbd;
  }
`;

export const ParaMed = styled.p`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  padding: 4px;

  width: 100%;
`;
export const ParaSml = styled.p`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  padding: 3px;

  width: 100%;
`;

export const Btn = styled.button`
  text-align: center;

  margin: 0px;

  background-color: #e0e0e0;

  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.06);
    background-color: #bdbdbd; /* $aoe-gry3 */
  }
`;
export const NavBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 20vw;
`;

export const Btn1 = styled.button`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
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
