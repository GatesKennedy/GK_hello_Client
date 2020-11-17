import React from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { ParaSml } from '../../../Design/Styled_aoe';
import { SummaryCont, ItemSummary } from './styled';

const SummaryItem = ({ summary, offset }) => {
  console.log(`SummaryItem > offset: `, offset);
  return (
    <SummaryCont id='SummaryItem-SummaryCont' style={{ top: `${offset}em` }}>
      <ItemSummary id='SummaryItem-ItemSummary'>
        {summary.map((paragraph, index) => (
          <ParaSml key={index} id='SummaryItem-ParaSml'>
            {paragraph}
          </ParaSml>
        ))}
      </ItemSummary>
    </SummaryCont>
  );
};

SummaryItem.propTypes = {};

export default SummaryItem;
