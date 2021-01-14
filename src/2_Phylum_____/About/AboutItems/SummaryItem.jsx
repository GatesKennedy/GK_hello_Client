import React, { useLayoutEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { ParaSml } from '../../../Design/Styled_aoe';
import { SummaryCont, ItemSummary } from './styled';

const SummaryItem = ({
  topId,
  isMore,
  id,
  summary,
  setParentHeight,
  handleToggle,
}) => {
  useLayoutEffect(() => {
    const summaryHeight = document.getElementById(
      `SummaryItem-SummaryCont${id}`
    ).offsetHeight;
    setParentHeight(summaryHeight);
  }, [setParentHeight, id, topId]);

  return (
    <SummaryCont
      id={`SummaryItem-SummaryCont${id}`}
      className={isMore && ' pointer'}
      onClick={() => {
        isMore && handleToggle(id);
      }}
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
  topId: PropTypes.number.isRequired,
  isMore: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  summary: PropTypes.array.isRequired,
  setParentHeight: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default SummaryItem;
