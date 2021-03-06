import styled from 'styled-components';

export const AuthCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

  height: 100%;
  width: 100%;
`;

export const FormCont = styled.section`
  width: 80%;
  min-width: 240px;
`;

export const BtnsCont = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  margin-top: 2px;
  width: calc(80% - 4em + 6px);
  min-width: 180px;
`;

export const BtnsRow = styled.div`
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: center;
  justify-content: space-evenly;

  margin: 2px 0px;
  width: 100%;
  flex-shrink: 1;
`;

export const BtnSpread = styled.button`
  text-align: center;
  width: 5vw;
  margin: 2px;
`;
