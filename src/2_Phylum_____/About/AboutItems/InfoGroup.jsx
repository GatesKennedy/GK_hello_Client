import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import SummaryItem from './SummaryItem';
import MediaCont from './MediaDisplay/MediaCont';
import ToggleItem from './ToggleItem';
//  STYLE
import { InfoCont, TextCont, BodyCont, TitleItem } from './styled';

const InfoGroup = ({
  _favRank,
  _handleSelect,
  __openItem,
  __item: { id, title, tech, summary, story, media, links },
}) => {
  //  STATE
  const [isOpen, setIsOpen] = useState(false);
  const [openStory, setOpenStory] = useState(0);
  const [infoHeight, setInfoHeight] = useState(null);
  const [displayHeight, setDisplayHeight] = useState(null);

  const [summaryHeight, setSummaryHeight] = useState(null);
  const [storyHeight, setStoryHeight] = useState(null);
  const [toggleHeight, setToggleHeight] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  //  CALLBACK
  const calcHeight = useCallback(() => {
    _favRank === 1 &&
      console.log('%c InfoGroup > calcHeight() ', 'color: darkseagreen');
    setToggleHeight(38);
    setStoryHeight(
      document.getElementById(`InfoGroup-Story${_favRank}`).offsetHeight
    );
    setInfoHeight(summaryHeight + storyHeight);
    if (id === 1) {
      console.log(`calcHeight() > summaryHeight${id}: `, summaryHeight);
      console.log(`calcHeight() > storyHeight${id}: `, storyHeight);
      console.log(`calcHeight() > InfoHeight${id}: `, infoHeight);
    }
    isOpen
      ? setDisplayHeight(infoHeight - toggleHeight)
      : setDisplayHeight(summaryHeight + toggleHeight);
  }, [
    isOpen,
    _favRank,
    id,
    summaryHeight,
    storyHeight,
    infoHeight,
    toggleHeight,
  ]);

  //  EFFECT
  useEffect(() => {
    if (_favRank === 1) {
      console.log('%c InfoGroup > log heights', 'color: goldenRod');
      console.log(`
    summaryHeight:  ${summaryHeight}
    storyHeight:    ${storyHeight}
    toggleHeight:    ${toggleHeight}
    -------------------------

    infoHeight:     ${infoHeight}
    displayHeight:  ${displayHeight}
      `);
    }
  }, [
    _favRank,
    displayHeight,
    summaryHeight,
    storyHeight,
    toggleHeight,
    infoHeight,
  ]);

  useEffect(() => {
    _favRank === 1 &&
      console.log('%c InfoGroup > setIsOpen() > ', 'color: goldenRod');
    __openItem === _favRank ? setIsOpen(true) : setIsOpen(false);
    _favRank === 1 &&
      console.log('%c InfoGroup > calcHeight() > ', 'color: goldenRod');

    calcHeight();
  }, [__openItem, _favRank, calcHeight]);

  //  FXN
  const handleDrop = () => {
    _favRank === 1 &&
      console.log('%c InfoGroup > handleDrop()', 'color: darkseagreen');
    openStory === _favRank ? setOpenStory(0) : setOpenStory(_favRank);
    calcHeight();
  };

  return (
    <InfoCont
      id={`InfoGroup-InfoCont${_favRank}`}
      style={{ height: displayHeight }}
    >
      <BodyCont id={`InfoGroup-BodyCont${_favRank}`}>
        <TextCont id={`InfoGroup-TextCont${_favRank}`}>
          <SummaryItem
            _id={id}
            _summary={summary}
            _setSummaryHeight={setSummaryHeight}
            __handleSelect={_handleSelect}
          />
          <ToggleItem
            isOpen={isOpen}
            isShown={story.length > 0}
            type={'sub'} // or 'sub'
            __handleSelect={_handleSelect}
          />
          <div id={`InfoGroup-Story${_favRank}`}>
            {story.map((item) => (
              <Fragment>
                <TitleItem id={`InfoGroup-TitleItem${item.id}`}>
                  {item.title}
                </TitleItem>
                <InfoGroup
                  _favRank={item.id}
                  __handleSelect={handleDrop}
                  __openItem={openStory}
                  __item={item}
                  _handleSelect={handleDrop}
                />
              </Fragment>
            ))}
          </div>
        </TextCont>
        {media.length > 0 && (
          <MediaCont id='InfoGroup-MediaCont' _media={media} />
        )}
      </BodyCont>
    </InfoCont>
  );
};

InfoGroup.propTypes = {};

export default InfoGroup;
