import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { ParaSml } from '../../../Design/Styled_aoe';
import MediaCont from './MediaDisplay/MediaCont';
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
  storyImgUrls,
  offset,
  setStoryHeight,
}) => {
  console.log(`#${favRank} `, storyImgUrls.length);
  useEffect(() => {
    const storyHeight = document.getElementById(`StoryItem-StoryCont${favRank}`)
      .offsetHeight;
    setStoryHeight(storyHeight);
  }, [setStoryHeight]);
  return (
    <StoryCont
      id={`StoryItem-StoryCont${favRank}`}
      style={
        isOpen ? { opacity: 1 } : { opacity: 0 }
        // ? { opacity: 1, top: `${offset}em` }
        // : { opacity: 0, top: `${offset}em` }
      }
    >
      <ItemStory id='StoryItem-ItemStory' style={{}}>
        {story.map(({ id, title, imgUrl, text, media }) => (
          <ItemCont id='StoryItem-ItemCont' key={id}>
            {/* <ImageIcon id='StoryItem-ImageIcon' src={imgUrl}></ImageIcon> */}
            <SubItem id='StoryItem-SubItem' key={id}>
              <SubText id='StoryItem-SubText'>
                <SubTitle id='StoryItem-SubTitle'>{title}</SubTitle>
                <SubItem>
                  {text.length !== 0 && (
                    <SubText>
                      {text.map((paragraph, index) => (
                        <ParaSml id='StoryItem-ParaSml' key={index}>
                          {paragraph}
                        </ParaSml>
                      ))}
                    </SubText>
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

StoryItem.propTypes = {};

export default StoryItem;
