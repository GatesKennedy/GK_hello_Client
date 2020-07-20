//  React
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { logout } from '../Modules/User/rdx_axn/axn_auth';
//  STYLE
import { Btn } from '../../Design/Styled_Common';
import { NaviCont, NaviBtns, NaviLogo } from '../Styled';
//  Asset

// const Navi = ({ auth: { isAuthenticated, user, loading }, logout }) => {
const Navi = () => {
  //  STATE
  const [navNow, setNavNow] = useState('give');
  return (
    <Fragment>
      <NaviCont>
        <NaviLogo id='navi-logo'>
          <Btn>(o_O)</Btn>
        </NaviLogo>
        <NaviBtns id='navi-btns'>
          <Link
            to='/chat'
            onClick={() => setNavNow('chat')}
            className={navNow === 'chat' ? 'bg-active txt-pale' : ''}
          >
            <Btn
              className={
                navNow === 'chat' ? 'bg-active txt-pale' : 'bg-pale txt-black'
              }
            >
              talk
            </Btn>
          </Link>
          <Link
            to='/profile'
            onClick={() => setNavNow('give')}
            className={navNow === 'give' ? 'bg-active txt-pale' : ''}
          >
            <Btn
              className={
                navNow === 'give' ? 'bg-active txt-pale' : 'bg-pale txt-black'
              }
            >
              give
            </Btn>
          </Link>
          <Link
            to='/about'
            onClick={() => setNavNow('take')}
            className={navNow === 'take' ? 'bg-active txt-pale' : ''}
          >
            <Btn
              className={
                navNow === 'take' ? 'bg-active txt-pale' : 'bg-pale txt-black'
              }
            >
              take
            </Btn>
          </Link>
        </NaviBtns>
        <NaviLogo>
          <Btn>(^=^)</Btn>
        </NaviLogo>
      </NaviCont>
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
