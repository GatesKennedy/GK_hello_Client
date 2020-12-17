//  React
import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setModal } from '../UI/axn_ui';
//  STYLE
import { Tooltip } from '@material-ui/core';
import { Btn, NavBtn } from '../../Design/Styled_aoe';
import {
  NaviCont,
  NaviBtns,
  NaviLogo,
  NaviImg,
  LinkCont,
  IconText,
} from './Styled';

//  ASSET
import { IoMdLogIn, IoMdLogOut, IoMdPerson } from 'react-icons/io';
import { FaHorseHead } from 'react-icons/fa';

const Navi = ({ _phylumObj, setModal, profile, isAuthenticated }) => {
  //  STATE
  const [navNow, setNavNow] = useState();
  const iconStyle = { height: '100%', width: 'auto', padding: '2px 3px' };
  const RightStyle = { textAlign: 'right' };
  //  EFFECT
  useEffect(() => {
    const routeExt = String(window.location.href).split('/').pop();
    setNavNow(routeExt);
  }, []);

  return (
    <NaviCont id='Navi-NaviCont' className='bg-eerie'>
      {isAuthenticated ? (
        <LinkCont id='Navi-LinkCont'>
          <Tooltip title='Edit Profile' placement='bottom-start'>
            <Link
              to='/profile'
              onClick={() => setNavNow('profile')}
              className='flex-row'
            >
              <NaviLogo id='Navi-NaviLogo'>
                <Btn>
                  {profile.img_url === 'void' ? (
                    <NaviImg src={profile.img_url} alt='img' />
                  ) : (
                    <IoMdPerson
                      id='navi-logo-user'
                      style={iconStyle}
                      className='hoverColor'
                    />
                  )}
                </Btn>
                <IconText id='Navi-IconText'>
                  <div className='txt-mine align-left'>{profile.name}</div>
                </IconText>
              </NaviLogo>
            </Link>
          </Tooltip>
        </LinkCont>
      ) : (
        <Tooltip title='Horses?' placement='bottom-start'>
          <NaviLogo
            id='Navi-NaviLogo'
            onClick={() =>
              setModal(true, 'auth', 'You like horses too?? ...Who are you?')
            }
          >
            <Btn>
              <FaHorseHead
                id='navi-logo-horse'
                style={iconStyle}
                className='hoverColor'
              />
            </Btn>{' '}
            <IconText id='Navi-IconText'></IconText>
          </NaviLogo>
        </Tooltip>
      )}

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
      <Tooltip
        title={!isAuthenticated ? 'Login' : 'Logout'}
        placement='bottom-end'
      >
        <NaviLogo
          id='Navi-NaviLogo'
          className='just-right'
          onClick={() => setModal(true, 'auth')}
        >
          <IconText id='Navi-IconText'>
            <div style={RightStyle}>
              {!isAuthenticated ? 'Login' : 'Logout'}
            </div>
          </IconText>
          <Btn>
            {!isAuthenticated ? (
              <IoMdLogIn style={iconStyle} className='hoverColor' />
            ) : (
              <IoMdLogOut style={iconStyle} className='hoverColor' />
            )}
          </Btn>
        </NaviLogo>
      </Tooltip>
    </NaviCont>
  );
};
Navi.propTypes = {
  //logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  profile: state.profile,
});

export default connect(mapStateToProps, { setModal })(Navi);
