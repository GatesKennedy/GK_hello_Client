import React, { Fragment, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
//  COMPS
import MediaCont from '../MediaDisplay/MediaCont';
//  STYLE
import '../../Design/animate.css';
import { ImageIcon, ParaSml } from '../../Design/Styled_aoe';
import {
  ItemCont,
  StoryCont,
  ItemStory,
  SubItem,
  SubTitle,
} from '../DropMain/styled';

const DropAdd = ({ favRank, story, _openState }) => {
  const [menuHeight, setMenuHeight] = useState(null);
  useEffect(() => {
    // calcHeight();
    console.log('FXN > handleToggle() > open this? = ', favRank === _openState);
    console.log('$$$ > heightState = ', menuHeight);
    console.log('$$$ > ~~~~~~~~~~~~~~~~~~~~~~~~~');
  }, [_openState, favRank, menuHeight]);
  function calcHeight(el) {
    if (_openState === favRank && el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
      console.log('FXN > calcHeight() > height = ', height);
    } else setMenuHeight(0);
  }
  return (
    <StoryCont id='DropMain-StoryCont' style={{ height: menuHeight }}>
      <CSSTransition
        in={_openState === favRank}
        timeout={400}
        classNames='drop-story'
        onEnter={calcHeight}
        unmountOnExit
      >
        <ItemStory id='DropMain-ItemStory'>
          {story.map(({ id, title, imgUrl, text, media }) => (
            <ItemCont id='DropMain-ItemCont' key={id}>
              <ImageIcon id='DropMain-ImageIcon' src={imgUrl}></ImageIcon>
              <SubItem id='DropMain-SubItem' key={id}>
                <SubTitle id='DropMain-SubTitle'>{title}</SubTitle>
                {text.map((paragraph, index) => (
                  <ParaSml id='DropMain-ParaSml' key={index}>
                    {paragraph}
                  </ParaSml>
                ))}
                <MediaCont
                  id='DropMain-MediaCont'
                  _media={media}
                  _title={title}
                />
              </SubItem>
            </ItemCont>
          ))}
        </ItemStory>
      </CSSTransition>
    </StoryCont>
  );
};

export default DropAdd;
