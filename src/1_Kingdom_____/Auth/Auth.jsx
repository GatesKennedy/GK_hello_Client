import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
//  Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser, registerUser } from './axn_auth';
import { setAlert } from '../Alert/axn_alert';
//  Style
import {
  Row,
  Btn,
  Btn2,
  FormLabel,
  RowBottom,
} from '../../Design/Styled_Common';
import { AuthForms, AuthCont } from './Styled';

//~~~~~~~~~~~~~~~~
//  MAIN
//~~~~~~~~~~~~~~~~
const Auth = ({ loginUser, registerUser, isAuthenticated }) => {
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
    <form>
      <Row>
        <FormLabel>em</FormLabel>
        <input
          name='email'
          defaultValue='email'
          ref={register}
          className='field_entry'
        />
      </Row>
      <Row>
        <FormLabel>pw</FormLabel>
        <input
          name='password'
          defaultValue='password'
          ref={register}
          className='field_entry'
        />
      </Row>
    </form>
  );
  const Register = (
    <form>
      <Row>
        <FormLabel>un</FormLabel>
        <input
          name='username'
          defaultValue='username'
          ref={register}
          className='field_entry'
        />
      </Row>
      <Row>
        <FormLabel>em</FormLabel>
        <input
          name='email'
          defaultValue='email'
          ref={register}
          className='field_entry'
        />
      </Row>
      <Row>
        <FormLabel>pw</FormLabel>
        <input
          name='password'
          defaultValue='password'
          ref={register}
          className='field_entry'
        />
      </Row>
      <Row>
        <FormLabel>pw</FormLabel>
        <input
          name='confirm'
          defaultValue='confirm'
          ref={register}
          className='field_entry'
        />
      </Row>
    </form>
  );

  //  Redirect (auth?)
  if (isAuthenticated) {
    setAlert('You gotta log in for that...', 'notice');
    return <Redirect to='/about' />;
  } else
    return (
      <AuthCont id='Auth-AuthCont' className='bg-blk1'>
        <AuthForms id='Auth-AuthForms'>
          {authType === 'login' ? Login : Register}
        </AuthForms>
        <RowBottom id='Auth-RowBottom'>
          <Btn
            onClick={() => {
              setAuthType('login');
              reset();
            }}
            className={authType === 'login' ? 'bg-active txt-pale' : ''}
          >
            login
          </Btn>
          <Btn
            onClick={() => {
              setAuthType('register');
              reset();
            }}
            className={authType === 'register' ? 'bg-active txt-pale' : ''}
          >
            register
          </Btn>
        </RowBottom>
        <RowBottom className={isSubmitting ? 'bg-pale txt-black' : ''}>
          <Btn2
            onClick={handleSubmit(onSubmit)}
            className={
              Object.keys(touched).length >= 2 ? 'bg-active txt-pale' : ''
            }
          >
            go
          </Btn2>
        </RowBottom>
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

export default connect(mapStateToProps, { loginUser, registerUser })(Auth);
