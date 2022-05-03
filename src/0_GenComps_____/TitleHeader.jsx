import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TitleHead = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  padding-top: 8px;
`;

const TitleHeader = ({ _txt }) => {
  return (
    <TitleHead id='TitleHeader-TitleHead'>
      <h2>{_txt}</h2>
    </TitleHead>
  );
};

TitleHeader.propTypes = {
  _txt: PropTypes.func.isRequired
};

export default TitleHeader;
