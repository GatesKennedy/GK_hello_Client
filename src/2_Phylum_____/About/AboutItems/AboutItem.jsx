import React, { Fragment, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import ImageItem from './ImageItem';
import DropAdd from '../../../3_Class_____/DropTypes/DropAdd';
import DropSwitch from '../../../3_Class_____/DropTypes/DropSwitch';
//  STYLE

import {
  ItemCont,
  InfoCont,
  ItemTitle,
  ItemTech,
  TechList,
  TechItem,
  SubTitle,
} from './styled';

//  MAIN
const AboutItem = ({
  dropType,
  _item: { titleImgUrl, title, tech, favRank, timeRank, summary, story, media },
  _openState,
  _setOpenState,
}) => {
  //  STATE
  const [topOffset, setTopOffset] = useState(0);
  const [infoHeight, setInfoHeight] = useState(0);
  //  FXN
  const handleToggle = () => {
    _openState === favRank ? _setOpenState(0) : _setOpenState(favRank);
  };

  return (
    <ItemCont
      id='AboutItem-ItemCont'
      className={_openState === favRank ? ' activeItem ' : ' inactiveItem '}
    >
      <ImageItem
        _openState={_openState}
        _handleToggle={handleToggle}
        favRank={favRank}
        titleImgUrl={titleImgUrl}
        imageSize={favRank === 1 ? 'large' : 'medium'}
      />
      {/* <InfoCont id='AboutItem-InfoCont' style={{ height: infoHeight }}> */}
      <InfoCont id='AboutItem-InfoCont'>
        <ItemTitle id='AboutItem-ItemTitle' onClick={() => handleToggle()}>
          {title}
        </ItemTitle>
        <ItemTech id='AboutItem-ItemTech' onClick={() => handleToggle()}>
          <SubTitle>{favRank === 1 ? 'Titles:' : 'Tech:'}</SubTitle>
          <TechList id='AboutItem-TechList'>
            {tech.map((item, index) => (
              <TechItem
                id='AboutItem-TechItem'
                key={index}
                className={_openState !== favRank ? ' bg-gry1' : ' bg-gry2'}
              >
                {item}
              </TechItem>
            ))}
          </TechList>
        </ItemTech>
        {dropType === 'add' ? (
          <DropAdd
            summary={summary}
            story={story}
            media={media}
            _openState={_openState}
            _setOpenState={_setOpenState}
            _handleToggle={handleToggle}
            topOffset={topOffset}
            setTopOffset={setTopOffset}
            favRank={favRank}
          />
        ) : (
          <DropSwitch
            summary={summary}
            story={story}
            media={media}
            _openState={_openState}
            _setOpenState={_setOpenState}
            _handleToggle={handleToggle}
            _setTopOffset={setTopOffset}
            _setInfoHeight={setInfoHeight}
            topOffset={topOffset}
            favRank={favRank}
          />
        )}
      </InfoCont>
    </ItemCont>
  );
};

AboutItem.propTypes = {
  _item: PropTypes.shape({
    titleImgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    favRank: PropTypes.number.isRequired,
    summary: PropTypes.arrayOf(PropTypes.string).isRequired,
    story: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  _openState: PropTypes.number.isRequired,
  _setOpenState: PropTypes.func.isRequired,
};

export default AboutItem;
