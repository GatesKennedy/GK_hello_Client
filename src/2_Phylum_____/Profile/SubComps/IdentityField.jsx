// !!! pass back form data?
import React from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { IdentityCont, IdentityShow, IdentityForm } from '../Styled';

const IdentityField = ({ field, value, editing, formReturn }) => {
  return (
    <IdentityCont>
      <h5>{field}</h5>
      {editing ? (
        <IdentityForm type='text' />
      ) : (
        <IdentityShow>{value}</IdentityShow>
      )}
    </IdentityCont>
  );
};

IdentityField.propTypes = {};

export default IdentityField;
