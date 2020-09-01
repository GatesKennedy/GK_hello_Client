//  React
import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
import { setModal } from '../../1_Kingdom_____/UI/axn_ui';
//  STYLE
import { ContRow, ContCol, Row, Col, Btn } from '../../Design/Styled_Common';
import {
  Cont2,
  ChatHead,
  ChatDisp,
  ChatDispInner,
  ChatFormCont,
  ChatTxt,
  ChatBtn,
  AuthForms,
  AuthCont,
} from '../Styled';
import {} from '../Styled';
//  Asset

const Talk = ({
  setModal,
  setAlert,
  profile,
  auth: {
    isAuthenticated,
    user: { role },
    loading,
  },
}) => {
  //  ~~ FORM ~~
  const { register, handleSubmit, watch, reset, errors, formState } = useForm();
  const watchFields = watch(['text']);
  const { touched, isValid, isSubmitting } = formState;

  const onSubmit = async (data) => {
    console.log('FormData: ', data);
    const { text } = data;
  };
  //  Auth Gate
  useEffect(() => {
    if (!isAuthenticated) {
      setAlert('You gotta log in for that...', 'notice');
      setModal(true, 'auth');
    }
  }, []);
  return (
    <Cont2>
      <ChatHead>
        <div className=''>Conor</div>
        <div className='txt-active'>.: aoe :.</div>
        <div>{profile.name}</div>
      </ChatHead>

      <ChatDisp className='bg-prop'>
        <ChatDispInner className='bg-jet'>messages message</ChatDispInner>
      </ChatDisp>
      <ChatFormCont className='bg-prop'>
        <ChatTxt type='text' className='bg-jet' />
        <ChatBtn type='submit' className='bg-pale txt-black'>
          go
        </ChatBtn>
      </ChatFormCont>
    </Cont2>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile.profile,
});

export default connect(mapStateToProps, { setAlert, setModal })(Talk);