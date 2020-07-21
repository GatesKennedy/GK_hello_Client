//  React
import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../Kingdom_____/Alert/axn_alert';
//  STYLE
import { ContRow, ContCol, Row, Col, Btn } from '../../Design/Styled_Common';
import {
  Cont2,
  ChatHead,
  ChatDisp,
  ChatFormCont,
  ChatTxt,
  ChatBtn,
  AuthForms,
  AuthCont,
} from '../Styled';
import {} from '../Styled';
//  Asset

const Talk = ({ isAuthenticated, setAlert, profile }) => {
  //  Redirect (auth?)
  if (!isAuthenticated) {
    setAlert('You gotta log in for that...', 'notice');
    return <Redirect to='/' />;
  }
  return (
    <Cont2>
      <ChatHead>
        <div className=''>Conor</div>
        <div className='txt-active'>.: aoe :.</div>
        <div>{profile.name}</div>
      </ChatHead>
      <ChatDisp className='bg-jet'>messages message</ChatDisp>
      <ChatFormCont className='bg-prop'>
        <ChatTxt className='bg-jet'>typing...</ChatTxt>
        <ChatBtn className='bg-pale txt-black'>go</ChatBtn>
      </ChatFormCont>
    </Cont2>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  profile: state.profile.profile,
});

export default connect(mapStateToProps, { setAlert })(Talk);
