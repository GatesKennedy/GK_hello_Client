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
  _openItem,
  _setOpenItem,
  _itemHeight,
  _setItemHeight,
  _handleToggle,
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
    const dropHeight = document.getElementById(`InfoGroup-InfoCont${favRank}`)
      .offsetHeight;
    isOpen
      ? setInfoHeight(summaryHeight + storyHeight + 2 * toggleHeight + 4)
      : setInfoHeight(summaryHeight + toggleHeight);
  }, [isOpen, favRank, summaryHeight, storyHeight, toggleHeight]);

  //  EFFECT
  useEffect(() => {
    _openItem === favRank ? setIsOpen(true) : setIsOpen(false);
    calcHeight();
  }, [_openItem, favRank, isOpen, calcHeight]);

  //  FXN
  const handleToggle = () => {
    _openItem === id ? _setOpenItem(0) : _setOpenItem(id);
  };

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
              className={_openItem !== favRank ? ' bg-gry1' : ' bg-gry2'}
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
          {/* <DropAdd
        dropType={dropType}
        summary={summary}
        story={story}
        media={media}
        _openItem={_openItem}
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
