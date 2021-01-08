import styled from 'styled-components';

//  Comp
export const ProfileCont = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin: 0vw 4vw;
  padding: 8px;
`;
export const ProfileHead = styled.h2`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 18px;
  padding: 8px 8px 0px 8px;
`;
export const ProfileBody = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0px 6vw;
  padding: 8px;
  border-radius: 12px;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
    position: relative;
    left: -24px;
  }
`;
//  Identity
export const IdentityCont = styled.section`
  padding: 12px;
  min-width: calc(30% - 12px);
`;
export const IdentityShow = styled.div`
  width: 80%;
  color: #828282;
`;
export const IdentityForm = styled.input`
  width: 80%;
`;
//  Personality
export const PersonalityCont = styled.section`
  padding: 12px;
  min-width: calc(50% - 12px);
`;
export const PersonalityShow = styled.div`
  height: 20vh;
`;
export const PersonalityForm = styled.div`
  height: 20vh;
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

  transition: all 0.3s ease-in-out 0s;
`;

//  EXTRA
export const Note = styled.label`
  padding: 0px 6px;
`;
export const FormState = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;
