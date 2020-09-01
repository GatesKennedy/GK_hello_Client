import styled from 'styled-components';

export const NaviCont = styled.section`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100vw;
  height: 6vh;
  /* min-height: 36px; */

  padding: 8px 36px;
  top: 0px;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
export const NaviLogo = styled.section`
  display: flex;
`;
export const NaviBtns = styled.section`
  display: flex;
  justify-content: space-evenly;
  min-width: 30vw;
`;
