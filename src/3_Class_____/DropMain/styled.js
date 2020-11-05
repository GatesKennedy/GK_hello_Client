import styled from 'styled-components';

export const ItemCont = styled.section`
  display: flex;
  flex-direction: row;

  min-height: 116px;

  width: calc(100% + 16px);
  padding: 8px 0px;
  margin: 2px 0px 2px -8px;
  border-radius: 12px;

  cursor: pointer;

  &:hover {
    background-color: #e7e7e7;
  }

  @media only screen and (max-width: 600px) {
    /* For desktop: */
    width: calc(100% + 32px);
  }
`;
export const ImgCont = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin: 0px 8px 0px 16px;
  padding: 4px;
  height: 136px;
  border-radius: 8px;

  @media only screen and (max-width: 600px) {
    /* For desktop: */
    position: relative;
    top: 0px;
    width: 16vw;
    height: 16vw;
  }
`;
export const InfoCont = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: flex-start;

  height: calc(100% + 6px);
  width: 90%;
  padding: 0px 8px;
  margin-top: -6px;

  @media only screen and (max-width: 600px) {
    /* For desktop: */
    /* position: relative;
    max-width: calc(100% + 6px); */
  }
`;
export const SummaryCont = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;
`;
export const StoryCont = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: flex-start;
  padding: 8px;
`;

export const ItemTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  margin-bottom: 2px;

  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: larger;
  font-weight: bold;
`;
export const ItemTech = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  margin-bottom: 4px;
  font-size: smaller;
`;
export const ItemSummary = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  width: 100%;

  font-size: smaller;
`;
export const ItemStory = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 24px 8px 24px;

  width: 100%;
  font-size: smaller;
`;

export const TechList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;

  font-size: smaller;
  width: 80vw;
`;
export const TechItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  height: 100%;

  list-style-type: none;
  margin: 2px 0px 2px 4px;
  padding: 1px 4px;

  font-size: smaller;
`;

export const SubTitle = styled.div`
  display: flex;
  align-self: flex-start;

  font-size: 14px;
  font-weight: bold;
`;
export const SubItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 8px;

  width: 80%;
`;
