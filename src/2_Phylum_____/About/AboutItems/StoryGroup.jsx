import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import ToggleItem from '../../../3_Class_____/DropTypes/ToggleItem';
import StoryItem from './StoryItem';
import MediaCont from './MediaDisplay/MediaCont';

//  STYLE
import { ParaSml } from '../../../Design/Styled_aoe';
import {
  StoryCont,
  ItemCont,
  SubItem,
  SubTitle,
  SubText,
  SubToggleCont,
} from './styled';

const StoryGroup = ({
  favRank,
  isOpen,
  story: { id, title, summary, story, imgUrl, media, links },
  offset,
  _setStoryHeight,
}) => {
  console.log(`StoryObj${favRank}-${id}: `, story);
  //  STATE
  const [openId, setOpenId] = useState(0);
  const [isSubOpen, setIsSubOpen] = useState(false);
  // const [subSumHeight, setSubSumHeight] = useState(null);
  const [subStoryHeight, setSubStoryHeight] = useState(null);
  const [subHeight, setSubHeight] = useState(null);

  const calcSummaryHeight = useCallback(() => {
    const subSummaryHeight = document.getElementById(`StoryGroup-SubText`)
      .offsetHeight;
    setSubHeight(subSummaryHeight);
  }, []);
  const calcHeight = useCallback(
    (id) => {
      console.log('%c calcHeight()', 'color: blue');

      const subStoryHeight = document.getElementById(
        `StoryGroup-SubItem-Story${id}`
      ).offsetHeight;
      const fullHeight = document.getElementById(`StoryGroup-ItemCont${id}`)
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
    const storyHeight = document.getElementById(`StoryGroup-ItemCont${id}`)
      .offsetHeight;

    console.log(
      `%c StoryGroup${favRank}-ItemCont Height: ${storyHeight}`,
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
    <ItemCont
      id={`StoryGroup-ItemCont${id}`}
      key={id}
      style={{ height: `${subHeight}px` }}
    >
      <SubTitle id='StoryGroup-SubTitle'>{title}</SubTitle>

      <SubText id={`StoryGroup-SubText`}>
        <StoryItem summary={summary} />
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
        {story.length !== 0 && (
          <StoryCont>
            {story.length > 0 &&
              story.map(({ id, title, summary, media }) => (
                <SubItem id={`StoryGroup-SubItem-Story`} style={{ height: `` }}>
                  <ItemCont id='DropSub-ItemCont'>
                    <SubItem id='DropSub-SubItem'>
                      <SubText id='DropSub-SubText'>
                        <SubTitle id='DropSub-SubTitle'>{title}</SubTitle>
                        {summary.length !== 0 &&
                          summary.map((paragraph, index) => (
                            <ParaSml id='DropSub-ParaSml' key={index}>
                              {paragraph}
                            </ParaSml>
                          ))}
                        <SubItem>
                          {media.length !== 0 && (
                            <MediaCont
                              id='DropSub-MediaCont'
                              _media={media}
                              _title={title}
                            />
                          )}
                        </SubItem>
                      </SubText>
                    </SubItem>
                  </ItemCont>
                </SubItem>
              ))}
          </StoryCont>
        )}
      </SubText>
    </ItemCont>
  );
};

StoryGroup.propTypes = {
  _setStoryHeight: PropTypes.func.isRequired,
};

export default StoryGroup;
