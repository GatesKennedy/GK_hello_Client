import styled from 'styled-components';

//  COMPS
export const Kingdom = styled.section`
  background-color: #222631;
  color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 0px 20px;
`;

export const NaviCont = styled.section`
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100vw;
    padding: 18px 36px;
    top: 0px;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: #26282f;
}
`;
export const NaviLogo = styled.section`
  display: flex;
`;
export const NaviBtns = styled.section`
  display: flex;
  min-width: 20vh;
`;

export const Phylum = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  justify-self: center;
  justify-items: center;
  align-self: center;
  align-items: center;
`;
export const Hello = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-items: center;
  align-self: center;
  align-items: center;
  width: 200px;
  min-width: 50%;
  height: 300px;
  min-height: 50%;
  background-color: #131313;
`;

export const Head = styled.section`
  padding-top: 9vh;
  font-size: calc(10px + 2vmin);
`;

export const Body = styled.section`
  padding-top: 9vh;
`;
