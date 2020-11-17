import React, { Fragment, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import MediaCont from './MediaDisplay/MediaCont';
import ImageItem from './ImageItem';
//  STYLE
import { Btn1, ImageLrg, ImageIcon, ParaSml } from '../../../Design/Styled_aoe';
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
const AboutItem = ({
  _item: { titleImgUrl, title, tech, favRank, timeRank, summary, story },
  _openState,
  _setOpenState,
}) => {
  //  STATE
  const [itemHeight, setItemHeight] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function calcHeight() {
      const closeHeight = document.getElementById('AboutItem-ItemCont')
        .offsetHeight;
      const dropHeight = document.getElementById('AboutItem-StoryCont')
        .offsetHeight;
      const btnHeight = document.getElementById('AboutItem-ToggleCont')
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
      id='AboutItem-ItemCont'
      style={{ height: itemHeight }}
      className={_openState === favRank ? ' activeItem ' : ' inactiveItem '}
      onClick={() => handleToggle()}
    >
      <ImageItem
        _openState={_openState}
        favRank={favRank}
        titleImgUrl={titleImgUrl}
        imageSize={'large'}
      />
      <InfoCont id='AboutItem-InfoCont'>
        <ItemTitle id='AboutItem-ItemTitle'>{title}</ItemTitle>
        <ItemTech id='AboutItem-ItemTech'>
          <SubTitle>Titles: </SubTitle>
          <TechList id='AboutItem-TechList'>
            {tech.map((item, index) => (
              <TechItem
                id='AboutItem-TechItem'
                key={index}
                className={_openState !== favRank ? ' bg-gry1' : ' bg-gry2'}
              >
                {item}
              </TechItem>
            ))}
          </TechList>
        </ItemTech>
        <TextCont id='AboutItem-TextCont'>
          <SummaryCont id='AboutItem-SummaryCont'>
            <ItemSummary id='AboutItem-ItemSummary'>
              {summary.map((paragraph, index) => (
                <ParaSml key={index} id='AboutItem-ParaSml'>
                  {paragraph}
                </ParaSml>
              ))}
            </ItemSummary>
          </SummaryCont>
          <ToggleCont
            id='AboutItem-ToggleCont'
            style={
              isOpen
                ? { opacity: 0, transition: 'all 0.2s ease' }
                : {
                    opacity: 1,
                    transition: 'all 1s ease-in-out 0.2s',
                  }
            }
          >
            <Btn1 id='AboutItem-Btn1'>
              more <RiArrowDropDownLine />
            </Btn1>
          </ToggleCont>
          <StoryCont
            id='AboutItem-StoryCont'
            style={isOpen ? { opacity: 1 } : { opacity: 0 }}
          >
            <ItemStory id='AboutItem-ItemStory'>
              {story.map(({ id, title, imgUrl, text, media }) => (
                <ItemCont id='AboutItem-ItemCont' key={id}>
                  <ImageIcon id='AboutItem-ImageIcon' src={imgUrl}></ImageIcon>
                  <SubItem id='AboutItem-SubItem' key={id}>
                    <SubTitle id='AboutItem-SubTitle'>{title}</SubTitle>
                    {text.map((paragraph, index) => (
                      <ParaSml id='AboutItem-ParaSml' key={index}>
                        {paragraph}
                      </ParaSml>
                    ))}
                    <MediaCont
                      id='AboutItem-MediaCont'
                      _media={media}
                      _title={title}
                    />
                  </SubItem>
                </ItemCont>
              ))}
            </ItemStory>
          </StoryCont>
          <ToggleCont
            id='AboutItem-ToggleCont'
            style={
              !isOpen
                ? { opacity: 0, transition: 'all 0.2s ease' }
                : {
                    opacity: 1,
                    transition: 'all 1s ease-in-out 0.2s',
                  }
            }
          >
            <Btn1 id='AboutItem-Btn1' className={'bg-gry2'}>
              less <RiArrowUpSLine />
            </Btn1>
          </ToggleCont>
        </TextCont>
      </InfoCont>
    </ItemCont>
  );
};

AboutItem.propTypes = {
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

export default AboutItem;
