import styled from 'styled-components';
//===========

//==========
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 3px;
  padding: 3px;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3px;
  padding-left: 3px;
  flex-shrink: 1;
`;

export const ContRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  align-self: flex-start;
  justify-content: space-around;
  width: 100%;
  margin: 3px;
  padding-left: 6px;
`;

export const ContCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  justify-content: space-around;
  margin: 3px;
  padding-left: 6px;
`;

export const Col = styled.div`
  flex-direction: column;
  flex-shrink: 1;
  align-self: flex-start;
  align-items: stretch;
  justify-content: flex-start;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  align-self: flex-start;
  align-items: center;
  justify-content: space-around;
`;
export const Row_Left = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  align-self: flex-start;
  align-items: center;
  justify-content: flex-start;
`;

export const Btn = styled.div`
  text-align: center;
  width: 6vw;
`;
