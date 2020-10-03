//  React
import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
//  STYLE
import {
  Row,
  Btn,
  Btn2,
  FormLabel,
  RowBottom,
} from '../../Design/Styled_Common';
import {
  ProfileCont,
  ProfileHead,
  ProfileBody,
  SectionCont,
  BodyCont,
} from './Styled';

//~~~~~~~~~~~~~~~~
//  MAIN
//~~~~~~~~~~~~~~~~
const Profile = ({ isAuthenticated, setAlert, profile }) => {
  //  ~~ FORM ~~
  const { register, handleSubmit, watch, reset, errors, formState } = useForm();
  const { touched, isValid, isSubmitting } = formState;

  const onSubmit = async (data) => {
    console.log('FormData: ', data);
  };
  //  Redirect (auth?)
  if (!isAuthenticated) {
    setAlert('You gotta log in for that...', 'Notice');
    return <Redirect to='/' />;
  }
  if (profile.length <= 1) {
    return <div>Profile Error</div>;
  } else
    return (
      <ProfileCont>
        <ProfileHead>Profile Head</ProfileHead>
        <ProfileBody>
          Profile Body
          <BodyCont>
            Body Cont
            <SectionCont>Section Cont</SectionCont>
          </BodyCont>
        </ProfileBody>
      </ProfileCont>
    );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  profile: state.profile,
});

export default connect(mapStateToProps, { setAlert })(Profile);
