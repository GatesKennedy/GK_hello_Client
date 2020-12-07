import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import SummaryItem from './SummaryItem';
import MediaCont from './MediaDisplay/MediaCont';
import ToggleItem from './ToggleItem';
//  STYLE
import {
  InfoCont,
  ItemTitle,
  ItemTech,
  TechList,
  TechItem,
  SubTitle,
} from './styled';

const InfoGroup = ({
  favRank,
  _itemHeight,
  _setItemHeight,
  _handleToggle,
  _openInfo,
  _setOpenInfo,
  __openItem,
  __setOpenItem,
  __item,
  __item: { id, title, tech, summary, story, media, link },
  __dropType,
}) => {
  //  STATE
  const [isOpen, setIsOpen] = useState(false);
  const [infoHeight, setInfoHeight] = useState(null);
  const [summaryHeight, setSummaryHeight] = useState(null);
  const [storyHeight, setStoryHeight] = useState(null);
  const [toggleHeight, setToggleHeight] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  //  CALLBACK
  const calcHeight = useCallback(() => {
    const fullHeight = document.getElementById(`InfoGroup-InfoCont${favRank}`)
      .offsetHeight;
    const childrenHeight = document.getElementById(
      `InfoGroup-Children${favRank}`
    ).offsetHeight;
    isOpen
      ? setInfoHeight(summaryHeight + childrenHeight + 2 * toggleHeight + 4)
      : setInfoHeight(summaryHeight + toggleHeight);
  }, [isOpen, favRank, summaryHeight, toggleHeight]);

  //  EFFECT
  useEffect(() => {
    __openItem === favRank ? setIsOpen(true) : setIsOpen(false);
    calcHeight();
    console.log('%c InfoGroup:', 'color: goldenRod');
    console.log(`group ${favRank}:
        isOpen: ${isOpen}
        infoHeight: ${infoHeight}`);
  }, [__openItem, favRank, isOpen, calcHeight, infoHeight]);

  useEffect(() => {
    _setItemHeight(infoHeight);
  }, [_setItemHeight, infoHeight]);
  //  FXN

  return (
    <InfoCont
      id={`InfoGroup-InfoCont${favRank}`}
      style={{ height: infoHeight }}
    >
      <ItemTitle id='InfoGroup-ItemTitle' onClick={() => _handleToggle()}>
        {title}
      </ItemTitle>
      <ItemTech id='InfoGroup-ItemTech' onClick={() => _handleToggle()}>
        <SubTitle>{favRank === 1 ? 'Titles:' : 'Tech:'}</SubTitle>
        <TechList id='InfoGroup-TechList'>
          {tech.map((item, index) => (
            <TechItem
              id='InfoGroup-TechItem'
              key={index}
              className={__openItem !== favRank ? ' bg-gry1' : ' bg-gry2'}
            >
              {item}
            </TechItem>
          ))}
        </TechList>
      </ItemTech>

      <div id='InfoGroup-BodyCont'>
        <div id='InfoGroup-TextCont'>
          <SummaryItem
            id={id}
            summary={summary}
            setSummaryHeight={setSummaryHeight}
            __handleToggle={_handleToggle}
          />
          <ToggleItem
            isOpen={isOpen}
            isShown={true}
            type={'main'} // or 'sub'
            _setToggleHeight={setToggleHeight}
            __handleToggle={_handleToggle}
          />
          {story[0].summary.length > 0 && (
            <div
              id={`InfoGroup-Children${favRank}`}
              style={{ height: isOpen ? '100px' : '0px' }}
            >
              {story[0].summary.map((para, index) => (
                <div key={index}>{para}</div>
              ))}
            </div>
          )}
          {/* <DropAdd
        dropType={dropType}
        summary={summary}
        story={story}
        media={media}
        __openItem={__openItem}
        _setOpenState={_setOpenState}
        _topOffset={topOffset}
        _handleToggle={handleToggle}
        _setTopOffset={setTopOffset}
        _setInfoHeight={setInfoHeight}
        favRank={favRank}
      /> */}
        </div>
        <MediaCont id='InfoGroup-MediaCont' _media={media} />
      </div>
    </InfoCont>
  );
};

InfoGroup.propTypes = {};

export default InfoGroup;
