import React from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { ParaSml } from '../../../Design/Styled_aoe';
import {
  StoryCont,
  ItemCont,
  SubItem,
  SubTitle,
  SubText,
  SubToggleCont,
} from './styled';

const ItemSummary = ({ summary }) => {
  return summary.map((paragraph, index) => (
    <ParaSml id='StoryGroup-ParaSml' key={index}>
      {paragraph}
    </ParaSml>
  ));
};

ItemSummary.propTypes = {};

export default ItemSummary;
