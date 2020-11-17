import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import ToggleItem from './ToggleItem';
//  STYLE
import { DropCont } from './styled';
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';

const DropAdd = ({
  favRank,
  preFrame,
  postFrame,
  _openState,
  _setOpenState,
  itemHeight,
  setItemHeight,
}) => {
  //  STATE
  const [dropHeight, setDropHeight] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   function calcHeight() {
  //     const summaryHeight = document.getElementById('AboutItem-SummaryCont')
  //       .offsetHeight;
  //     const storyHeight = document.getElementById('AboutItem-StoryCont')
  //       .offsetHeight;
  //     const btnHeight = document.getElementById('AboutItem-ToggleCont')
  //       .offsetHeight;
  //     _openState === favRank
  //       ? setDropHeight(summaryHeight + storyHeight + btnHeight)
  //       : setDropHeight(summaryHeight - storyHeight - btnHeight);
  //   }
  //   _openState === favRank ? setIsOpen(true) : setIsOpen(false);
  //   calcHeight();
  // }, [_openState, favRank]);
  const calcHeight = useCallback(() => {
    const dropHeight = document.getElementById('DropAdd-DropCont').offsetHeight;
    const summaryHeight = document.getElementById('SummaryItem-SummaryCont')
      .offsetHeight;
    const storyHeight = document.getElementById('StoryItem-StoryCont')
      .offsetHeight;
    const toggleHeight = document.getElementById('ToggleItem-ToggleCont')
      .offsetHeight;
    console.log(`$$$ dropHeight #${favRank} = `, dropHeight);
    console.log(`$$$ summaryHeight #${favRank} = `, summaryHeight);
    console.log(`$$$ storyHeight #${favRank} = `, storyHeight);
    console.log(`$$$ toggleHeight #${favRank} = `, toggleHeight);
    if (isOpen) {
      setDropHeight(summaryHeight + storyHeight + 2 * toggleHeight + 4);
      console.log(`IS OPEN`);
    } else {
      setDropHeight(summaryHeight + toggleHeight);
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
    <DropCont id='DropAdd-DropCont' style={{ height: dropHeight }}>
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

export default DropAdd;
