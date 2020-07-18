//  React
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { logout } from '../Modules/User/rdx_axn/axn_auth';
//  STYLE

//  Asset
import { ReactComponent as LogoGk } from '../../Assets/Images/LogoGk.jpg';

// const Navi = ({ auth: { isAuthenticated, user, loading }, logout }) => {
const Navi = () => {
  //  AUTH links
  const authLinks = (
    <nav className='bg-gry4' id='navi-cont'>
      <div className='center menu'>
        <button>(o_O)</button>
      </div>
      <section className='cont col'>
        <div className='center main navi-links'>
          {' '}
          <button>talk</button>
          <button>give</button>
          <button>take</button>
        </div>
      </section>
    </nav>
  );

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
    <Fragment>
      {/* {isAuthenticated && !loading ? decideNavi(user.role) : guestLinks} */}
      {authLinks}
    </Fragment>
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
