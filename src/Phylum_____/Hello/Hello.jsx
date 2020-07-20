import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
//  Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser, registerUser } from '../Auth/axn_auth';
//  Style
import {
  Row,
  Btn,
  FormLabel,
  RowBottom,
  pad1,
} from '../../Design/Styled_Common';
import { Cont1, AuthForms, AuthCont } from '../Styled';

const Hello = ({ loginUser, registerUser }) => {
  //  ~~ FORM ~~
  const { register, handleSubmit, watch, errors } = useForm();
  const watchFields = watch(['image', 'name', 'active']);

  const onSubmit = async (data) => {
    console.log('FormData: ', data);
    const { email, password } = data;
    if (authType === 'hello')
      authType === 'login'
        ? loginUser(email, password)
        : //  Set Token
          registerUser(email, password);
    //  Set Token
    //  Redirect
  };

  //    SubComps
  const Login = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <FormLabel>em</FormLabel>
        <input
          name='email'
          defaultValue='email'
          ref={register}
          className='field_entry'
        />
        <pad1 />
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
    <form onSubmit={handleSubmit(onSubmit)}>
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

  //  ~~ STATE ~~
  const [authType, setAuthType] = useState(Login);

  return (
    <Cont1>
      <AuthCont>
        <AuthForms>{authType === 'login' ? Login : Register}</AuthForms>
        <RowBottom>
          <Btn onClick={() => setAuthType('login')}>login</Btn>
          <Btn onClick={() => setAuthType('register')}>register</Btn>
        </RowBottom>
      </AuthCont>
    </Cont1>
  );
};

Hello.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser, registerUser })(Hello);
