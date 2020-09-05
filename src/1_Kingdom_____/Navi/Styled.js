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
  height: 42px;
  /* min-height: 36px; */

  padding: 8px 36px;
  top: 0px;
`;
export const NaviLogo = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  height: 24px;
  width: 24px;

  &:hover {
    background-color: #bdbdbd; /* $aoe-gry3 */
  }
`;
export const NaviBtns = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 30vw;
`;
