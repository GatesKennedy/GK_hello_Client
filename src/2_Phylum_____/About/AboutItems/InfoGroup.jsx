import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import SummaryItem from './SummaryItem';
import MediaCont from './MediaDisplay/MediaCont';
import ToggleItem from './ToggleItem';
//  STYLE
import { InfoCont, TextCont, BodyCont, TitleItem } from './styled';

const InfoGroup = ({
  topId,
  parentId,
  toggleParent,
  setParentHeight,
  item: { id, summary, story, media, links },
}) => {
  //  STATE
  const isMore = story.length > 0;
  const [isOpen, setIsOpen] = useState(false);
  const [openId, setOpenId] = useState(0);

  const [textHeight, setTextHeight] = useState(null); //  full height
  const [summaryHeight, setSummaryHeight] = useState(null);
  const [toggleHeight, setToggleHeight] = useState(null);
  const [storyHeight, setStoryHeight] = useState(0);
  const [mediaHeight, setMediaHeight] = useState(null);

  const [topOffset, setTopOffset] = useState(0);
  //  CALLBACK
  const calcHeight = useCallback(() => {
    setToggleHeight(38);
    setStoryHeight(
      document.getElementById(`InfoGroup-Story${id}`).offsetHeight
    );
    isMore
      ? setTextHeight(summaryHeight + toggleHeight)
      : setTextHeight(summaryHeight);
    if (id === 1) {
      console.log(`calcHeight() > summaryHeight${id}: `, summaryHeight);
      console.log(`calcHeight() > storyHeight${id}: `, storyHeight);
      console.log(`calcHeight() > textHeight${id}: `, textHeight);
    }
    isOpen
      ? setParentHeight(textHeight + storyHeight)
      : setParentHeight(textHeight);
    console.log('%c---------', 'color: green');
    console.log(`caclHeight() > id ${id}
      summaryHeight ${id}:    ${summaryHeight}
      toggleHeight  ${id}:    ${toggleHeight}
      storyHeight   ${id}:    ${storyHeight}
      mediaHeight   ${id}:    ${mediaHeight}
      -------------------------
      textHeight    ${id}:     ${textHeight}
        `);
  }, [
    id,
    isOpen,
    isMore,
    openId,
    summaryHeight,
    storyHeight,
    textHeight,
    toggleHeight,
    mediaHeight,
    setParentHeight,
  ]);

  //  EFFECT
  useEffect(() => {
    openId === id ? setIsOpen(true) : setIsOpen(false);

    calcHeight();
  }, [id, openId, calcHeight]);

  useEffect(() => {
    console.log(`
    topId:        ${topId}
    parentId:     ${parentId}
    item.id:      ${id}

    summaryHeight${id}:  ${summaryHeight}
    storyHeight${id}:    ${storyHeight}
    toggleHeight${id}:    ${toggleHeight}
    -------------------------
    textHeight${id}:     ${textHeight}
      `);
  }, [
    id,
    topId,
    parentId,
    summaryHeight,
    storyHeight,
    toggleHeight,
    textHeight,
  ]);

  //  FXN
  const handleDrop = () => {
    id === topId && toggleParent();
    openId === id ? setOpenId(0) : setOpenId(id);
  };

  return (
    <InfoCont id={`InfoGroup-InfoCont${id}`}>
      <BodyCont id={`InfoGroup-BodyCont${id}`}>
        <TextCont id={`InfoGroup-TextCont${id}`} style={{ height: textHeight }}>
          <SummaryItem
            topId={topId}
            isMore={isMore}
            id={id}
            summary={summary}
            setParentHeight={setSummaryHeight}
            _toggleParent={toggleParent}
          />
          {isMore && (
            <ToggleItem
              isOpen={isOpen}
              isMore={isMore}
              type={'sub'} // 'main' or 'sub'
              _toggleParent={handleDrop}
            />
          )}
          <div id={`InfoGroup-Story${id}`}>
            {story.map((child) => (
              <Fragment>
                <TitleItem id={`InfoGroup-TitleItem${child.id}`}>
                  {child.title}
                </TitleItem>
                <InfoGroup
                  topId={topId}
                  parentId={openId}
                  setParentHeight={setStoryHeight}
                  toggleParent={handleDrop}
                  item={child}
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
