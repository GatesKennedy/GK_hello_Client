import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import ToggleItem from './ToggleItem';
import SummaryItem from '../../2_Phylum_____/About/AboutItems/SummaryItem';
import StoryItem from '../../2_Phylum_____/About/AboutItems/StoryItem';
//  STYLE
import { DropCont } from './styled';

const DropSwitch = ({
  favRank,
  summary,
  story,
  media,
  topOffset,
  _openState,
  _setOpenState,
  _handleToggle,
  setTopOffset,
}) => {
  //  STATE
  const [dropHeight, setDropHeight] = useState(null);
  const [summaryHeight, setSummaryHeight] = useState(null);
  const [storyHeight, setStoryHeight] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const calcHeight = useCallback(() => {
    const toggleHeight = document.getElementById('ToggleItem-ToggleCont')
      .offsetHeight;
    if (isOpen) {
      setDropHeight(storyHeight + toggleHeight);
      setTopOffset(summaryHeight + toggleHeight);
    } else {
      setDropHeight(summaryHeight + toggleHeight);
      setTopOffset(0);
    }
  }, [isOpen, summaryHeight, storyHeight, setTopOffset]);

  useEffect(() => {
    _openState === favRank ? setIsOpen(true) : setIsOpen(false);
    calcHeight();
  }, [_openState, favRank, isOpen, calcHeight]);

  return (
    <DropCont
      id={`DropSwitch-DropCont${favRank}`}
      style={{ height: dropHeight }}
    >
      <div
        style={{
          position: 'relative',
          top: `-${topOffset}px`,
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <SummaryItem
          favRank={favRank}
          summary={summary}
          offset={topOffset}
          setSummaryHeight={setSummaryHeight}
          __handleToggle={_handleToggle}
        />
        <ToggleItem
          isOpen={_openState === favRank}
          _setOpenState={_setOpenState}
          __handleToggle={_handleToggle}
          type={'more'}
          style={
            isOpen
              ? {
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                }
              : {
                  opacity: 1,
                  transition: 'opacity 1s ease-in-out 0.4s',
                }
          }
        />
        <StoryItem
          favRank={favRank}
          story={story}
          media={media}
          isOpen={isOpen}
          offset={topOffset}
          setStoryHeight={setStoryHeight}
        />
        <ToggleItem
          isOpen={isOpen}
          _setOpenState={_setOpenState}
          __handleToggle={_handleToggle}
          type='less'
          style={
            !isOpen
              ? {
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                }
              : {
                  opacity: 1,
                  transition: 'opacity 1s ease-in-out 0.4s',
                }
          }
        />
      </div>
    </DropCont>
  );
};

DropSwitch.propTypes = {
  _handleToggle: PropTypes.func.isRequired,
};

export default DropSwitch;
