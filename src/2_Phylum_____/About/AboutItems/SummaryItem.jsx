import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { ParaSml } from '../../../Design/Styled_aoe';
import { SummaryCont, ItemSummary } from './styled';

const SummaryItem = ({
  isMore,
  _id,
  _summary,
  _setSummaryHeight,
  __handleSelect,
  __topId,
}) => {
  useEffect(() => {
    const summaryHeight = document.getElementById(
      `SummaryItem-SummaryCont${_id}`
    ).offsetHeight;

    _setSummaryHeight(summaryHeight);
    console.log(`SummaryItem > summaryCont${_id}.height = `, summaryHeight);
    console.log(`SummaryItem > 
        id: ${_id}
        fR: ${__topId}`);
  }, [_setSummaryHeight, _id, __topId]);

  return (
    <SummaryCont
      id={`SummaryItem-SummaryCont${_id}`}
      className={isMore && ' pointer'}
      onClick={() => {
        isMore && __handleSelect();
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
