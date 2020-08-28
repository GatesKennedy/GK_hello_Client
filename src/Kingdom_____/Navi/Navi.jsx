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
const Navi = ({ _phylumObj }) => {
  console.log('phylumObj:', _phylumObj);
  //  STATE
  const [navNow, setNavNow] = useState('about');
  return (
    <Fragment>
      <NaviCont>
        <NaviLogo id='navi-logo'>
          <Btn>(o_O)</Btn>
        </NaviLogo>
        <NaviBtns id='navi-btns'>
          {_phylumObj.map((phylum, index) => (
            <Link
              key={index}
              to={phylum.route}
              onClick={() => setNavNow(phylum.name)}
              className={navNow === phylum.name ? 'bg-active txt-pale' : ''}
            >
              <Btn
                className={
                  navNow === phylum.name
                    ? 'bg-active txt-pale'
                    : 'bg-pale txt-black'
                }
              >
                {phylum.name}
              </Btn>
            </Link>
          ))}
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
