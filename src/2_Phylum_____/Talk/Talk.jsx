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
import { Para } from '../../Design/Styled_aoe';
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
      setModal(true, 'auth', "You'll need to log in for GK_Talk");
    }
  }, []);
  return (
    <TalkCont id='Talk-TalkCont' className='bg-eerie'>
      <ChatCont id='Talk-ChatCont' className='bg-blk1'>
        <ChatHead id='Talk-ChatHead'>
          <div className=''>Conor</div>
          <div className='txt-pale'>.: GK_Talk :.</div>
          <div>{isAuthenticated ? profile.name : 'Guest'}</div>
        </ChatHead>
        <ChatDisp id='Talk-ChatDisp' className='bg-gry4'>
          <ChatDispInner id='Talk-ChatDispInner' className='bg-gry5'>
            <p>'GK_Talk' is being updated with socket.io</p>
            <p>Be back shortly...</p>
          </ChatDispInner>
        </ChatDisp>
        <ChatFormCont id='Talk-ChatFormCont' className='bg-gry4'>
          <ChatFormTxt
            id='Talk-ChatFormTxt'
            type='text'
            className='bg-gry5 txt-pale'
          />
          <ChatFormBtn
            id='Talk-ChatFormBtn'
            type='submit'
            className='bg-pale txt-black'
          >
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
