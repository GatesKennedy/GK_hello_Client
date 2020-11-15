import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
//  COMPS
import MediaCont from '../MediaDisplay/MediaCont';
//  STYLE
import '../../Design/animate.css';
import { Btn1, ImageMed, ParaSml } from '../../Design/Styled_aoe';
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';

import {
  ItemCont,
  ImgCont,
  InfoCont,
  TextCont,
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
  const [infoHeight, setInfoHeight] = useState(110);
  const [topPosition, setTopPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const calcHeight = useCallback(() => {
    const infoHeight = document.getElementById('DropProject-InfoCont')
      .offsetHeight;
    const summaryHeight = document.getElementById('DropProject-SummaryCont')
      .offsetHeight;
    const storyHeight = document.getElementById('DropProject-StoryCont')
      .offsetHeight;
    console.log(`$$$ infoHeight #${favRank} = `, infoHeight);
    console.log(`$$$ summaryHeight #${favRank} = `, summaryHeight);
    console.log(`$$$ storyHeight #${favRank} = `, storyHeight);
    if (isOpen) {
      setInfoHeight(infoHeight + storyHeight - 46);
      setTopPosition(-3);
      console.log(`IS OPEN`);
    } else {
      setInfoHeight(110);
      setTopPosition(0);
      console.log(`IS CLOSED`);
    }
  }, [isOpen, favRank]);
  useEffect(() => {
    _openState === favRank ? setIsOpen(true) : setIsOpen(false);
    console.log(
      `$$$ favRank: ${favRank}, _openState: ${_openState}, isOpen: ${isOpen}`
    );
    calcHeight();
  }, [_openState, favRank, isOpen, calcHeight]);

  useEffect(() => {}, [isOpen]);

  //  FXN

  const handleToggle = () => {
    isOpen ? _setOpenState(0) : _setOpenState(favRank);
  };

  return (
    <ItemCont
      id='DropProject-ItemCont'
      className={isOpen ? ' activeItem ' : ' inactiveItem '}
      onClick={() => handleToggle()}
    >
      <ImgCont id='DropProject-ImgCont' className={isOpen && ' bg-gry2'}>
        <ImageMed
          id='DropProject-ImageMed'
          src={titleImgUrl}
          alt='oops... bad link'
        />
      </ImgCont>
      <InfoCont id='DropProject-InfoCont' style={{ height: infoHeight }}>
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
        <TextCont id='DropProject-TextCont'>
          <SummaryCont
            id='DropProject-SummaryCont'
            style={{ top: `${topPosition}em` }}
          >
            <ItemSummary id='DropProject-ItemSummary'>{summary}</ItemSummary>
          </SummaryCont>
          <StoryCont
            id='DropProject-StoryCont'
            style={{ top: `${topPosition}em` }}
          >
            <ItemStory id='DropProject-ItemStory'>
              {story.map((paragraph, index) => (
                <ParaSml key={index} id='DropProject-ParaSml'>
                  {paragraph}
                </ParaSml>
              ))}
            </ItemStory>
          </StoryCont>
        </TextCont>
        <ToggleCont id='DropProject-ToggleCont'>
          {!isOpen ? (
            <Btn1 onClick={() => _setOpenState(favRank)}>
              more <RiArrowDropDownLine />
            </Btn1>
          ) : (
            <Btn1
              onClick={() => _setOpenState(0)}
              className={isOpen && 'bg-gry3-5 txt-white'}
            >
              less <RiArrowUpSLine />
            </Btn1>
          )}
        </ToggleCont>
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
