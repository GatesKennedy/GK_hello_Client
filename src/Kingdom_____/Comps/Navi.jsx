//  React
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { logout } from '../Modules/User/rdx_axn/axn_auth';
//  STYLE
import { ContRow, ContCol, Row, Col } from '../../Design/Styled_Common';
import { NaviBtns, NaviLogo } from './Styled';
//  Asset

// const Navi = ({ auth: { isAuthenticated, user, loading }, logout }) => {
const Navi = () => {
  //   //  Decide Navi
  //   const decideNavi = (role) => {
  //     console.log('(o_O) decideNavi() > User Role: ' + role);
  //     switch (role) {
  //       case 'user':
  //         return authLinks;
  //       case 'dev':
  //       case 'admin':
  //         return adminLinks;
  //     }
  //   };

  return (
    <Row id='navi-cont'>
      <NaviLogo id='navi-logo'>
        <button>(o_O)</button>
      </NaviLogo>
      <NaviBtns id='navi-btns'>
        <div className='center main navi-links'>
          {' '}
          <button>talk</button>
          <button>give</button>
          <button>take</button>
        </div>
      </NaviBtns>
    </Row>
  );
};
// Navi.propTypes = {
//   //logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   //auth: state.auth,
// });

// export default connect(mapStateToProps, {})(Navi);
export default Navi;
