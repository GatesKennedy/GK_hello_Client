import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import SummaryItem from './SummaryItem';
import MediaCont from './MediaDisplay/MediaCont';
import ToggleItem from './ToggleItem';
//  STYLE
import { InfoCont, TextCont, BodyCont } from './styled';

const InfoGroup = ({
  favRank,
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
    favRank === 1 && console.log('%c GroupCallback', 'color: darkseagreen');

    setStoryHeight(
      document.getElementById(`InfoGroup-Story${favRank}`).offsetHeight
    );
    setInfoHeight(summaryHeight + storyHeight);
    isOpen
      ? setDisplayHeight(infoHeight - toggleHeight)
      : setDisplayHeight(infoHeight - storyHeight - 2 * toggleHeight);
  }, [isOpen, favRank, summaryHeight, storyHeight, infoHeight, toggleHeight]);

  //  EFFECT
  useEffect(() => {
    favRank === 1 &&
      console.log(`GroupCallBack ${favRank}
    summaryHeight:  ${summaryHeight}
    storyHeight:    ${storyHeight}
    toggleHeight:    ${toggleHeight}
    -------------------------

    infoHeight:     ${infoHeight}
    displayHeight:  ${displayHeight}
      `);
  }, [
    favRank,
    // _itemHeight,
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
    openStory === favRank ? setOpenStory(0) : setOpenStory(favRank);
    calcHeight();
  };

  return (
    <InfoCont id={`InfoGroup-InfoCont${favRank}`}>
      <BodyCont
        id={`InfoGroup-BodyCont${favRank}`}
        style={{ height: displayHeight }}
      >
        <TextCont id={`InfoGroup-TextCont${favRank}`}>
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
            {story.map((item) => (
              <InfoGroup
                favRank={item.id}
                __handleSelect={handleDrop}
                __openItem={openStory}
                __item={item}
                _handleSelect={handleDrop}
              />
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
