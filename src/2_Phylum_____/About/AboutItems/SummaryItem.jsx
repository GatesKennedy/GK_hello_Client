import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { ParaSml } from '../../../Design/Styled_aoe';
import { SummaryCont, ItemSummary } from './styled';

const SummaryItem = ({
  favRank,
  summary,
  offset,
  setSummaryHeight,
  __handleToggle,
}) => {
  useEffect(() => {
    const summaryHeight = document.getElementById(
      `SummaryItem-SummaryCont${favRank}`
    ).offsetHeight;
    setSummaryHeight(summaryHeight);
  }, [setSummaryHeight, favRank]);

  return (
    <SummaryCont
      id={`SummaryItem-SummaryCont${favRank}`}
      className='pointer'
      onClick={() => __handleToggle()}
    >
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
