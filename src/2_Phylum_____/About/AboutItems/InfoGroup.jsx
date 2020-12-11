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
  _topId,
  __openItem,
  __item: { id, title, tech, summary, story, media, links },
}) => {
  //  STATE
  const isMore = story.length > 0;
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
    isMore
      ? setInfoHeight(summaryHeight + storyHeight + toggleHeight)
      : setInfoHeight(summaryHeight + storyHeight);
    if (id === 1) {
      console.log(`calcHeight() > summaryHeight${id}: `, summaryHeight);
      console.log(`calcHeight() > storyHeight${id}: `, storyHeight);
      console.log(`calcHeight() > InfoHeight${id}: `, infoHeight);
    }
    isOpen
      ? setDisplayHeight(infoHeight)
      : setDisplayHeight(infoHeight - storyHeight);
  }, [
    id,
    _favRank,
    isOpen,
    isMore,
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
    <InfoCont id={`InfoGroup-InfoCont${id}`}>
      <BodyCont id={`InfoGroup-BodyCont${id}`}>
        <TextCont
          id={`InfoGroup-TextCont${id}`}
          style={{ height: displayHeight }}
        >
          <SummaryItem
            isMore={isMore}
            // isMore={isMore}
            _id={id}
            _summary={summary}
            _setSummaryHeight={setSummaryHeight}
            __handleSelect={_handleSelect}
            __topId={_topId}
          />
          {isMore && (
            <ToggleItem
              isOpen={isOpen}
              isMore={isMore}
              type={'sub'} // or 'sub'
              __handleSelect={_handleSelect}
            />
          )}
          <div id={`InfoGroup-Story${id}`}>
            {story.map((item) => (
              <Fragment>
                <TitleItem id={`InfoGroup-TitleItem${item.id}`}>
                  {item.title}
                </TitleItem>
                <InfoGroup
                  _favRank={item.id}
                  _topId={_topId}
                  // !!!
                  _handleSelect={handleDrop}
                  __openItem={openStory}
                  __item={item}
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
