import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { Btn1, ParaSml } from '../../Design/Styled_aoe';
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';
import { DropCont, DropItem } from './styled';
import {
  SummaryCont,
  StoryCont,
  ToggleCont,
  ItemSummary,
  ItemStory,
} from '../DropProject/styled';

const DropSwitch = ({
  isActive,
  itemHeight,
  setItemHeight,
  favRank,
  restContent,
  activeContent,
}) => {
  //  EFFECT
  useEffect(() => {
    function calcHeight() {
      const restHeight = document.getElementById('DropItem').offsetHeight;
      // const activeHeight = document.getElementById('active').offsetHeight;
      // isActive ? setItemHeight(activeHeight) : setItemHeight(restHeight);
      setItemHeight(restHeight);
      console.log(`itemHeight #${favRank} = `, itemHeight);
      console.log(`restHeight #${favRank} = `, restHeight);
      // console.log(`actiHeight #${favRank} = `, activeHeight);
    }
    calcHeight();
  }, [isActive, setItemHeight, favRank, itemHeight]);
  return (
    <DropCont style={{ height: itemHeight }}>
      {!isActive ? (
        <DropItem id='DropItem'>
          <SummaryCont id='DropSwitch-StoryCont'>
            <ItemSummary id='DropSwitch-ItemSummary'>{restContent}</ItemSummary>
            <ToggleCont id='DropSwitch-ToggleCont'>
              <Btn1>
                more <RiArrowDropDownLine />
              </Btn1>
            </ToggleCont>
          </SummaryCont>
        </DropItem>
      ) : (
        <DropItem id='DropItem'>
          <StoryCont id='DropSwitch-StoryCont'>
            <ItemStory id='DropSwitch-ItemStory'>
              {activeContent &&
                activeContent.map((paragraph, index) => (
                  <ParaSml key={index} id='DropSwitch-ParaSml'>
                    {paragraph}
                  </ParaSml>
                ))}
            </ItemStory>
            <ToggleCont id='DropSwitch-ToggleCont'>
              <Btn1 className={isActive && 'bg-gry3-5 txt-white'}>
                less <RiArrowUpSLine />
              </Btn1>
            </ToggleCont>
          </StoryCont>
        </DropItem>
      )}
    </DropCont>
  );
};

DropSwitch.propTypes = {};

export default DropSwitch;
