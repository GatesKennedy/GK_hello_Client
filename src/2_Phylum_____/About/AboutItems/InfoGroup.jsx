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
    setToggleHeight(38);
    setStoryHeight(
      document.getElementById(`InfoGroup-Story${id}`).offsetHeight
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
    isOpen,
    isMore,
    summaryHeight,
    storyHeight,
    infoHeight,
    toggleHeight,
  ]);

  //  EFFECT
  useEffect(() => {
    __openItem === _favRank ? setIsOpen(true) : setIsOpen(false);
    calcHeight();
  }, [__openItem, _favRank, calcHeight]);

  useEffect(() => {
    console.log(`
    summaryHeight${id}:  ${summaryHeight}
    storyHeight${id}:    ${storyHeight}
    toggleHeight${id}:    ${toggleHeight}
    -------------------------

    infoHeight${id}:     ${infoHeight}
    displayHeight${id}:  ${displayHeight}
      `);
  }, [id, displayHeight, summaryHeight, storyHeight, toggleHeight, infoHeight]);

  //  FXN
  const handleDrop = () => {
    if (id === _topId) {
      _handleSelect();
      __openItem === _favRank ? setIsOpen(true) : setIsOpen(false);
    } else {
      setIsOpen(!isOpen);
      openStory === _favRank ? setOpenStory(0) : setOpenStory(_favRank);
    }
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
              type={'sub'} // 'main' or 'sub'
              __handleSelect={handleDrop}
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
                  _handleSelect={_handleSelect}
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
