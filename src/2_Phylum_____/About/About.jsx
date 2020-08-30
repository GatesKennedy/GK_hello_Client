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
  const [openState, setOpenState] = useState(0);

  return (
    <AboutCont className='bg-gry2 txt-black'>
      {aboutObj.map((item) => (
        <Drop
          key={item.rank}
          _item={item}
          _openState={openState}
          _setOpenState={setOpenState}
        />
      ))}
    </AboutCont>
  );
};

export default About;
