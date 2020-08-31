import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TitleHead = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  padding: 8px 8px 0px 8px;
`;

const TitleHeader = ({ _txt }) => {
  return (
    <TitleHead>
      <h2>{_txt}</h2>
    </TitleHead>
  );
};

TitleHeader.propTypes = {};

export default TitleHeader;
