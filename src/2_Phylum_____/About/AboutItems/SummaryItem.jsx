import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { ParaSml } from '../../../Design/Styled_aoe';
import { SummaryCont, ItemSummary } from './styled';

const SummaryItem = ({ _id, _summary, _setSummaryHeight, __handleSelect }) => {
  useEffect(() => {
    const summaryHeight = document.getElementById(
      `SummaryItem-SummaryCont${_id}`
    ).offsetHeight;

    _setSummaryHeight(summaryHeight);
    console.log(`SummaryItem > summaryCont${_id}.height = `, summaryHeight);
  }, [_setSummaryHeight, _id]);

  return (
    <SummaryCont
      id={`SummaryItem-SummaryCont${_id}`}
      className='pointer'
      onClick={() => {
        _id === 1 && __handleSelect();
      }}
    >
      <ItemSummary id='SummaryItem-ItemSummary'>
        {_summary.map((paragraph, index) => (
          <ParaSml key={index} id='SummaryItem-ParaSml'>
            {paragraph}
          </ParaSml>
        ))}
      </ItemSummary>
    </SummaryCont>
  );
};

SummaryItem.propTypes = {
  _id: PropTypes.number.isRequired,
  _summary: PropTypes.array.isRequired,
  _setSummaryHeight: PropTypes.func.isRequired,
  __handleSelect: PropTypes.func.isRequired,
};

export default SummaryItem;
