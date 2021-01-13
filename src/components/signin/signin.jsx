import React from 'react';
import CustomButton from '../custom-button/custom-button.jsx';
import FormInput from '../forminput/forminput.jsx';
import './signin.scss';
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' })
    } catch(error) {
      console.log(error);
    }
  }

  handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} required label='Email' />
          <FormInput name='password' type='password' handleChange={this.handleChange} value={this.state.password} required label='Password' />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={ signInWithGoogle } isGoogle>GOOGLE SIGN IN</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
