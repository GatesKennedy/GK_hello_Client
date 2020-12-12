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
    // console.log(`   ${id}: caclHeight()
    //       isOpen:       ${isOpen}
    //       summaryHeight ${id}:    ${summaryHeight}
    //       toggleHeight  ${id}:    ${toggleHeight}
    //       storyHeight   ${id}:    ${storyHeight}
    //       mediaHeight   ${id}:    ${mediaHeight}
    //       -------------------------
    //       textHeight    ${id}:     ${textHeight}
    //     `);
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
    parentId === id ? setIsOpen(true) : setIsOpen(false);
    console.log(
      '%cuseEffect() > setIsOpen() > calcHeight() >',
      'color: #9bdbd8'
    );
    console.log(`   ${id}: setIsOpen()
          item.id:      ${id}
          parentId:     ${parentId}
          isMore:       ${isMore}
          openChild:    ${openChild}
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

  //  FXN
  const handleToggle = (localId) => {
    console.log('%chandleToggle() > ', 'color: #9bdbd8');
    console.log(`   ${id}: handleToggle() > Before
    localId:    ${localId}
    item.id:    ${id}
    topId:      ${topId}
    openChild:  ${openChild}
`);
    if (localId === id) toggleParent(localId);
    else localId === openChild ? setOpenChildId(0) : setOpenChildId(localId);
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
            handleToggle={handleToggle}
          />
          {isMore && (
            <ToggleItem
              isOpen={isOpen}
              isMore={isMore}
              id={id}
              type={'sub'} // 'main' or 'sub'
              handleToggle={handleToggle}
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
                  toggleParent={handleToggle}
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
