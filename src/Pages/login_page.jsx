import React from 'react'
import Login_page_style from './login_page.module.css';
import Login_image from '../images/login_image.png';
import {Link} from 'react-router-dom';
import Google_Logo from '../images/google_logo.png';
import Apple_Logo from '../images/apple_logo.png';
const Login_page = () => {
  return (
    <>
    <main className={Login_page_style.main_login_section}>
    <form className={Login_page_style.login_form}>
    <div className={Login_page_style.login_heading}>
        <h2 className={Login_page_style.login_title}>Welcome back</h2>
        <p className={Login_page_style.login_sub_title}>Login to your account</p>
    </div>
    <input type="text" placeholder="Enter your Username" className={Login_page_style.login_input_name} required/>
    <input type="password" placeholder="Enter your Password" className={Login_page_style.login_input_password} required/>
    <button type="submit" className={Login_page_style.login_button}>Login</button>
    <p className="login_sub_title">Don't have an account? <Link to='/register'>Register</Link></p>
    <p className="login_sub_title">Forgot Password? <Link to='/forgot-password'>Forgot Password</Link></p>
    <div className={Login_page_style.login_hr_container}>
        <hr className={Login_page_style.login_hr_tag}/>
        <span>or</span>
        <hr className={Login_page_style.login_hr_tag}/>
    </div>
    <div className={Login_page_style.google_logo_container}>
    <img src={Google_Logo} alt="Google Logo" className={Login_page_style.google_logo} />
    <Link to='/register' className={Login_page_style.login_sub_title_google}>Google</Link>
    </div>
   <div className={Login_page_style.apple_logo_container}>
   <img src={Apple_Logo} alt="Apple Logo" className={Login_page_style.apple_logo} />
    <Link to='/register' className={Login_page_style.login_sub_title_apple}>Apple</Link>
    </div>
    </form>
    </main>
    </>
  )
}

export default Login_page;