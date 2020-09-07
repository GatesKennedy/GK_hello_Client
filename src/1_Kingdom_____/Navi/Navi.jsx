//  React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authUser, logoutUser } from '../Auth/axn_auth';
import { setModal } from '../UI/axn_ui';
//  STYLE
import { Btn, NavBtn } from '../../Design/Styled_aoe';
import { NaviCont, NaviBtns, NaviLogo, IconText } from './Styled';

//  ASSET
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import { FaHorseHead } from 'react-icons/fa';
import { Gi3DStairs } from 'react-icons/gi';

// const Navi = ({ auth: { isAuthenticated, user, loading }, logout }) => {
const Navi = ({ _phylumObj, setModal, username, isAuthenticated }) => {
  //  STATE
  const [navNow, setNavNow] = useState('about');
  const iconStyle = { height: '22px', width: 'auto', padding: '2px 3px' };
  return (
    <NaviCont className='bg-eerie'>
      <NaviLogo id='navi-logo-horse'>
        <Btn
          onClick={() =>
            setModal(true, 'auth', 'You like horses too?? ...Who are you?')
          }
        >
          <FaHorseHead style={iconStyle} />
          <IconText>
            {isAuthenticated ? <div>{username.name}</div> : ''}
          </IconText>
        </Btn>
      </NaviLogo>
      <NaviBtns id='navi-btns'>
        {_phylumObj.map((phylum, index) => (
          <NavBtn
            key={index}
            id='NavBtn'
            className={
              navNow === phylum.name
                ? 'bg-active txt-active'
                : 'bg-idle txt-idle'
            }
            onClick={() => setNavNow(phylum.name)}
          >
            <Link
              to={phylum.route}
              onClick={() => setNavNow(phylum.name)}
              className={
                navNow === phylum.name
                  ? 'bg-active txt-active'
                  : 'bg-idle txt-idle'
              }
            >
              {phylum.show}
            </Link>
          </NavBtn>
        ))}
      </NaviBtns>
      <NaviLogo>
        <Btn onClick={() => setModal(true, 'auth')}>
          <IconText>{!isAuthenticated ? '' : 'logout?'}</IconText>
          {!isAuthenticated ? (
            <IoMdLogIn style={iconStyle} />
          ) : (
            <IoMdLogOut style={iconStyle} />
          )}
        </Btn>
      </NaviLogo>
    </NaviCont>
  );
};
Navi.propTypes = {
  //logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  username: state.profile.user,
});

export default connect(mapStateToProps, { setModal })(Navi);
