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
  dropType,
  _item: { titleImgUrl, title, tech, favRank, timeRank, summary, story },
  _openState,
  _setOpenState,
}) => {
  //  STATE
  const [topOffset, setTopOffset] = useState(0);
  //  FXN
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
        imageSize={favRank === 1 ? 'large' : 'medium'}
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
        {dropType === 'add' ? (
          <DropAdd
            preFrame={<SummaryItem summary={summary} offset={topOffset} />}
            postFrame={
              <StoryItem
                story={story}
                isOpen={_openState === favRank}
                offset={topOffset}
              />
            }
            _openState={_openState}
            _setOpenState={_setOpenState}
            setTopOffset={setTopOffset}
            favRank={favRank}
          />
        ) : (
          <DropSwitch
            preFrame={<SummaryItem summary={summary} offset={topOffset} />}
            postFrame={
              <StoryItem
                story={story}
                isOpen={_openState === favRank}
                offset={topOffset}
              />
            }
            _openState={_openState}
            _setOpenState={_setOpenState}
            setTopOffset={setTopOffset}
            favRank={favRank}
          />
        )}
        {/* <ToggleCont id='DropProject-ToggleCont'>
          {!_openState === favRank ? (
            <Btn1 onClick={() => _setOpenState(favRank)}>
              more <RiArrowDropDownLine />
            </Btn1>
          ) : (
            <Btn1
              onClick={() => _setOpenState(0)}
              className={_openState === favRank && 'bg-gry3-5 txt-white'}
            >
              less <RiArrowUpSLine />
            </Btn1>
          )}
        </ToggleCont> */}
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
