import React from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { BtnTight, RowFull } from '../../Design/Styled_aoe';
import {
  IdentityCont,
  IdentityShow,
  PersonalityCont,
  PersonalityShow,
} from './Styled';
const FormField = ({ fieldObj }) => {
  return fieldObj.type === 'identity' ? (
    <IdentityCont>
      <h5>{fieldObj.title}</h5>
      <IdentityShow>
        {fieldObj.value !== 'void' ? fieldObj.value : 'who sent you?'}
      </IdentityShow>
    </IdentityCont>
  ) : (
    <PersonalityCont>
      <h5>{fieldObj.title}</h5>
      <PersonalityShow>
        {fieldObj.value !== 'void' ? fieldObj.value : 'who sent you?'}
      </PersonalityShow>
    </PersonalityCont>
  );
};

FormField.propTypes = {};

export default FormField;
