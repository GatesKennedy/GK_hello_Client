import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import DropSub from '../../../3_Class_____/DropTypes/DropSub';
//  STYLE
import { ParaSml } from '../../../Design/Styled_aoe';
import MediaCont from './MediaDisplay/MediaCont';
import ToggleItem from '../../../3_Class_____/DropTypes/ToggleItem';

import {
  ItemCont,
  StoryCont,
  ItemStory,
  SubItem,
  SubTitle,
  SubText,
  SubToggleCont,
} from './styled';

const StoryItem = ({
  favRank,
  isOpen,
  story,
  media,
  offset,
  _setStoryHeight,
}) => {
  //  STATE

  const [openId, setOpenId] = useState(0);
  const [isSubOpen, setIsSubOpen] = useState(false);
  // const [subSumHeight, setSubSumHeight] = useState(null);
  const [subStoryHeight, setSubStoryHeight] = useState(null);
  const [subHeight, setSubHeight] = useState(null);

  const calcSummaryHeight = useCallback(() => {
    const subSummaryHeight = document.getElementById(`StoryItem-SubText`)
      .offsetHeight;
    setSubHeight(subSummaryHeight);
  }, []);
  const calcHeight = useCallback(
    (id) => {
      console.log('%c calcHeight()', 'color: blue');

      const subStoryHeight = document.getElementById(
        `StoryItem-SubItem-Story${id}`
      ).offsetHeight;
      const fullHeight = document.getElementById(`StoryItem-ItemCont${id}`)
        .offsetHeight;
      const shutHeight = fullHeight - subStoryHeight;
      // const offset = summaryHeight + 2 * toggleHeight;
      console.log('subStoryHeight: ', subStoryHeight);
      console.log('fullHeight: ', fullHeight);
      console.log('shutHeight: ', shutHeight);
      if (openId === id) {
        setSubHeight(fullHeight);
        // _setTopOffset(offset);
      } else {
        setSubHeight(shutHeight);
        // _setTopOffset(0);
      }
    },
    [openId]
  );

  useEffect(() => {
    const storyHeight = document.getElementById(`StoryItem-StoryCont${favRank}`)
      .offsetHeight;

    console.log(
      `%c StoryItem${favRank}-StoryCont Height: ${storyHeight}`,
      'color: blue'
    );

    _setStoryHeight(storyHeight);
  }, [_setStoryHeight, favRank]);
  //  FXN
  const handleToggle = () => {};
  const handleSub = (id) => {
    console.log(`id: ${id}, openId: ${openId}`);
    openId === id ? setOpenId(0) : setOpenId(id);

    calcHeight(id);
    console.log('openId: ', openId);
  };

  return (
    <StoryCont
      id={`StoryItem-StoryCont${favRank}`}
      style={isOpen ? { opacity: 1 } : { opacity: 0 }}
    >
      {story.map(({ id, title, imgUrl, summary, story, media }) => (
        <ItemCont
          id={`StoryItem-ItemCont${id}`}
          key={id}
          style={{ height: `${subHeight}px` }}
        >
          <SubItem id='StoryItem-SubItem'>
            <SubText id='StoryItem-SubText'>
              <SubTitle id='StoryItem-SubTitle'>{title}</SubTitle>

              <SubText id={`StoryItem-SubText`}>
                {summary.map((paragraph, index) => (
                  <ParaSml id='StoryItem-ParaSml' key={index}>
                    {paragraph}
                  </ParaSml>
                ))}

                {story.length !== 0 && (
                  <SubToggleCont onClick={() => handleSub(id)}>
                    <ToggleItem
                      isShown={true}
                      isOpen={id === openId}
                      type='sub'
                      __handleToggle={handleToggle}
                    />
                  </SubToggleCont>
                )}
              </SubText>

              <SubItem
                id={`StoryItem-SubItem-Story${id}`}
                style={{ height: `` }}
              >
                <Fragment>
                  <DropSub
                    id='StoryItem-DropSub'
                    story={story}
                    favRank={favRank}
                    openId={id}
                    __isOpen={isOpen}
                    _isSubOpen={isSubOpen}
                  />
                  {media.length !== 0 && (
                    <MediaCont
                      id='StoryItem-MediaCont'
                      _media={media}
                      _title={title}
                    />
                  )}
                </Fragment>
              </SubItem>
            </SubText>
          </SubItem>
        </ItemCont>
      ))}
    </StoryCont>
  );
};

StoryItem.propTypes = {
  _setStoryHeight: PropTypes.func.isRequired,
};

export default StoryItem;
