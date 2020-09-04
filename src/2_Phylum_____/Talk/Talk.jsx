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
  TalkCont,
  ChatCont,
  ChatHead,
  ChatDisp,
  ChatDispInner,
  ChatFormCont,
  ChatFormTxt,
  ChatFormBtn,
} from './Styled';
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
      setModal(true, 'auth', "You'll need to log in to Talk");
    }
  }, []);
  return (
    <TalkCont id='Talk-TalkCont'>
      <ChatCont id='Talk-ChatCont' className='bg-blk1'>
        <ChatHead id='Talk-ChatHead'>
          <div className=''>Conor</div>
          <div className='txt-pale'>.: aoe :.</div>
          <div>{isAuthenticated ? profile.name : 'Guest'}</div>
        </ChatHead>
        <ChatDisp id='Talk-ChatDisp' className='bg-prop'>
          <ChatDispInner id='Talk-ChatDispInner' className='bg-jet'>
            'Hol up...'
          </ChatDispInner>
        </ChatDisp>
        <ChatFormCont id='Talk-ChatFormCont' className='bg-prop'>
          <ChatFormTxt type='text' className='bg-jet' />
          <ChatFormBtn type='submit' className='bg-pale txt-black'>
            go
          </ChatFormBtn>
        </ChatFormCont>
      </ChatCont>
    </TalkCont>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile.profile,
});

export default connect(mapStateToProps, { setAlert, setModal })(Talk);
