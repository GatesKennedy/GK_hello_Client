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
  BodyCont,
} from './styled';

const InfoGroup = ({
  favRank,
  _itemHeight,
  _setItemHeight,
  _handleSelect,
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
  const [displayHeight, setDisplayHeight] = useState(null);
  const [titleHeight, setTitleHeight] = useState(null);
  const [summaryHeight, setSummaryHeight] = useState(null);
  const [storyHeight, setStoryHeight] = useState(null);
  const [toggleHeight, setToggleHeight] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  //  CALLBACK
  const calcHeight = useCallback(() => {
    favRank === 1 && console.log('%c GroupCallback', 'color: darkseagreen');
    const titleHt = document.getElementById(`InfoGroup-ItemTitle${id}`)
      .offsetHeight;
    const techHt = document.getElementById(`InfoGroup-ItemTech${id}`)
      .offsetHeight;
    setTitleHeight(titleHt + techHt);
    setStoryHeight(
      document.getElementById(`InfoGroup-Story${favRank}`).offsetHeight
    );
    setInfoHeight(summaryHeight + storyHeight);
    isOpen
      ? setDisplayHeight(titleHeight + infoHeight - toggleHeight)
      : setDisplayHeight(
          titleHeight + infoHeight - storyHeight - 2 * toggleHeight
        );
  }, [
    id,
    isOpen,
    favRank,
    titleHeight,
    summaryHeight,
    storyHeight,
    infoHeight,
    toggleHeight,
  ]);

  //  EFFECT
  useEffect(() => {
    favRank === 1 &&
      console.log(`GroupCallBack ${favRank}
    summaryHeight:  ${summaryHeight}
    storyHeight:    ${storyHeight}
    toggleHeight:    ${toggleHeight}
    -------------------------
    _itemHeight:    ${_itemHeight}
    infoHeight:     ${infoHeight}
    displayHeight:  ${displayHeight}
      `);
  }, [
    favRank,
    _itemHeight,
    displayHeight,
    summaryHeight,
    storyHeight,
    toggleHeight,
    infoHeight,
  ]);

  useEffect(() => {
    favRank === 1 &&
      console.log(
        '%c GroupEffect > setIsOpen() > calcHeight()',
        'color: goldenRod'
      );
    __openItem === favRank ? setIsOpen(true) : setIsOpen(false);

    calcHeight();
  }, [__openItem, favRank, calcHeight]);

  //  FXN
  const handleDrop = () => {
    _handleSelect(favRank);
    calcHeight();
  };

  return (
    <InfoCont id={`InfoGroup-InfoCont${favRank}`}>
      <ItemTitle
        id={`InfoGroup-ItemTitle${id}`}
        onClick={() => _handleSelect()}
      >
        {title}
      </ItemTitle>
      <ItemTech id={`InfoGroup-ItemTech${id}`} onClick={() => _handleSelect()}>
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

      <BodyCont
        id={`InfoGroup-BodyCont${favRank}`}
        style={{ height: displayHeight }}
      >
        <div id={`InfoGroup-TextCont${favRank}`}>
          <SummaryItem
            _id={id}
            _summary={summary}
            _setSummaryHeight={setSummaryHeight}
            __handleSelect={_handleSelect}
          />
          <ToggleItem
            isOpen={isOpen}
            isShown={true}
            type={'main'} // or 'sub'
            _setToggleHeight={setToggleHeight}
            __handleSelect={_handleSelect}
          />
          <div id={`InfoGroup-Story${favRank}`}>
            {story.map(({ summary, title, id }) => (
              <div key={id}>
                <div>{title}</div>
                {summary.length > 0 &&
                  story[0].summary.map((para, index) => (
                    <div key={index}>{para}</div>
                  ))}
              </div>
            ))}
          </div>
          {/* <DropAdd
        dropType={dropType}
        summary={summary}
        story={story}
        media={media}
        __openItem={__openItem}
        _setOpenState={_setOpenState}
        _topOffset={topOffset}
        _handleSelect={handleToggle}
        _setTopOffset={setTopOffset}
        _setInfoHeight={setInfoHeight}
        favRank={favRank}
      /> */}
        </div>

        <MediaCont id='InfoGroup-MediaCont' _media={media} />
      </BodyCont>
    </InfoCont>
  );
};

InfoGroup.propTypes = {};

export default InfoGroup;
