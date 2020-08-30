import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import styled from 'styled-components';
import { Btn1 } from '../Design/Styled_aoe';
import { RiArrowDropDownLine } from 'react-icons/ri';

export const ItemCont = styled.section`
  display: flex;
  flex-direction: column;

  padding: 8px;
`;
export const ItemSpecs = styled.text`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  font-size: smaller;
`;
export const ItemStory = styled.text`
  display: flex;
  flex-direction: row;

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

  list-style-type: none;
  margin: 0px 0px 2px 4px;
  padding: 1px 4px;

  font-size: smaller;
`;
const Drop = ({ _item, _openState, _setOpenState }) => {
  return (
    <ItemCont>
      <h2>{_item.title}</h2>
      <ItemSpecs>
        <h4>Tech: </h4>
        <TechList>
          {_item.tech.map((item) => (
            <TechItem className='bg-gry1'>{item}</TechItem>
          ))}
        </TechList>
      </ItemSpecs>
      {_openState !== _item.rank ? (
        <Fragment>
          <ItemSpecs>{_item.summary}</ItemSpecs>
          <Btn1 onClick={() => _setOpenState(_item.rank)}>
            more <RiArrowDropDownLine />
          </Btn1>
        </Fragment>
      ) : (
        <ItemStory>{_item.story}</ItemStory>
      )}
    </ItemCont>
  );
};

Drop.propTypes = {};

export default Drop;
