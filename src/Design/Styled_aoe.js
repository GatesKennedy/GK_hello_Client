import styled from 'styled-components';
//===========

//==========
export const FormLabel = styled.div`
  display: flex;
  padding: 2px 4px;
`;

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
export const RowBottom = styled.div`
  bottom: 0px;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  align-items: center;
  justify-self: center;
  justify-content: space-evenly;
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
  width: 5vw;
  margin: 2px;
`;

export const Btn2 = styled.div`
  text-align: center;
  width: 10vw;
  margin: 2px;
`;

export const pad1 = styled.div`
  min-width: 30px;
`;
