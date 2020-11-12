import React, { Fragment, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
//  COMPS
import MediaCont from '../MediaDisplay/MediaCont';
//  STYLE
import '../../Design/animate.css';
import { Btn1, ImageLrg, ImageIcon, ParaSml } from '../../Design/Styled_aoe';
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
const DropMain = ({
  _item: { titleImgUrl, title, tech, favRank, timeRank, summary, story },
  _openState,
  _setOpenState,
}) => {
  //  STATE
  const [itemHeight, setItemHeight] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function calcHeight() {
      const closeHeight = document.getElementById('DropMain-ItemCont')
        .offsetHeight;
      const dropHeight = document.getElementById('DropMain-StoryCont')
        .offsetHeight;
      const btnHeight = document.getElementById('DropMain-ToggleCont')
        .offsetHeight;
      _openState === favRank
        ? setItemHeight(closeHeight + dropHeight + btnHeight)
        : setItemHeight(closeHeight - dropHeight - btnHeight);
    }
    _openState === favRank ? setIsOpen(true) : setIsOpen(false);
    calcHeight();
  }, [_openState, favRank]);

  useEffect(() => {
    console.log('$$$ > itemHeight = ', itemHeight);
    console.log('$$$ > =========================');
  }, [itemHeight]);
  //  FXN
  const handleToggle = async () => {
    _openState === favRank ? _setOpenState(0) : _setOpenState(favRank);
  };

  return (
    <ItemCont
      id='DropMain-ItemCont'
      style={{ height: itemHeight }}
      className={_openState === favRank ? ' activeItem ' : ' inactiveItem '}
      onClick={() => handleToggle()}
    >
      <ImgCont
        id='DropMain-ImgCont'
        className={_openState === favRank && ' bg-gry2'}
      >
        <ImageLrg
          id='DropMain-ImageLrg'
          src={titleImgUrl}
          alt='oops... bad link'
        />
      </ImgCont>
      <InfoCont id='DropMain-InfoCont'>
        <ItemTitle id='DropMain-ItemTitle'>{title}</ItemTitle>
        <ItemTech id='DropMain-ItemTech'>
          <SubTitle>Titles: </SubTitle>
          <TechList id='DropMain-TechList'>
            {tech.map((item, index) => (
              <TechItem
                id='DropMain-TechItem'
                key={index}
                className={_openState !== favRank ? ' bg-gry1' : ' bg-gry2'}
              >
                {item}
              </TechItem>
            ))}
          </TechList>
        </ItemTech>
        <SummaryCont id='DropMain-SummaryCont'>
          <ItemSummary id='DropMain-ItemSummary'>
            {summary.map((paragraph, index) => (
              <ParaSml key={index} id='DropMain-ParaSml'>
                {paragraph}
              </ParaSml>
            ))}
          </ItemSummary>
        </SummaryCont>

        <ToggleCont
          id='DropMain-ToggleCont'
          style={
            isOpen
              ? { opacity: 0, transition: 'all 0.2s ease' }
              : {
                  opacity: 1,
                  transition: 'all 1s ease-in-out 0.2s',
                }
          }
        >
          <Btn1 id='DropMain-Btn1'>
            more <RiArrowDropDownLine />
          </Btn1>
        </ToggleCont>
        <StoryCont
          id='DropMain-StoryCont'
          style={isOpen ? { opacity: 1 } : { opacity: 0 }}
        >
          <ItemStory id='DropMain-ItemStory'>
            {story.map(({ id, title, imgUrl, text, media }) => (
              <ItemCont id='DropMain-ItemCont' key={id}>
                <ImageIcon id='DropMain-ImageIcon' src={imgUrl}></ImageIcon>
                <SubItem id='DropMain-SubItem' key={id}>
                  <SubTitle id='DropMain-SubTitle'>{title}</SubTitle>
                  {text.map((paragraph, index) => (
                    <ParaSml id='DropMain-ParaSml' key={index}>
                      {paragraph}
                    </ParaSml>
                  ))}
                  <MediaCont
                    id='DropMain-MediaCont'
                    _media={media}
                    _title={title}
                  />
                </SubItem>
              </ItemCont>
            ))}
          </ItemStory>
        </StoryCont>
        <ToggleCont
          id='DropMain-ToggleCont'
          style={
            !isOpen
              ? { opacity: 0, transition: 'all 0.2s ease' }
              : {
                  opacity: 1,
                  transition: 'all 1s ease-in-out 0.2s',
                }
          }
        >
          <Btn1 id='DropMain-Btn1' className={'bg-gry2'}>
            less <RiArrowUpSLine />
          </Btn1>
        </ToggleCont>
      </InfoCont>
    </ItemCont>
  );
};

DropMain.propTypes = {
  _item: PropTypes.shape({
    titleImgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    favRank: PropTypes.number.isRequired,
    summary: PropTypes.arrayOf(PropTypes.string).isRequired,
    story: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  _openState: PropTypes.number.isRequired,
  _setOpenState: PropTypes.func.isRequired,
};

export default DropMain;
