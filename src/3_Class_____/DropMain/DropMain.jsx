import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import MediaCont from '../MediaDisplay/MediaCont';
//  STYLE
import { Btn1, ImageLrg, ImageIcon, ParaSml } from '../../Design/Styled_aoe';
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';
import {
  ItemCont,
  ImgCont,
  InfoCont,
  SummaryCont,
  StoryCont,
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
const DropMain = ({
  _item: { titleImgUrl, title, tech, favRank, timeRank, summary, story },
  _openState,
  _setOpenState,
}) => {
  //  FXN
  const handleToggle = () => {
    _openState === favRank ? _setOpenState(0) : _setOpenState(favRank);
  };
  const stayOpen = (stateNow) => {
    setTimeout(_setOpenState(stateNow), 1000);
  };

  return (
    <ItemCont
      id='DropMain-ItemCont'
      className={_openState === favRank ? ' bg-gry1' : ' bg-gry2'}
      onClick={() => handleToggle()}
    >
      <ImgCont
        id='DropMain-ImgCont'
        className={_openState === favRank && ' bg-gry2'}
      >
        <ImageLrg
          id='DropMain-ImageLrg'
          src={titleImgUrl}
          alt='oops... bad link'
        />
      </ImgCont>
      <InfoCont id='DropMain-InfoCont'>
        <ItemTitle id='DropMain-ItemTitle'>{title}</ItemTitle>
        <ItemTech id='DropMain-ItemTech'>
          <SubTitle>Titles: </SubTitle>
          <TechList id='DropMain-TechList'>
            {tech.map((item, index) => (
              <TechItem
                id='DropMain-TechItem'
                key={index}
                className={_openState !== favRank ? ' bg-gry1' : ' bg-gry2'}
              >
                {item}
              </TechItem>
            ))}
          </TechList>
        </ItemTech>
        <SummaryCont id='DropMain-SummaryCont'>
          <ItemSummary id='DropMain-ItemSummary'>
            {summary.map((paragraph, index) => (
              <ParaSml key={index} id='DropMain-ParaSml'>
                {paragraph}
              </ParaSml>
            ))}
          </ItemSummary>
          {_openState !== favRank && (
            <Btn1 onClick={() => _setOpenState(favRank)}>
              more <RiArrowDropDownLine />
            </Btn1>
          )}
        </SummaryCont>

        {_openState === favRank && (
          <StoryCont>
            <ItemStory>
              {story.map(({ id, title, imgUrl, text, media }) => (
                <ItemCont>
                  <ImageIcon src={imgUrl}></ImageIcon>
                  <SubItem key={id} id='DropMain-SubItem'>
                    <SubTitle>{title}</SubTitle>
                    {text.map((paragraph, index) => (
                      <ParaSml key={index} id='DropMain-ParaSml'>
                        {paragraph}
                      </ParaSml>
                    ))}
                    <MediaCont
                      // onClick={() => _setOpenState(favRank)}
                      onClick={() => stayOpen(favRank)}
                      _media={media}
                      _title={title}
                    />
                  </SubItem>
                </ItemCont>
              ))}
            </ItemStory>
            <Btn1
              onClick={() => _setOpenState(0)}
              className={_openState === favRank && 'bg-gry3-5 txt-white'}
            >
              less <RiArrowUpSLine />
            </Btn1>
          </StoryCont>
        )}
      </InfoCont>
    </ItemCont>
  );
};

DropMain.propTypes = {
  _item: PropTypes.shape({
    titleImgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    favRank: PropTypes.number.isRequired,
    summary: PropTypes.arrayOf(PropTypes.string).isRequired,
    story: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  _openState: PropTypes.number.isRequired,
  _setOpenState: PropTypes.func.isRequired,
};

export default DropMain;
