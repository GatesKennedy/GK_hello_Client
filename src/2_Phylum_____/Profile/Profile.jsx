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
  useEffect(() => {
    if (!isAuthenticated) {
      setAlert('You gotta log in for that...', 'Notice');
      return <Redirect to='/' />;
    }
  }, [isAuthenticated]);
  //  ~~ FORM ~~
  const { register, handleSubmit, watch, reset, errors, formState } = useForm();
  const { touched, isValid, isSubmitting } = formState;

  const onSubmit = async (data) => {
    console.log('FormData: ', data);
  };
  //  Redirect (auth?)

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
        <ProfileBody>
          <BodyCont
            onClick={() => setEditingType('identity')}
            className={editingType === 'identity' ? ' bg-gry1' : ' bg-gry2'}
          >
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
              <input
                type='submit'
                form='identity-form'
                value='Save'
                className='btn'
              />
            )}
          </BodyCont>
          <BodyCont
            onClick={() => setEditingType('personality')}
            className={editingType === 'personality' ? ' bg-gry1' : ' bg-gry2'}
          >
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
                <PersonalityShow placeholder='Stump me...'>
                  {puzzle}
                  {`Everything you do
                  Is magic
                  And everywhere you go
                  Is tragic

                  And it's hard to believe it's true
                  Everything is baby blue
                  Everything is baby blue`}
                </PersonalityShow>
              </PersonalityCont>
              <PersonalityCont>
                <h5>thought:</h5>
                <PersonalityShow placeholder='What do YOU think about?'>
                  {thought}
                  {`Give a look up the street
                  It's good
                  Now give a look on the street
                  It's bad
                  'Cause the sun is ascending at noon
                  You haven't even picked a tune`}
                </PersonalityShow>
              </PersonalityCont>
            </RowFull>

            <RowFull className='fill-full'>
              <PersonalityCont>
                <h5>Joke:</h5>
                <PersonalityShow placeholder='Things that are funny...'>
                  {`It's easier to do
In the moonlight
And everyone you need
Is alright

And it doesn't take much to proof
Everything is baby blue
Everything is baby blue`}
                </PersonalityShow>
              </PersonalityCont>

              <PersonalityCont>
                <h5>Question:</h5>
                <PersonalityShow placeholder='What thoroughly confuses you?'>{`
              Everyone you know is a baby
              Everyone you know is blue
              'Cause you live in a big, blue world
              And everybody is jagged[?] and lazy
              Everything is baby blue
              And everybody is going crazy
              Everything is baby blue
              
              'Cause we live in a big, blue world
              Everything is baby blue
              Baby blue
              
              `}</PersonalityShow>
              </PersonalityCont>
            </RowFull>
            {editingType === 'personality' && (
              <input
                type='submit'
                form='personality-form'
                value='Save'
                className='btn'
              />
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
