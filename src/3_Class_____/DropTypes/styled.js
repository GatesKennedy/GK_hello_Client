import styled from 'styled-components';

export const DropCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: flex-start;
  padding: 8px;

  transition: all 0.4s ease-in-out;
`;

export const DropItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 4px;

  transition: inherit;
`;
