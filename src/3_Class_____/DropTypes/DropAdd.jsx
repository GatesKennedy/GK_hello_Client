import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import ToggleItem from './ToggleItem';
import SummaryItem from '../../2_Phylum_____/About/AboutItems/SummaryItem';
import StoryItem from '../../2_Phylum_____/About/AboutItems/StoryItem';
//  STYLE
import { DropCont } from './styled';
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';

const DropAdd = ({
  favRank,
  summary,
  story,
  media,
  topOffset,
  _openState,
  _setOpenState,
  _handleToggle,
}) => {
  //  STATE
  const [dropHeight, setDropHeight] = useState(null);
  const [summaryHeight, setSummaryHeight] = useState(null);
  const [storyHeight, setStoryHeight] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  //  CALLBACK
  const calcHeight = useCallback(() => {
    const dropHeight = document.getElementById(`DropAdd-DropCont${favRank}`)
      .offsetHeight;
    const toggleHeight = document.getElementById('ToggleItem-ToggleCont')
      .offsetHeight;
    isOpen
      ? setDropHeight(summaryHeight + storyHeight + 2 * toggleHeight + 4)
      : setDropHeight(summaryHeight + toggleHeight);
  }, [isOpen, favRank, summaryHeight, storyHeight]);
  //  EFFECT
  useEffect(() => {
    _openState === favRank ? setIsOpen(true) : setIsOpen(false);

    calcHeight();
  }, [_openState, favRank, isOpen, calcHeight]);
  //  RETURN
  return (
    <DropCont id={`DropAdd-DropCont${favRank}`} style={{ height: dropHeight }}>
      <SummaryItem
        summary={summary}
        offset={topOffset}
        setSummaryHeight={setSummaryHeight}
        __handleToggle={_handleToggle}
      />
      <ToggleItem
        isOpen={_openState === favRank}
        isShown={_openState !== favRank}
        __handleToggle={_handleToggle}
      />

      <StoryItem
        favRank={favRank}
        story={story}
        media={media}
        isOpen={isOpen}
        offset={topOffset}
        _setStoryHeight={setStoryHeight}
      />
      <ToggleItem
        isOpen={_openState === favRank}
        isShown={_openState === favRank}
        __handleToggle={_handleToggle}
      />
    </DropCont>
  );
};

DropAdd.propTypes = {
  _handleToggle: PropTypes.func.isRequired,
};

export default DropAdd;
