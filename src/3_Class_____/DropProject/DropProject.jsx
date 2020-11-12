import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
//  COMPS
import MediaCont from '../MediaDisplay/MediaCont';
//  STYLE
import '../../Design/animate.css';
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
  //  STATE
  const [itemHeight, setItemHeight] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    _openState === favRank ? setIsOpen(true) : setIsOpen(false);
    calcHeight();
  }, [_openState, favRank]);

  //  FXN
  const handleToggle = async () => {
    _openState === favRank ? _setOpenState(0) : _setOpenState(favRank);
    _openState === favRank ? setIsOpen(false) : setIsOpen(true);
    calcHeight();
  };

  function calcHeight() {
    const closeHeight = document.getElementById('DropProject-InfoCont')
      .offsetHeight;
    // const dropHeight = document.getElementById('DropProject-StoryCont')
    //   .offsetHeight;
    const btnHeight = document.getElementById('DropProject-ToggleCont')
      .offsetHeight;
    _openState === favRank
      ? setItemHeight(closeHeight)
      : setItemHeight(closeHeight);
  }

  return (
    <ItemCont
      id='DropProject-ItemCont'
      style={{ height: itemHeight }}
      className={isOpen ? ' activeItem ' : ' inactiveItem '}
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
          <SummaryCont id='DropProject-StoryCont'>
            <ItemSummary id='DropProject-ItemSummary'>{summary}</ItemSummary>
            <ToggleCont id='DropProject-ToggleCont'>
              <Btn1 onClick={() => _setOpenState(favRank)}>
                more <RiArrowDropDownLine />
              </Btn1>
            </ToggleCont>
          </SummaryCont>
        ) : (
          <StoryCont id='DropProject-StoryCont'>
            <ItemStory id='DropProject-ItemStory'>
              {story.map((paragraph, index) => (
                <ParaSml key={index} id='DropProject-ParaSml'>
                  {paragraph}
                </ParaSml>
              ))}
            </ItemStory>
            <ToggleCont id='DropProject-ToggleCont'>
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
