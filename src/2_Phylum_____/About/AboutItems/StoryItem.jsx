import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
//  COMPS
// import DropSub from '../../../3_Class_____/DropTypes/DropSub';
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

const StoryItem = ({ story, favRank, __isOpen, _isSubOpen }) => {
  return (
    <SubItem id={`StoryGroup-SubItem-Story`} style={{ height: `` }}>
      <ItemCont id='DropSub-ItemCont'>
        <SubItem id='DropSub-SubItem'>
          <SubText id='DropSub-SubText'>
            {/* <SubTitle id='DropSub-SubTitle'>{story.title}</SubTitle>
            {story.summary.length !== 0 &&
              story.summary.map((paragraph, index) => (
                <ParaSml id='DropSub-ParaSml' key={index}>
                  {paragraph}
                </ParaSml>
              ))} */}
            {/* <SubItem>
                {media.length !== 0 && (
                  <MediaCont
                    id='DropSub-MediaCont'
                    _media={media}
                    _title={title}
                  />
                )}
              </SubItem> */}
          </SubText>
        </SubItem>
      </ItemCont>
    </SubItem>
  );
};

StoryItem.propTypes = {};

export default StoryItem;
