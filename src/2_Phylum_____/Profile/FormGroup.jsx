// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
//  STYLE
import { BtnTight, RowFull } from '../../Design/Styled_aoe';
import { FormCont, BodyCont, Note, FormState } from './Styled';
import { connect } from 'react-redux';
import FormField from './FormField';

const IdentityForm = ({
  // isAuthenticated,
  formType,
  profileData,
  editingType,
  isHovering,
  // setEditingType,
  setIsHovering,
  handleType,
}) => {
  //  STATE

  //  ~~ FORM ~~
  // const { register, handleSubmit, watch, reset, errors, formState } = useForm();
  // const { touched, isValid, isSubmitting } = formState;
  // const onSubmit = async (data) => {};

  return (
    <BodyCont
      id='FormGroup-BodyCont'
      onMouseEnter={() => setIsHovering(formType)}
      onMouseLeave={() => setIsHovering('void')}
      style={{
        backgroundColor:
          editingType === formType || isHovering === formType
            ? '#f2f2f2'
            : '#e7e7e7',
      }}
    >
      {/* Header */}
      <RowFull id='FormGroup-RowFull'>
        <h4>{formType}</h4>
        <FormState id='FormGroup-FormState'>
          <Note className='txt-warn'>
            {editingType === formType && 'editing...'}
          </Note>
          <BtnTight
            onClick={() => handleType(formType)}
            style={
              isHovering === formType ? { opacity: '1' } : { opacity: '0' }
            }
          >
            {editingType !== formType ? 'edit' : 'nvm'}
          </BtnTight>
        </FormState>
      </RowFull>
      {/* Forms */}
      <FormCont
        id='FormGroup-FormCont'
        style={{
          gridTemplateColumns:
            formType === 'Personality' ? 'auto auto' : 'auto auto auto',
        }}
        className='fill-full'
      >
        {profileData.map((fieldObj) => (
          <FormField fieldObj={fieldObj} />
        ))}
      </FormCont>
      {editingType === formType && (
        <input
          type='submit'
          form='identity-form'
          value='Save'
          className='btn'
        />
      )}
    </BodyCont>
  );
};

IdentityForm.propTypes = {
  profileData: PropTypes.arrayOf(PropTypes.object).isRequired,
  editingType: PropTypes.string.isRequired,
  setEditingType: PropTypes.func.isRequired,
  isHovering: PropTypes.string.isRequired,
  setIsHovering: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(IdentityForm);
