import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
//  STYLE
import { BtnTight, RowFull } from '../../Design/Styled_aoe';
import {
  IdentityCont,
  IdentityShow,
  FormCont,
  BodyCont,
  Note,
  FormState,
} from './Styled';
import { connect } from 'react-redux';
import FormField from './FormField';

const IdentityForm = ({
  isAuthenticated,
  formType,
  profileData,
  editingType,
  isHovering,
  setEditingType,
  setIsHovering,
  handleType,
}) => {
  //  STATE

  //  ~~ FORM ~~
  const { register, handleSubmit, watch, reset, errors, formState } = useForm();
  const { touched, isValid, isSubmitting } = formState;

  const onSubmit = async (data) => {};
  return (
    <BodyCont
      id='Profile-BodyCont-Identity'
      onMouseEnter={() => setIsHovering(formType)}
      onMouseLeave={() => setIsHovering('void')}
      className={editingType === formType ? ' bg-gry1' : ' bg-gry2'}
    >
      <RowFull id='Profile-RowFull-Identity'>
        <h4>{formType}</h4>
        <FormState id='identity-form'>
          <form>
            <Note className='txt-warn'>
              {editingType === formType && 'editing...'}
            </Note>
          </form>
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
  profileData: PropTypes.object.isRequired,
  editingType: PropTypes.string.isRequired,
  setEditingType: PropTypes.func.isRequired,
  isHovering: PropTypes.string.isRequired,
  setIsHovering: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(IdentityForm);
