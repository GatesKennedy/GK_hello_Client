import styled from 'styled-components';
import config from '../../sass/_config.scss';

//  GENERAL
export const CntrCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-items: center;
  align-self: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const OffSet = styled.section`
  margin-top: 180px;
  padding-top: 9vh;
`;

//  COMPS
export const Navi = styled.section`
  height: 14vh;
  max-height: 110px;
  width: 100%;
  padding: 3px;

  position: sticky;
  display: flex;
  justify-content: space-between;

  top: 0px;
  z-index: 9999;
`;

export const Hellod = styled.div`
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

export const Headd = styled.section`
  padding-top: 9vh;
`;

export const Bodyd = styled.section`
  padding-top: 9vh;
`;
