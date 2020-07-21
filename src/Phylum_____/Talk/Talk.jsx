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

const Talk = ({ isAuthenticated, setAlert }) => {
  //  Redirect (auth?)
  if (!isAuthenticated) {
    setAlert('You gotta log in for that...', 'notice');
    return <Redirect to='/' />;
  }
  return <div>Talk</div>;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert })(Talk);
