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
  WhoCont,
  WhoForm,
  HowCont,
  HowForm,
  BodyCont,
} from './Styled';

//~~~~~~~~~~~~~~~~
//  MAIN
//~~~~~~~~~~~~~~~~
const Profile = ({ isAuthenticated, setAlert, profile }) => {
  //  ~~ FORM ~~
  const { register, handleSubmit, watch, reset, errors, formState } = useForm();
  const { touched, isValid, isSubmitting } = formState;
  const {
    name,
    email,
    entity,
    location,
    puzzle,
    thought,
    web_url,
    img_url,
  } = profile;

  const onSubmit = async (data) => {
    console.log('FormData: ', data);
  };
  //  Redirect (auth?)
  if (!isAuthenticated) {
    setAlert('You gotta log in for that...', 'Notice');
    return <Redirect to='/' />;
  }

  //==================
  // MAIN RETURN
  if (profile.length <= 1) {
    return <div>Profile Error</div>;
  } else
    return (
      <ProfileCont className='txt-black'>
        <ProfileHead>Profile Editing</ProfileHead>
        <ProfileBody className='bg-gry2'>
          <BodyCont>
            Who:
            <Row className='fill-full'>
              <WhoCont>
                name:
                {name}
              </WhoCont>
              <WhoCont>
                company:
                {entity}
              </WhoCont>
              <WhoCont>
                location:
                {location}
              </WhoCont>
            </Row>
            <Row className='fill-full'>
              <WhoCont>
                Image:
                {img_url}
              </WhoCont>
              <WhoCont>
                history:
                {web_url}
              </WhoCont>
              <WhoCont>
                email:
                {email}
              </WhoCont>
            </Row>
          </BodyCont>
          <BodyCont>
            How:
            <Row className='fill-full'>
              <HowCont>
                puzzle:
                <HowForm>{puzzle}</HowForm>
              </HowCont>
              <HowCont>
                thought:
                <HowForm>{thought}</HowForm>
              </HowCont>
            </Row>
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
