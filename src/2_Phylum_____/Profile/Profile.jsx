//  React
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
//  COMPS
import FormGroup from './FormGroup';
//  STYLE
import { ProfileCont, ProfileHead, ProfileBody } from './Styled';

//~~~~~~~~~~~~~~~~
//  MAIN
//~~~~~~~~~~~~~~~~
const Profile = ({ isAuthenticated, setAlert, profile }) => {
  //  STATE

  const [editingType, setEditingType] = useState('void');
  const [isHovering, setIsHovering] = useState();

  //  EFFECT
  useEffect(() => {
    if (!isAuthenticated) {
      setAlert('You gotta log in for that...', 'warn');
      return <Redirect to='/' />;
    }
  }, [isAuthenticated, setAlert]);

  //  FXN
  const handleType = (typeIn) => {
    editingType !== typeIn ? setEditingType(typeIn) : setEditingType('void');
  };

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
          <FormGroup
            formType='Identity'
            profileData={profile.identity}
            editingType={editingType}
            setEditingType={setEditingType}
            isHovering={isHovering}
            setIsHovering={setIsHovering}
            handleType={handleType}
          />
          <FormGroup
            formType='Personality'
            profileData={profile.personality}
            editingType={editingType}
            setEditingType={setEditingType}
            isHovering={isHovering}
            setIsHovering={setIsHovering}
            handleType={handleType}
          />
        </ProfileBody>
      </ProfileCont>
    );
};

Profile.propTypes = {
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  profile: state.profile,
});

export default connect(mapStateToProps, { setAlert })(Profile);
