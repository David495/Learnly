import React, { useState } from 'react'
import Login_page_style from './login_page.module.css';
import {Link} from 'react-router-dom';
import Google_Logo from '../images/google_logo.png';
import { useNavigate } from 'react-router-dom';
import { Client, Account, ID } from "appwrite";
const Login_page = () => {
  const client = new Client()
  .setEndpoint(import.meta.env.VITE_APP_WRITE_END_POINT)
  .setProject(import.meta.env.VITE_APP_WRITE_PROJECT_ID);

  const account = new Account(client);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      account.createOAuth2Session(
        "google",
        "https://learnly-one.vercel.app/dashboard",
        "https://learnly-one.vercel.app/login"    
      );
    } catch (err) {
      console.error("Google login failed:", err);
    }
  };
  return (
    <>
    <main className={Login_page_style.main_login_section}>
    <form className={Login_page_style.login_form} onSubmit={handleLogin}>
    <div className={Login_page_style.login_heading}>
        <h2 className={Login_page_style.login_title}>Welcome back</h2>
        <p className={Login_page_style.login_sub_title}>Login to your account</p>
    </div>
    <input type="text" placeholder="Enter your email" className={Login_page_style.login_input_name} onChange={(e) => setEmail(e.target.value)} required/>
    <input type="password" placeholder="Enter your Password" className={Login_page_style.login_input_password} onChange={(e) => setPassword(e.target.value)} required/>
    <button type="submit" className={Login_page_style.login_button}>Login</button>
    {error && <p>{error}</p>}
    <p className="login_sub_title">Don't have an account? <Link to='/register'>Register</Link></p>
    <div className={Login_page_style.login_hr_container}>
        <hr className={Login_page_style.login_hr_tag}/>
        <span>or</span>
        <hr className={Login_page_style.login_hr_tag}/>
    </div>
    <p>Continue with Google</p>
     <div className={Login_page_style.google_logo_container} onClick={handleGoogleLogin}>
          <img src={Google_Logo} alt="Google Logo" className={Login_page_style.google_logo} />
          <span className={Login_page_style.login_sub_title_google}>Google</span>
    </div>
    </form>
    </main>
    </>
  )
}

export default Login_page;