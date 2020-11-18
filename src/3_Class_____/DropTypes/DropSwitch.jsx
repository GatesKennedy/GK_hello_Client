import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import ToggleItem from './ToggleItem';
import SummaryItem from '../../2_Phylum_____/About/AboutItems/SummaryItem';
import StoryItem from '../../2_Phylum_____/About/AboutItems/StoryItem';
//  STYLE
import { DropCont } from './styled';
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';

const DropSwitch = ({
  favRank,
  summary,
  story,
  topOffset,
  _openState,
  _setOpenState,
  setTopOffset,
  itemHeight,
  setItemHeight,
}) => {
  //  STATE
  const [dropHeight, setDropHeight] = useState(null);
  const [summaryHeight, setSummaryHeight] = useState(null);
  const [storyHeight, setStoryHeight] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const calcHeight = useCallback(() => {
    const dropHeight = document.getElementById(`DropSwitch-DropCont${favRank}`)
      .offsetHeight;
    // const summaryHeight = document.getElementById('SummaryItem-SummaryCont')
    //   .offsetHeight;
    // const storyHeight = document.getElementById('StoryItem-StoryCont')
    //   .offsetHeight;
    const toggleHeight = document.getElementById('ToggleItem-ToggleCont')
      .offsetHeight;
    if (isOpen) {
      setDropHeight(storyHeight + toggleHeight);
      setTopOffset(-3);
      console.log(`DropSwitch #${favRank} IS OPEN`);
    } else {
      setDropHeight(summaryHeight + toggleHeight);
      setTopOffset(0);
      console.log(`DropSwitch #${favRank} IS CLOSED`);
    }
  }, [isOpen, favRank, summaryHeight, storyHeight, setTopOffset]);

  useEffect(() => {
    _openState === favRank ? setIsOpen(true) : setIsOpen(false);
    calcHeight();
  }, [_openState, favRank, isOpen, calcHeight]);

  return (
    <DropCont
      id={`DropSwitch-DropCont${favRank}`}
      style={{ height: dropHeight }}
    >
      <SummaryItem
        favRank={favRank}
        summary={summary}
        offset={topOffset}
        setSummaryHeight={setSummaryHeight}
      />
      <ToggleItem
        isOpen={_openState === favRank}
        _setOpenState={_setOpenState}
        text={'more'}
        icon={<RiArrowDropDownLine />}
        style={
          isOpen
            ? {
                opacity: 0,
                transition: 'opacity 0.3s ease-in-out',
                top: `${topOffset}em`,
              }
            : {
                opacity: 1,
                transition: 'opacity 1s ease-in-out 0.4s',
                top: `${topOffset}em`,
              }
        }
      />
      <StoryItem
        favRank={favRank}
        story={story}
        isOpen={isOpen}
        offset={topOffset}
        setStoryHeight={setStoryHeight}
      />
      <ToggleItem
        isOpen={isOpen}
        _setOpenState={_setOpenState}
        text='less'
        icon={<RiArrowUpSLine />}
        style={
          !isOpen
            ? {
                opacity: 0,
                transition: 'opacity 0.3s ease-in-out',
                top: `${topOffset}em`,
              }
            : {
                opacity: 1,
                transition: 'opacity 1s ease-in-out 0.4s',
                top: `${topOffset}em`,
              }
        }
      />
    </DropCont>
  );
};

export default DropSwitch;
