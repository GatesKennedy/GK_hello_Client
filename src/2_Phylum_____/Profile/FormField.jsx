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
    <IdentityCont id='FormField-IdentityCont'>
      <h5>{fieldObj.title}</h5>
      <IdentityShow id='FormField-IdentityShow'>
        {fieldObj.value !== 'void' && fieldObj.value
          ? fieldObj.value
          : fieldObj.msg}
      </IdentityShow>
    </IdentityCont>
  ) : (
    <PersonalityCont id='FormField-PersonalityCont'>
      <h5>{fieldObj.title}</h5>
      <PersonalityShow id='FormField-PersonalityShow'>
        {fieldObj.value !== 'void' && fieldObj.value
          ? fieldObj.value
          : fieldObj.msg}
      </PersonalityShow>
    </PersonalityCont>
  );
};

FormField.propTypes = {};

export default FormField;
