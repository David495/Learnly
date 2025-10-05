import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { account, ID } from '../appwrite';
import Signup_Style from './signup.module.css';
import Google_Logo from '../images/google_logo.png';
import Apple_Logo from '../images/apple_logo.png';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await account.create(ID.unique(), email, password);
      setMessage('Account created successfully'); 
      navigate('/dashboard');
    } catch (error) {
      setMessage(error?.message || 'Account creation failed');
    }
  }

  const handleOAuthLogin = (provider) => {
    const origin = window.location.origin;
    account.createOAuth2Session(
      provider,
      `${origin}/dashboard`, // success
      `${origin}/`           // failure
    );
  };
  
  return (
    <>
      <main className={Signup_Style.main_signup_section}>
        <form className={Signup_Style.signup_form} onSubmit={handleSignup}>
          <div className={Signup_Style.signup_heading}>
            <h2 className={Signup_Style.signup_title}>Create your account</h2>
            <p className={Signup_Style.signup_sub_title}>Sign up to get started</p>
          </div>

          <div className={Signup_Style.name_row}>
            <input
              type="text"
              placeholder="First name"
              className={Signup_Style.signup_input}
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className={Signup_Style.signup_input}
              required
            />
          </div>

          <input
            type="text"
            placeholder="Enter your Username"
            className={Signup_Style.signup_input}
            required
          />

            <input
            type="email"
            placeholder="Enter email"
            className={Signup_Style.signup_input}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Create a Password"
            className={Signup_Style.signup_input}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className={Signup_Style.signup_button}>Sign up</button>

          {message && <p style={{ color: "red", marginTop: "10px" }}>{message}</p>}
          <p className={Signup_Style.signup_sub_title_text}>
            Already have an account? <Link to='/login'>Login</Link>
          </p>

          <div className={Signup_Style.signup_hr_container}>
            <hr className={Signup_Style.signup_hr_tag} />
            <span>or</span>
            <hr className={Signup_Style.signup_hr_tag} />
          </div>

          <div className={Signup_Style.google_logo_container} onClick={() => handleOAuthLogin("google")}>
            <img src={Google_Logo} alt="Google Logo" className={Signup_Style.google_logo} />
            <span className={Signup_Style.signup_social_text}>Google</span>
          </div>

          <div className={Signup_Style.apple_logo_container}>
            <img src={Apple_Logo} alt="Apple Logo" className={Signup_Style.apple_logo} />
            <span className={Signup_Style.signup_social_text}>Apple</span>
          </div>
        </form>
      </main>
    </>
  )
}

export default Signup;