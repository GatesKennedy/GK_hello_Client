import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DropSub from '../../../3_Class_____/DropTypes/DropSub';
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

const StorySub = ({ favRank, story, __isOpen, _isSubOpen }) => {
  console.log(`${favRank} story: `, story);

  return (
    <StoryCont
      id={`StorySub-StoryCont${favRank}`}
      style={__isOpen ? { opacity: 1 } : { opacity: 0 }}
    >
      <ItemStory id='StorySub-ItemStory'>
        {story.map(({ id, title, imgUrl, summary, story, media }) => (
          <ItemCont id='StorySub-ItemCont' key={id}>
            <SubItem id='StorySub-SubItem'>
              <SubText id='StorySub-SubText'>
                <SubTitle id='StorySub-SubTitle'>{title}</SubTitle>
                {summary.length !== 0 &&
                  summary.map((paragraph, index) => (
                    <ParaSml id='StoryItem-ParaSml' key={index}>
                      {paragraph}
                    </ParaSml>
                  ))}
                <SubItem>
                  {media.length !== 0 && (
                    <MediaCont
                      id='StorySub-MediaCont'
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

StorySub.propTypes = {};

export default StorySub;
