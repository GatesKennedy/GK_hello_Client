import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import styled from 'styled-components';
import { Btn1, ImageMed, ParaSml } from '../Design/Styled_aoe';
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';

export const ItemCont = styled.section`
  display: flex;
  flex-direction: row;

  min-height: 116px;
  max-width: 960px;
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
  justify-content: center;

  margin-left: 8px;
  padding: 4px;
  height: 104px;
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
  width: 80%;
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
  font-size: large;
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
  margin-bottom: 4px;
  width: 100%;

  font-size: smaller;
`;
export const ItemStory = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 8px;

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

//  MAIN
const DropProject = ({
  _item: { titleImgUrl, title, tech, favRank, timeRank, summary, story },
  _openState,
  _setOpenState,
}) => {
  //  FXN
  const handleToggle = () => {
    _openState === favRank ? _setOpenState(0) : _setOpenState(favRank);
  };

  return (
    <ItemCont
      id='DropProject-ItemCont'
      className={_openState === favRank ? ' bg-gry1' : ' bg-gry2'}
      onClick={() => handleToggle()}
    >
      <ImgCont
        id='DropProject-ImgCont'
        className={_openState === favRank && ' bg-gry2'}
      >
        <ImageMed
          id='DropProject-ImageMed'
          src={titleImgUrl}
          alt='oops... bad link'
        />
      </ImgCont>
      <InfoCont id='DropProject-InfoCont'>
        <ItemTitle id='DropProject-ItemTitle'>{title}</ItemTitle>
        <ItemTech id='DropProject-ItemTech'>
          <SubTitle>Tech: </SubTitle>
          <TechList id='DropProject-TechList'>
            {tech.map((item, index) => (
              <TechItem
                id='DropProject-TechItem'
                key={index}
                className={_openState !== favRank ? ' bg-gry1' : ' bg-gry2'}
              >
                {item}
              </TechItem>
            ))}
          </TechList>
        </ItemTech>
        {_openState !== favRank ? (
          <SummaryCont id='DropProject-SummaryCont'>
            <ItemSummary id='DropProject-ItemSummary'>{summary}</ItemSummary>
            <Btn1 onClick={() => _setOpenState(favRank)}>
              more <RiArrowDropDownLine />
            </Btn1>
          </SummaryCont>
        ) : (
          <StoryCont>
            <ItemStory>
              {story.map((paragraph, index) => (
                <ParaSml key={index} id='DropProject-ParaSml'>
                  {paragraph}
                </ParaSml>
              ))}
            </ItemStory>
            <Btn1
              onClick={() => _setOpenState(0)}
              className={_openState === favRank && 'bg-gry3-5 txt-white'}
            >
              less <RiArrowUpSLine />
            </Btn1>
          </StoryCont>
        )}
      </InfoCont>
    </ItemCont>
  );
};

DropProject.propTypes = {
  _item: PropTypes.shape({
    titleImgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    favRank: PropTypes.number.isRequired,
    summary: PropTypes.arrayOf(PropTypes.string).isRequired,
    story: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  _openState: PropTypes.number.isRequired,
  _setOpenState: PropTypes.func.isRequired,
};

export default DropProject;
