//  React
import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../Kingdom_____/Alert/axn_alert';
//  STYLE
import { ContRow, ContCol, Row, Col, Btn } from '../../Design/Styled_Common';
//  Asset

// const Navi = ({ auth: { isAuthenticated, user, loading }, logout }) => {
const Profile = ({ isAuthenticated, setAlert }) => {
  //  Redirect (auth?)
  if (!isAuthenticated) {
    setAlert('You gotta log in for that...', 'notice');
    return <Redirect to='/' />;
  }

  return <Fragment>Profile</Fragment>;
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert })(Profile);
