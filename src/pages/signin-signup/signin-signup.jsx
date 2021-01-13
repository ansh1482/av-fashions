import React from 'react';
import SignIn from '../../components/signin/signin.jsx';
import './signin-signup.scss';
import SignUp from '../../components/signup/signup';

const SignInSignUp = () =>
  <div className='sign-in-and-sign-up-page'>
    <SignIn />
    <SignUp />
  </div>

export default SignInSignUp;
