import styled from 'styled-components';

//  COMPS
export const Kingdom = styled.section`
  color: #c4c2b7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 0px 20px;
`;

//  General
export const Cont1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-items: center;
  justify-content: center;
  align-self: center;
  align-items: center;
  align-content: center;
  width: 20vw;
  min-width: 400px;
  height: 32vh;
  min-height: 50%;
  background-color: #3c3c3a;
`;

export const NaviCont = styled.section`
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100vw;
    height: 48px;
    padding: 8px 36px;
    top: 0px;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
`;
export const NaviLogo = styled.section`
  display: flex;
`;
export const NaviBtns = styled.section`
  display: flex;
  justify-content: space-evenly;
  min-width: 30vw;
`;

export const Head = styled.section`
  padding-top: 9vh;
  font-size: calc(10px + 2vmin);
`;

export const Body = styled.section`
  padding-top: 9vh;
`;
