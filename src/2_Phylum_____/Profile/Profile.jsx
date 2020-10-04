//  React
import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
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

//~~~~~~~~~~~~~~~~
//  MAIN
//~~~~~~~~~~~~~~~~
const Profile = ({ isAuthenticated, setAlert, profile }) => {
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
  const [editingType, setEditingType] = useState();
  useEffect(() => {
    console.log('$$$ editingType: ', editingType);
  }, [editingType]);
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

  //==================
  // MAIN RETURN
  if (!isAuthenticated) {
    return <Redirect to='/about' />;
  } else if (profile.length <= 1) {
    return <div>Profile Error</div>;
  } else
    return (
      <ProfileCont className='txt-black'>
        <ProfileHead>Profile Editing</ProfileHead>
        <ProfileBody className='bg-gry2'>
          <BodyCont onClick={() => setEditingType('identity')}>
            <RowFull>
              <h4>Identity</h4>
              {editingType === 'identity' && (
                <FormState id='identity-form'>
                  <form>
                    <Note className='txt-warn'>editing...</Note>
                  </form>
                  <BtnTight onClick={() => setEditingType('personality')}>
                    nvm
                  </BtnTight>
                </FormState>
              )}
            </RowFull>

            <RowFull className='fill-full'>
              <IdentityCont>
                <h5>name</h5>
                <IdentityShow>{name}</IdentityShow>
              </IdentityCont>
              <IdentityCont>
                <h5>company</h5>
                <IdentityShow>
                  {entity !== 'void' ? entity : 'who sent you?'}
                </IdentityShow>
              </IdentityCont>
              <IdentityCont>
                <h5>location</h5>
                <IdentityShow>{location ? location : 'where?'}</IdentityShow>
              </IdentityCont>
            </RowFull>
            <RowFull className='fill-full'>
              <IdentityCont>
                <h5>email</h5>

                <IdentityShow>{email}</IdentityShow>
              </IdentityCont>
              <IdentityCont>
                <h5>website</h5>
                <IdentityShow>
                  {web_url ? web_url : `what do you do?`}
                </IdentityShow>
              </IdentityCont>
              <IdentityCont>
                <h5>Image</h5>
                <IdentityShow>{img_url ? img_url : `upload?`}</IdentityShow>
              </IdentityCont>
            </RowFull>
            {editingType === 'identity' && (
              <input type='submit' form='identity-form' value='Save' />
            )}
          </BodyCont>
          <BodyCont onClick={() => setEditingType('personality')}>
            <RowFull>
              <h4>Personality</h4>
              {editingType === 'personality' && (
                <FormState id='personality-form'>
                  <Note className='txt-warn'>editing...</Note>
                  <BtnTight>nvm</BtnTight>
                </FormState>
              )}
            </RowFull>
            <RowFull className='fill-full'>
              <PersonalityCont>
                <h5>puzzle:</h5>
                <PersonalityShow>{puzzle}</PersonalityShow>
              </PersonalityCont>
              <PersonalityCont>
                <h5>thought:</h5>
                <PersonalityShow>{thought}</PersonalityShow>
              </PersonalityCont>
            </RowFull>
            {editingType === 'personality' && (
              <input type='submit' form='personality-form' value='Save' />
            )}
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
