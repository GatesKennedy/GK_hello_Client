import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//  STYLE
import { ParaSml } from '../../Design/Styled_aoe';
import MediaCont from '../../2_Phylum_____/About/AboutItems/MediaDisplay/MediaCont';
import {
  ItemCont,
  StoryCont,
  ItemStory,
  SubItem,
  SubTitle,
  SubText,
} from '../../2_Phylum_____/About/AboutItems/styled';

const DropSub = ({ favRank, openId, story, __isOpen, _isSubOpen }) => {
  return (
    <StoryCont
      id={`DropSub-StoryCont${favRank}`}
      style={__isOpen ? { opacity: 1 } : { opacity: 0 }}
    >
      <ItemStory id='DropSub-ItemStory'>
        {story.map(({ id, title, imgUrl, summary, story, media }) => (
          <ItemCont id='DropSub-ItemCont' key={id}>
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
        ))}
      </ItemStory>
    </StoryCont>
  );
};

DropSub.propTypes = {};

export default DropSub;
