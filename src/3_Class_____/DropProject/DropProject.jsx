import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import styled from 'styled-components';
import { Btn1, ImageMed, ParaSml } from '../../Design/Styled_aoe';
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';

import {
  ItemCont,
  ImgCont,
  InfoCont,
  SummaryCont,
  StoryCont,
  ToggleCont,
  ItemTitle,
  ItemTech,
  ItemSummary,
  ItemStory,
  TechList,
  TechItem,
  SubItem,
  SubTitle,
} from './styled';
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
            <ToggleCont>
              <Btn1 onClick={() => _setOpenState(favRank)}>
                more <RiArrowDropDownLine />
              </Btn1>
            </ToggleCont>
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
            <ToggleCont>
              <Btn1
                onClick={() => _setOpenState(0)}
                className={_openState === favRank && 'bg-gry3-5 txt-white'}
              >
                less <RiArrowUpSLine />
              </Btn1>
            </ToggleCont>
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
