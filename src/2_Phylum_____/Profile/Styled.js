import styled from 'styled-components';

//  Comp
export const ProfileCont = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin: 0vw 4vw;
  padding: 8px;
`;
export const ProfileHead = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  padding: 8px 8px 0px 8px;
`;
export const ProfileBody = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0px 6vw;
  padding: 8px;
  border-radius: 12px;

  @media only screen and (max-width: 600px) {
    /* For desktop: */
    position: relative;
    left: -24px;
  }
`;
//  PROFILE
export const SectionCont = styled.section`
  padding-top: 9vh;
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

  @media only screen and (max-width: 600px) {
    /* For desktop: */
    width: calc(100% + 32px);
  }

  &:hover {
    background-color: #e7e7e7;
  }
`;
