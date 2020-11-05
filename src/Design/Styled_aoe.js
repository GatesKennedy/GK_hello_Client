import styled from 'styled-components';
//===========

//==========
export const BodyCont = styled.section`
  display: block;
  width: 100vw;
  min-height: 94vh;

  overflow: scroll;

  margin: 0px;
  padding: 0px;
`;

//  MENU
export const MenuVert = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;

  width: 16vw;
  height: 100%;
  padding: 4px;
  margin: 2px;
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

export const RowFull = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ParaMed = styled.p`
  display: block;
  padding: 4px;
  width: 100%;
`;
export const ParaSml = styled.p`
  display: block;
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
  text-align: center;
  width: 20vw;
`;

export const Btn1 = styled.button`
  text-align: center;

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
export const BtnTight = styled.button`
  text-align: center;
  margin: 2px;
  padding: 0px 4px;
  width: fit-content;

  &:hover {
    transform: scale(1.02);
    background-color: #bdbdbd;
  }
`;

export const ImageLrg = styled.img`
  position: relative;
  top: 0px;

  clip-path: circle(50%);
  overflow: hidden;
  background-color: #262727;

  height: 128px;
  width: 128px;

  @media only screen and (max-width: 600px) {
    /* For desktop: */
    position: relative;
    top: 0px;
    width: calc(16vw - 8px);
    height: calc(16vw - 8px);
  }
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
export const ImageIcon = styled.img`
  position: relative;
  top: 3px;
  left: -8px;

  clip-path: circle(50%);
  overflow: hidden;
  background-color: #262727;

  height: 18px;
  width: 18px;

  @media only screen and (max-width: 600px) {
    /* For desktop: */
    position: relative;
    top: 0px;
    width: calc(16vw - 8px);
    height: calc(16vw - 8px);
  }
`;
