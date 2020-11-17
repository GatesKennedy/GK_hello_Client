import React from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { ParaSml } from '../../../Design/Styled_aoe';
import MediaCont from './MediaDisplay/MediaCont';
import { ItemCont, StoryCont, ItemStory, SubItem, SubTitle } from './styled';

const StoryItem = ({ isOpen, story }) => {
  return (
    <StoryCont
      id='StoryItem-StoryCont'
      style={isOpen ? { opacity: 1 } : { opacity: 0 }}
    >
      <ItemStory id='StoryItem-ItemStory'>
        {story.map(({ id, title, imgUrl, text, media }) => (
          <ItemCont id='StoryItem-ItemCont' key={id}>
            {/* <ImageIcon id='StoryItem-ImageIcon' src={imgUrl}></ImageIcon> */}
            <SubItem id='StoryItem-SubItem' key={id}>
              <SubTitle id='StoryItem-SubTitle'>{title}</SubTitle>
              {text.map((paragraph, index) => (
                <ParaSml id='StoryItem-ParaSml' key={index}>
                  {paragraph}
                </ParaSml>
              ))}
              <MediaCont
                id='StoryItem-MediaCont'
                _media={media}
                _title={title}
              />
            </SubItem>
          </ItemCont>
        ))}
      </ItemStory>
    </StoryCont>
  );
};

StoryItem.propTypes = {};

export default StoryItem;
