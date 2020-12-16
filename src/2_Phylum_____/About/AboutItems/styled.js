//=================
//  Fldr: DropMain
import styled from 'styled-components';

export const ItemCont = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% + 8px);

  padding: 4px 0px 0px 4px;
  margin: 4px 0px 4px -8px;
  border-radius: 32px;

  background-color: #e7e7e7;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
    width: 100%;
    margin: 2px 0px 2px -8px;
    height: calc(initial - 24px);
    /* background-color: #e0e0e0; */
    &:hover {
      background-color: #f2f2f2;
    }
  }
  transition: all 0.2s ease-in-out;
`;
export const ImgContLrg = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 2px;
  padding: 4px;
  width: 16vw;
  height: calc(16vw - 0px);

  border-radius: 24px;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
    width: 142px;
    height: 138px;
    position: relative;
    margin: 0px 8px;
    top: 4px;
  }
  transition: all 0.4s ease-in-out;
`;
export const ImgContMed = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0px 8px 0px 8px;
  padding: 4px;
  width: 16vw;
  height: calc(16vw - 0px);

  border-radius: 24px;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
    width: 108px;
    height: 104px;
    position: relative;
    margin: 0px 8px;
    top: 4px;
  }
  transition: all 0.4s ease-in-out;
`;
export const ImgContSml = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0px 8px 0px 8px;
  padding: 4px;
  width: 16vw;
  height: calc(16vw - 0px);

  border-radius: 8px;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
    width: 84px;
    height: 80px;
    position: relative;
    top: 0px;
  }
  transition: all 0.4s ease-in-out;
`;
export const TitleCont = styled.div`
  display: flex;
  flex-direction: row;

  transition: inherit;
`;
export const StatsCont = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% - 16vw - 16px);
  padding: 4px;
  @media only screen and (min-width: 600px) {
    /* For desktop: */

    justify-content: center;
  }
  transition: inherit;
`;
export const InfoGroupCont = styled.section`
  display: flex;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
    position: relative;
    max-width: calc(100% - 13vw);
    position: relative;
    top: -24px;
    left: 7vw;
  }
  transition: all 0.4s ease-in-out;
`;
export const InfoCont = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: flex-start;

  width: calc(100%);
  padding: 0px 8px 0px 18px;

  overflow: hidden;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
    position: relative;
    max-width: calc(100% - 2vw);
    margin-left: 2vw;
  }
  transition: all 0.4s ease-in-out;
`;
export const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  overflow: hidden;
  position: relative;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
  }

  transition: all 0.4s ease-in-out;
`;
export const SummaryCont = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: inherit;
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
export const BodyCont = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
    flex-direction: row;
  }
  transition: all 0.2s ease-in-out;

  transition: all 0.4s ease-in-out;
`;
export const ToggleCont = styled.div`
  transition: all 0.4s ease-in-out;
  margin: 12px 0px 8px 0px;

  cursor: pointer;

  transition: inherit;
`;

export const TitleItem = styled.div`
  display: flex;

  padding: 0px 8px 0px 18px;

  @media only screen and (min-width: 600px) {
    /* For desktop: */
    position: relative;
    max-width: calc(100% - 1vw);
    margin-left: 1vw;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 80%;
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
  align-items: flex-start;

  min-height: 3em;

  font-size: smaller;

  transition: inherit;
`;
export const ItemSummary = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  width: 100%;

  font-size: smaller;
`;
export const ItemStory = styled.div``;

export const TechList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;

  font-size: smaller;
  width: 80vw;

  transition: inherit;
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

  transition: inherit;
`;

export const SubToggleCont = styled.div`
  margin-top: 8px;
`;

export const SubItem = styled.div`
  display: flex;
  flex-direction: row;
  /* align-content: center; */
  width: 100%;
`;
export const SubTitle = styled.div`
  display: flex;
  align-self: flex-start;

  font-size: 14px;
  font-weight: bold;
`;
export const SubText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
  width: 100%;
`;
