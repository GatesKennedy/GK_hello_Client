import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import styled from 'styled-components';
import { Btn1, ImageMed } from '../Design/Styled_aoe';
import { RiArrowDropDownLine } from 'react-icons/ri';

export const ItemCont = styled.section`
  display: flex;
  flex-direction: row;

  min-height: 102px;
  max-width: 960px;
  width: 100%;
  padding: 8px 8px;
  margin: 2px 0px;
  border-radius: 12px;
`;
export const ImgCont = styled.section`
  display: flex;
  flex-direction: column;

  height: 102px;
  border-radius: 8px;
`;
export const InfoCont = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: flex-start;

  height: (100% + 6px);
  width: 100%;
  padding: 0px 8px;
  margin-top: -6px;
`;
export const SummaryCont = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;
export const StoryCont = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  justify-items: flex-start;
  padding: 8px;
`;

export const ItemTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  margin-bottom: 2px;

  font-size: large;
  font-weight: bold;
`;
export const ItemTech = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  margin-bottom: 4px;
  font-size: smaller;
`;
export const ItemSummary = styled.div`
  display: flex;

  width: 100%;
  height: 36px;
  font-size: smaller;
`;
export const ItemStory = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 8px;

  width: 100%;
  font-size: smaller;
`;
export const TechList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  font-size: smaller;
`;
export const TechItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  height: 100%;

  list-style-type: none;
  margin: 0px 0px 1px 4px;
  padding: 1px 4px;

  font-size: smaller;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

//  MAIN
const Drop = ({
  _item: { imgurl, title, tech, rank, summary, story },
  _openState,
  _setOpenState,
}) => {
  return (
    <ItemCont
      id='Drop-ItemCont'
      className={_openState === rank ? ' bg-gry1' : ' bg-gry2'}
    >
      <ImgCont id='Drop-ImgCont' className={_openState === rank && ' bg-gry2'}>
        {/* <ImgCont id='Drop-ImgCont' className='bg-gry2'> */}
        <ImageMed src={imgurl} alt='oops... bad link' />
      </ImgCont>
      <InfoCont id='Drop-InfoCont'>
        <ItemTitle id='Drop-ItemTitle'>{title}</ItemTitle>
        <ItemTech id='Drop-ItemTech'>
          <SubTitle>Tech: </SubTitle>
          <TechList id='Drop-TechList'>
            {tech.map((item, index) => (
              <TechItem
                id='Drop-TechItem'
                key={index}
                className={_openState !== rank ? ' bg-gry1' : ' bg-gry2'}
              >
                {item}
              </TechItem>
            ))}
          </TechList>
        </ItemTech>
        {_openState !== rank ? (
          <SummaryCont id='Drop-SummaryCont'>
            <ItemSummary id='Drop-ItemSummary'>{summary}</ItemSummary>
            <Btn1 onClick={() => _setOpenState(rank)}>
              more <RiArrowDropDownLine />
            </Btn1>
          </SummaryCont>
        ) : (
          <StoryCont>
            {/* <ImgCont id='Drop-ImgCont' className='bg-gry6'>
              <ImageMed src={imgurl} alt='oops... bad link' />
            </ImgCont> */}
            <ItemStory>{story}</ItemStory>
          </StoryCont>
        )}
      </InfoCont>
    </ItemCont>
  );
};

Drop.propTypes = {
  _item: PropTypes.object.isRequired,
  // imgurl: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  // rank: PropTypes.number.isRequired,
  // summary: PropTypes.string.isRequired,
  // story: PropTypes.string.isRequired,
  _openState: PropTypes.number.isRequired,
  _setOpenState: PropTypes.func.isRequired,
};

export default Drop;