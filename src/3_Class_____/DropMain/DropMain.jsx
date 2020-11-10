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
  const [showStory, setShowStory] = useState(false);
  useEffect(() => {
    if (_openState !== favRank) setShowStory(false);
  }, [_openState, favRank]);
  const [menuHeight, setMenuHeight] = useState(null);
  const DropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(DropdownRef.current?.firstChild.offsetHeight);
  }, []);
  //  FXN
  const handleToggle = () => {
    console.log('DropMain.jsx > handleToggle() > favRank = ', favRank);
    _openState === favRank ? _setOpenState(0) : _setOpenState(favRank);
    _openState === favRank ? setShowStory(false) : setShowStory(true);
  };
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <ItemCont
      id='DropMain-ItemCont'
      className={_openState === favRank ? ' bg-gry1' : ' bg-gry2'}
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

        <CSSTransition
          in={showStory}
          timeout={300}
          classNames='drop'
          onEnter={calcHeight}
          unmountOnExit
        >
          {_openState === favRank ? (
            <StoryCont
              id='DropMain-StoryCont'
              variant='primary'
              dismissible
              onClose={() => setShowStory(!showStory)}
              style={{ height: menuHeight }}
              ref={DropdownRef}
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
          ) : (
            <div></div>
          )}
        </CSSTransition>
        <ToggleCont id='DropMain-ToggleCont'>
          <Btn1
            id='DropMain-Btn1'
            className={_openState === favRank && 'bg-gry3-5 txt-white'}
          >
            {showStory ? (
              <Fragment>
                less <RiArrowUpSLine />
              </Fragment>
            ) : (
              <Fragment>
                more <RiArrowDropDownLine />
              </Fragment>
            )}
          </Btn1>
        </ToggleCont>
        {/* 
        {_openState === favRank && (
          <StoryCont id='DropMain-StoryCont'>
            <ItemStory id='DropMain-ItemStory'>
              {story.map(({ id, title, imgUrl, text, media }) => (
                <ItemCont id='DropMain-ItemCont'>
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
                      onClick={() => stayOpen(favRank)}
                      _media={media}
                      _title={title}
                    />
                  </SubItem>
                </ItemCont>
              ))}
            </ItemStory>
            <ToggleCont>
              <Btn1
                id='DropMain-Btn1'
                onClick={() => _setOpenState(0)}
                className={_openState === favRank && 'bg-gry3-5 txt-white'}
              >
                less <RiArrowUpSLine />
              </Btn1>
            </ToggleCont>
          </StoryCont>
        )} */}
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
