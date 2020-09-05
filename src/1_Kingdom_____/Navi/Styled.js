import styled from 'styled-components';

export const NaviCont = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* -webkit-flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-direction: row;
  -ms-flex-pack: justify; */

  width: 100vw;
  height: 6vh;
  /* min-height: 36px; */

  padding: 8px 36px;
  top: 0px;
`;
export const NaviLogo = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  height: 3vh;

  &:hover {
    background-color: #bdbdbd; /* $aoe-gry3 */
  }
`;
export const NaviBtns = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 30vw;
`;
