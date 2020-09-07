import styled from 'styled-components';

export const NaviCont = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 42px;
  width: 100vw;
  min-height: 42px;
  padding: 8px 36px;
  top: 0px;
`;
export const NaviLogo = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  height: 24px;

  cursor: pointer;
  will-change: transform;
  transform: scale(1);
  transition: transform 480ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  /* &:hover {
    transform: scale(1.02);
  } */
`;
export const NaviBtns = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 30vw;
`;

export const IconText = styled.div`
  /* display: flex; */
  padding: 4px;
`;
