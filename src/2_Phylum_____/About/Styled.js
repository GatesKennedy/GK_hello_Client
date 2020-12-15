//=================
//  Fldr: About
import styled from 'styled-components';

export const AboutCont = styled.section`
  display: flex;
  flex-direction: column;

  width: 92vw;

  margin: 0vw 4vw;
  padding: 8px;
`;
export const AboutHead = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  padding: 8px 8px 0px 8px;
`;
export const AboutBody = styled.section`
  display: flex;
  flex-direction: column;

  width: calc(100%);

  padding: 8px;
  border-radius: 12px;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
    position: relative;
    left: 13px;
    width: calc(100% - 6vw);

    margin: 0vw 4vw 0vw 2vw;
  }
`;

export const IntroCont = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 116px;
  width: calc(100% + 16px);
  padding: 8px 12px 8px 16px;
  margin: 2px 0px 2px -8px;
  border-radius: 12px;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
    width: calc(100% + 32px);
  }

  &:hover {
    background-color: #e7e7e7;
  }
`;
export const BodyCont = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 116px;
  max-width: 960px;
  width: calc(100% + 16px);
  padding: 8px 12px 8px 16px;
  margin: 2px 0px 2px -8px;
  border-radius: 12px;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
    width: calc(100% + 32px);
  }

  &:hover {
    background-color: #e7e7e7;
  }
`;
