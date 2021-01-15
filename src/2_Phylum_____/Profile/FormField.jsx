import React from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { BtnTight, RowFull } from '../../Design/Styled_aoe';
import { FieldCont, IdentityShow, PersonalityShow } from './Styled';
const FormField = ({ fieldObj }) => {
  return fieldObj.type === 'identity' ? (
    <FieldCont id='FormField-FieldCont'>
      <h5>{fieldObj.title}</h5>
      <IdentityShow id='FormField-IdentityShow'>
        {fieldObj.value !== 'void' && fieldObj.value
          ? fieldObj.value
          : fieldObj.msg}
      </IdentityShow>
    </FieldCont>
  ) : (
    <FieldCont id='FormField-FieldCont'>
      <h5>{fieldObj.title}</h5>
      <PersonalityShow id='FormField-PersonalityShow'>
        {fieldObj.value !== 'void' && fieldObj.value
          ? fieldObj.value
          : fieldObj.msg}
      </PersonalityShow>
    </FieldCont>
  );
};

FormField.propTypes = {};

export default FormField;
