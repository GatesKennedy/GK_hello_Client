import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
//  STYLE
import { BtnTight, RowFull } from '../../Design/Styled_aoe';
import {
  ProfileCont,
  ProfileHead,
  ProfileBody,
  IdentityCont,
  IdentityShow,
  PersonalityCont,
  PersonalityShow,
  BodyCont,
  Note,
  FormState,
} from './Styled';
import { connect } from 'react-redux';
import FormField from './FormField';

const IdentityForm = ({
  isAuthenticated,
  profileData,
  editingType,
  isHovering,
  setEditingType,
  setIsHovering,
}) => {
  //  STATE

  //  ~~ FORM ~~
  const { register, handleSubmit, watch, reset, errors, formState } = useForm();
  const { touched, isValid, isSubmitting } = formState;

  const onSubmit = async (data) => {
    console.log('FormData: ', data);
  };
  //  FXN
  const handleType = (typeIn) => {
    console.log(`handleType() >
          editingType: ${editingType}
          typeIn:      ${typeIn}`);
    editingType !== typeIn ? setEditingType(typeIn) : setEditingType('void');
  };
  return (
    <BodyCont
      id='Profile-BodyCont-Identity'
      onMouseEnter={() => setIsHovering('identity')}
      onMouseLeave={() => setIsHovering('void')}
      className={editingType === 'identity' ? ' bg-gry1' : ' bg-gry2'}
    >
      <RowFull id='Profile-RowFull-Identity'>
        <h4>Identity</h4>
        <FormState id='identity-form'>
          <form>
            <Note className='txt-warn'>
              {editingType === 'identity' && 'editing...'}
            </Note>
          </form>
          <BtnTight
            onClick={() => handleType('identity')}
            style={
              isHovering === 'identity' ? { opacity: '1' } : { opacity: '0' }
            }
          >
            {editingType !== 'identity' ? 'edit' : 'nvm'}
          </BtnTight>
        </FormState>
      </RowFull>

      <RowFull className='fill-full'>
        {profileData.map((field) => (
          <FormField
            fieldObj={{ title: field, value: field, type: 'identity' }}
          />
        ))}
      </RowFull>
      {editingType === 'identity' && (
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
