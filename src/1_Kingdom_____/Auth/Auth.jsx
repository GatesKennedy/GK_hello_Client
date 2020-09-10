import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
//  Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser, registerUser, logoutUser } from './axn_auth';
import { setAlert } from '../Alert/axn_alert';
//  Style
import styled from 'styled-components';
import { AuthCont, FormCont, BtnsCont, BtnsRow } from './Styled';
import { setModal } from '../UI/axn_ui';

const Title = styled.h4`
  text-align: center;
  padding-bottom: 4px;
  width: 100%;
`;
const SubTitle = styled.h5`
  text-align: center;
  padding-bottom: 4px;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  align-self: flex-start;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`;
const Btn = styled.button`
  text-align: center;
  width: 40%;
  margin: 2px;

  &:hover {
    background-color: #a0a0a0; /* $aoe-gry3 */
    color: #fafafa;
  }
`;
const Btn2 = styled.button`
  text-align: center;
  width: calc(60% + 8px);
  margin: 2px;

  &:hover {
    background-color: #b0eedd; /* $nds-grn1 */
    color: #4f4f4f;
    font-weight: bold;
  }
`;
const FormLabel = styled.div`
  display: block;
  width: 2.5em;

  padding: 2px 4px;
  text-align: center;
`;

//~~~~~~~~~~~~~~~~
//  MAIN
//~~~~~~~~~~~~~~~~
const Auth = ({
  loginUser,
  registerUser,
  logoutUser,
  setModal,
  isAuthenticated,
}) => {
  const txtInput = {
    width: '100%',
    marginRight: 'calc(2em + 4px)',
  };
  //  ~~ FORM ~~
  const { register, handleSubmit, watch, reset, errors, formState } = useForm();
  const watchFields = watch(['image', 'name', 'active']);
  const { touched, isValid, isSubmitting } = formState;

  const onSubmit = async (data) => {
    console.log('FormData: ', data);
    const { email, password, confirm, username } = data;

    if (authType === 'login') loginUser(email, password);
    else if (password === confirm) {
      registerUser(username, email, password);
    } else setAlert("Your passwords don't match");
  };
  //  ~~ STATE ~~
  const [authType, setAuthType] = useState('login');

  //    SubComps
  const Login = (
    <form id='Auth-Form'>
      <Row id='Auth-Row1'>
        <FormLabel id='Auth-FormLabel1'>em</FormLabel>
        <input
          id='Auth-Input1'
          name='email'
          placeholder='email'
          ref={register}
          style={txtInput}
        />
      </Row>
      <Row id='Auth-Row2'>
        <FormLabel id='Auth-FormLabel2'>pw</FormLabel>
        <input
          id='Auth-Input2'
          name='password'
          placeholder='password'
          ref={register}
          style={txtInput}
        />
      </Row>
    </form>
  );
  const Register = (
    <form id='Auth-Form'>
      <Row id='Auth-Row1'>
        <FormLabel id='Auth-FormLabel1'>un</FormLabel>
        <input
          id='Auth-Input1'
          name='username'
          placeholder='username'
          ref={register}
          style={txtInput}
        />
      </Row>
      <Row id='Auth-Row1'>
        <FormLabel id='Auth-FormLabel1'>em</FormLabel>
        <input
          id='Auth-Input1'
          name='email'
          placeholder='email'
          ref={register}
          style={txtInput}
        />
      </Row>
      <Row id='Auth-Row1'>
        <FormLabel id='Auth-FormLabel1'>pw</FormLabel>
        <input
          id='Auth-Input1'
          name='password'
          placeholder='password'
          ref={register}
          style={txtInput}
        />
      </Row>
      <Row id='Auth-Row1'>
        <FormLabel id='Auth-FormLabel1'>pw</FormLabel>
        <input
          id='Auth-Input1'
          name='confirm'
          placeholder='confirm'
          ref={register}
          style={txtInput}
        />
      </Row>
    </form>
  );

  //  Redirect (auth?)
  if (isAuthenticated) {
    setModal(true, 'auth', 'void');
    return (
      <AuthCont
        id='Auth-AuthCont'
        className='bg-blk1'
        style={{ justifyContent: 'space-between' }}
      >
        <div>
          <Title>logout</Title>
        </div>
        <BtnsCont
          id='Auth-BtnsCont'
          className={isSubmitting ? ' bg-pale txt-active' : ''}
        >
          <SubTitle>Are you sure?</SubTitle>
          <Btn2 id='Auth-Btn2' onClick={() => logoutUser()}>
            Yes, Logout
          </Btn2>
          <Btn2 id='Auth-Btn2' onClick={() => setModal(false)}>
            No, I wanna stay
          </Btn2>
        </BtnsCont>{' '}
        <FormCont id='Auth-FormCont'></FormCont>
      </AuthCont>
    );
  } else
    return (
      <AuthCont id='Auth-AuthCont' className='bg-blk1'>
        <Title>{authType}</Title>
        <FormCont id='Auth-FormCont'>
          {authType === 'login' ? Login : Register}
        </FormCont>
        <BtnsCont id='Auth-BtnsCont'>
          {' '}
          <BtnsRow
            id='Auth-BtnsRow'
            className={isSubmitting ? 'bg-pale txt-active' : ''}
          >
            <Btn2
              id='Auth-Btn2'
              onClick={handleSubmit(onSubmit)}
              className={
                Object.keys(touched).length >= 2 ? '  txt-suggest' : ' bg-gry2 '
              }
            >
              go
            </Btn2>
          </BtnsRow>
          {/* Change Auth Type */}
          <BtnsRow id='Auth-BtnsRow'>
            {authType === 'login' ? (
              <Btn
                id='Auth-Btn1'
                onClick={() => {
                  setAuthType('register');
                  authType !== 'register' && reset();
                }}
                className={'bg-gry5 txt-gry2'}
              >
                register?
              </Btn>
            ) : (
              <Btn
                id='Auth-Btn1'
                onClick={() => {
                  setAuthType('login');
                  authType !== 'login' && reset();
                }}
                className={'bg-gry5 txt-gry3'}
              >
                login?
              </Btn>
            )}
          </BtnsRow>
        </BtnsCont>{' '}
      </AuthCont>
    );
};

Auth.propTypes = {
  loginUser: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  loginUser,
  registerUser,
  logoutUser,
  setModal,
})(Auth);
