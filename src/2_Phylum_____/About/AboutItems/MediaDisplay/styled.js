import styled from 'styled-components';

export const MediaRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  width: 100%;
  padding: 12px;
  @media only screen and (min-width: 600px) {
    /* For desktop: */
    position: relative;
    max-width: calc(100% - 13vw);
    position: relative;

    left: 7vw;
  }
`;
export const MediaTitle = styled.h4`
  display: flex;
  flex-direction: column-reverse;
`;
export const MediaItem = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 4px 12px;
`;
