import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import ToggleItem from './ToggleItem';
//  STYLE
import { DropCont } from './styled';
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';

const DropSwitch = ({
  favRank,
  preFrame,
  postFrame,
  _openState,
  _setOpenState,
  setTopOffset,
  itemHeight,
  setItemHeight,
}) => {
  //  STATE
  const [dropHeight, setDropHeight] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const calcHeight = useCallback(() => {
    const dropHeight = document.getElementById('DropSwitch-DropCont')
      .offsetHeight;
    const summaryHeight = document.getElementById('SummaryItem-SummaryCont')
      .offsetHeight;
    const storyHeight = document.getElementById('StoryItem-StoryCont')
      .offsetHeight;
    const toggleHeight = document.getElementById('ToggleItem-ToggleCont')
      .offsetHeight;
    console.log(`$$$ dropHeight #${favRank} = `, dropHeight);
    console.log(`$$$ summaryHeight #${favRank} = `, summaryHeight);
    console.log(`$$$ storyHeight #${favRank} = `, storyHeight);
    if (isOpen) {
      setDropHeight(storyHeight + toggleHeight + 4);
      setTopOffset(-3);
      console.log(`IS OPEN`);
    } else {
      setDropHeight(summaryHeight + toggleHeight);
      setTopOffset(0);
      console.log(`IS CLOSED`);
    }
  }, [isOpen, favRank]);

  useEffect(() => {
    _openState === favRank ? setIsOpen(true) : setIsOpen(false);
    console.log(
      `$$$ favRank: ${favRank}, _openState: ${_openState}, isOpen: ${isOpen}`
    );
    calcHeight();
  }, [_openState, favRank, isOpen, calcHeight]);

  return (
    <DropCont id='DropSwitch-DropCont' style={{ height: dropHeight }}>
      {preFrame}
      <ToggleItem
        isOpen={_openState === favRank}
        _setOpenState={_setOpenState}
        text={'more'}
        icon={<RiArrowDropDownLine />}
        style={
          isOpen
            ? { opacity: 0, transition: 'all 0.3s ease-in-out' }
            : {
                opacity: 1,
                transition: 'all 1s ease-in-out 0.4s',
              }
        }
      />
      {postFrame}
      <ToggleItem
        isOpen={_openState === favRank}
        _setOpenState={_setOpenState}
        text='less'
        icon={<RiArrowUpSLine />}
        style={
          !isOpen
            ? { opacity: 0, transition: 'all 0.3s ease-in-out' }
            : {
                opacity: 1,
                transition: 'all 1s ease-in-out 0.4s',
              }
        }
      />
    </DropCont>
  );
};

export default DropSwitch;
