//  React
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { logout } from '../Modules/User/rdx_axn/axn_auth';
//  STYLE
import { ContRow, ContCol, Row, Col, Btn } from '../../Design/Styled_Common';
import { BodyCont } from '../../Design/Styled_aoe';
//  Asset

// const Navi = ({ auth: { isAuthenticated, user, loading }, logout }) => {
const About = () => {
  return <BodyCont className='bg-white txt-black'>About</BodyCont>;
};

export default About;
