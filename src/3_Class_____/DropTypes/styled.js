import styled from 'styled-components';

export const DropCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: calc(100% + 18vw);

  overflow: hidden;
  position: relative;
  left: -18vw;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
    width: 100%;
    left: 0vw;
  }

  transition: all 0.4s ease-in-out;
`;

export const StoryCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: flex-start;
  padding: 0px 0px 8px 16px;
  width: 100%;
  font-size: smaller;
  transition: inherit;
`;

export const DropItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 4px;

  transition: inherit;
`;

export const ToggleCont = styled.div`
  transition: all 0.4s ease-in-out;
  /* margin: 12px 0px 0px 0px; */
`;
