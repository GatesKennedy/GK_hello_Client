//  React
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { logout } from '../Modules/User/rdx_axn/axn_auth';

//  STYLE
import { ContRow, ContCol, Row, Col, Btn } from '../../Design/Styled_Common';
import { AboutCont } from './Styled';
import { BodyCont } from '../../Design/Styled_aoe';

//  Asset
import { aboutObj } from './AboutObj';
import Drop from '../../3_Class_____/Drop';
// const Navi = ({ auth: { isAuthenticated, user, loading }, logout }) => {
const About = () => {
  return (
    <AboutCont className='bg-white txt-black'>
      {aboutObj.map((item) => (
        <Drop _item={item} />
      ))}
    </AboutCont>
  );
};

export default About;
