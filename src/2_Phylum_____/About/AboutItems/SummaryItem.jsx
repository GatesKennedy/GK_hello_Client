import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { ParaSml } from '../../../Design/Styled_aoe';
import { SummaryCont, ItemSummary } from './styled';

const SummaryItem = ({ id, summary, setSummaryHeight, __handleToggle }) => {
  useEffect(() => {
    const summaryHeight = document.getElementById(
      `SummaryItem-SummaryCont${id}`
    ).offsetHeight;

    setSummaryHeight(summaryHeight);
  }, [setSummaryHeight, id]);

  return (
    <SummaryCont
      id={`SummaryItem-SummaryCont${id}`}
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

SummaryItem.propTypes = {
  id: PropTypes.number.isRequired,
  summary: PropTypes.array.isRequired,
  setSummaryHeight: PropTypes.func.isRequired,
  __handleToggle: PropTypes.func.isRequired,
};

export default SummaryItem;
