import React, { Fragment, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import ImageItem from './ImageItem';
import SummaryItem from './SummaryItem';
import StoryItem from './StoryItem';
import DropAdd from '../../../3_Class_____/DropTypes/DropAdd';
import DropSwitch from '../../../3_Class_____/DropTypes/DropSwitch';
//  STYLE
import { Btn1, ImageIcon, ParaSml } from '../../../Design/Styled_aoe';
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';
import {
  ItemCont,
  InfoCont,
  TextCont,
  SummaryCont,
  StoryCont,
  ToggleCont,
  ItemTitle,
  ItemTech,
  ItemSummary,
  ItemStory,
  TechList,
  TechItem,
  SubItem,
  SubTitle,
} from './styled';

//  MAIN
const AboutItem = ({
  _item: { titleImgUrl, title, tech, favRank, timeRank, summary, story },
  _openState,
  _setOpenState,
}) => {
  // //  STATE
  // const [itemHeight, setItemHeight] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   function calcHeight() {
  //     const closeHeight = document.getElementById('AboutItem-ItemCont')
  //       .offsetHeight;
  //     const dropHeight = document.getElementById('AboutItem-StoryCont')
  //       .offsetHeight;
  //     const btnHeight = document.getElementById('AboutItem-ToggleCont')
  //       .offsetHeight;
  //     _openState === favRank
  //       ? setItemHeight(closeHeight + dropHeight + btnHeight)
  //       : setItemHeight(closeHeight - dropHeight - btnHeight);
  //   }
  //   _openState === favRank ? setIsOpen(true) : setIsOpen(false);
  //   calcHeight();
  // }, [_openState, favRank]);

  // useEffect(() => {
  //   console.log('$$$ > itemHeight = ', itemHeight);
  //   console.log('$$$ > =========================');
  // }, [itemHeight]);
  // //  FXN
  const handleToggle = async () => {
    _openState === favRank ? _setOpenState(0) : _setOpenState(favRank);
  };

  return (
    <ItemCont
      id='AboutItem-ItemCont'
      // style={{ height: itemHeight }}
      className={_openState === favRank ? ' activeItem ' : ' inactiveItem '}
      onClick={() => handleToggle()}
    >
      <ImageItem
        _openState={_openState}
        favRank={favRank}
        titleImgUrl={titleImgUrl}
        imageSize={'large'}
      />
      <InfoCont id='AboutItem-InfoCont'>
        <ItemTitle id='AboutItem-ItemTitle'>{title}</ItemTitle>
        <ItemTech id='AboutItem-ItemTech'>
          <SubTitle>Titles: </SubTitle>
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
        <DropAdd
          preFrame={<SummaryItem summary={summary} />}
          postFrame={
            <StoryItem story={story} isOpen={_openState === favRank} />
          }
          _openState={_openState}
          _setOpenState={_setOpenState}
          favRank={favRank}
          // itemHeight={itemHeight}
          // setItemHeight={setItemHeight}
        ></DropAdd>
        {/* <ToggleItem
          isOpen={_openState === favRank}
          _setOpenState={_setOpenState}
        /> */}
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
