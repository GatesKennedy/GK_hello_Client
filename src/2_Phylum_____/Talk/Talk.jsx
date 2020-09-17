//  React
import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
import { setModal } from '../../1_Kingdom_____/UI/axn_ui';
//  SOCKET
import { ioGreet } from './socket_io';

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
//  Asset
import ChatForm from './ChatForm';

//==========================================================
const Talk = ({
  setModal,
  setAlert,
  ioGreet,
  profile,
  auth: { isAuthenticated, role, loading },
}) => {
  //  ~~ STATE ~~
  const [chatMsg, setChatMsg] = useState('oh boy!');
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
            <p>{chatMsg}</p>
          </ChatDispInner>
        </ChatDisp>
        <ChatForm
          onSendMessage={(msg) => {
            alert('Message Sent: ' + msg);
          }}
        />
      </ChatCont>
    </TalkCont>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile.profile,
});

export default connect(mapStateToProps, { setAlert, setModal, ioGreet })(Talk);
