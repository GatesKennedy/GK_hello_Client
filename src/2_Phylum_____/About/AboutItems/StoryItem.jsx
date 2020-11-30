import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DropSub from '../../../3_Class_____/DropTypes/DropSub';
import StorySub from './StorySub';
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
} from './styled';

const StoryItem = ({
  favRank,
  isOpen,
  story,
  media,
  offset,
  _setStoryHeight,
}) => {
  useEffect(() => {
    const storyHeight = document.getElementById(`StoryItem-StoryCont${favRank}`)
      .offsetHeight;
    console.log(
      `%c StoryItem${favRank}-StoryCont Height: ${storyHeight}`,
      'color: blue'
    );

    _setStoryHeight(storyHeight);
  }, [_setStoryHeight, favRank]);

  return (
    <StoryCont
      id={`StoryItem-StoryCont${favRank}`}
      style={isOpen ? { opacity: 1 } : { opacity: 0 }}
    >
      <ItemStory id='StoryItem-ItemStory'>
        {story.map(({ id, title, imgUrl, summary, story, media }) => (
          <ItemCont id='StoryItem-ItemCont' key={id}>
            <SubItem id='StoryItem-SubItem'>
              <SubText id='StoryItem-SubText'>
                <SubTitle id='StoryItem-SubTitle'>{title}</SubTitle>

                {summary.length !== 0 && (
                  <SubText id='StoryItem-SubText'>
                    {summary.map((paragraph, index) => (
                      <ParaSml id='StoryItem-ParaSml' key={index}>
                        {paragraph}
                      </ParaSml>
                    ))}
                    <ToggleItem isOpen={isOpen} />
                  </SubText>
                )}
                <SubItem id='StoryItem-SubItem-Story'>
                  {story.length !== 0 && isOpen && (
                    <StorySub
                      id='StoryItem-StorySub'
                      story={story}
                      favRank={favRank}
                      isOpen={isOpen}
                    />
                  )}
                  {media.length !== 0 && (
                    <MediaCont
                      id='StoryItem-MediaCont'
                      _media={media}
                      _title={title}
                    />
                  )}
                </SubItem>
              </SubText>
            </SubItem>
          </ItemCont>
        ))}
      </ItemStory>
    </StoryCont>
  );
};

StoryItem.propTypes = {
  _setStoryHeight: PropTypes.func.isRequired,
};

export default StoryItem;
