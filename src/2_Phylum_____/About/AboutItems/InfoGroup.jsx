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

  const [isOpen, setIsOpen] = useState(id === parentId);
  const [openChild, setOpenChildId] = useState(0);

  const [textHeight, setTextHeight] = useState(null); //  full height
  const [summaryHeight, setSummaryHeight] = useState(null);
  const toggleHeight = 38;
  const [storyHeight, setStoryHeight] = useState(0);
  const [mediaHeight, setMediaHeight] = useState(null);

  const [topOffset, setTopOffset] = useState(0);
  //  CALLBACK
  const calcHeight = useCallback(() => {
    setStoryHeight(
      document.getElementById(`InfoGroup-Story${id}`).offsetHeight
    );
    isMore && isOpen
      ? setTextHeight(summaryHeight + toggleHeight + storyHeight)
      : setTextHeight(summaryHeight + toggleHeight);
    isOpen
      ? setParentHeight(textHeight + storyHeight)
      : setParentHeight(textHeight);
    console.log('%c--------- caclHeight() >', 'color: #9bdbd8');
    console.log(`  caclHeight()
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
    summaryHeight,
    storyHeight,
    textHeight,
    toggleHeight,
    mediaHeight,
    setParentHeight,
  ]);

  //  EFFECT
  useEffect(() => {
    console.log('%c--------- Effect log', 'color: #9bdbd8');
    console.log(`  setIsOpen()
          item.id:      ${id}
          parentId:     ${parentId}
          isMore:       ${isMore}
          isOpen:       ${isOpen}
      `);
    parentId === id ? setIsOpen(true) : setIsOpen(false);
    console.log('%c--------- Effect log', 'color: #9bdbd8');
    console.log(`  setIsOpen()
          item.id:      ${id}
          parentId:     ${parentId}
          isMore:       ${isMore}
          isOpen:       ${isOpen}
      `);
    calcHeight();
  }, [
    id,
    openChild,
    isOpen,
    isMore,
    parentId,
    storyHeight,
    summaryHeight,
    textHeight,
    toggleHeight,
    calcHeight,
  ]);

  useEffect(() => {
    // console.log('%cInfoGroup Effect log', 'color: #9bdbd8');
    // console.log(`
    // parentId:     ${parentId}
    // item.id:      ${id}
    // summaryHeight${id}:  ${summaryHeight}
    // storyHeight${id}:    ${storyHeight}
    // toggleHeight${id}:    ${toggleHeight}
    // -------------------------
    // textHeight${id}:     ${textHeight}
    //   `);
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
    console.log('%chandleDrop() > ', 'color: #9bdbd8');
    if (id === topId) toggleParent();
    else openChild === id ? setOpenChildId(0) : setOpenChildId(id);
    console.log(`  handleDrop()
    item.id:  ${id}
    topId:    ${topId}
    openChild:   ${openChild}
    `);
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
                  parentId={openChild}
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
