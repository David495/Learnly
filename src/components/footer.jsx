import React from 'react'
import { Link } from 'react-router-dom'
import Footerstyle from './footer.module.css'

const Footer = () => {
  return (
    <>
    <footer className={Footerstyle.footer_section}>
        <div className="footer_logo">
            <Link to='/' className={Footerstyle.footer_logo}>Learnly</Link>
            <p>Learn smarter, create faster, achieve more.</p>
        </div>

        <div className={Footerstyle.footer_links}>  
            <Link to='/about' className={Footerstyle.footer_links}>About</Link>
            <Link to='/contact' className={Footerstyle.footer_links}>Contact</Link>
            <Link to='/privacy' className={Footerstyle.footer_links}>Privacy</Link>
            <Link to='/terms' className={Footerstyle.footer_links}>Terms</Link>
        </div>

        <div className={Footerstyle.footer_social}>
            <Link to='/facebook' className={Footerstyle.footer_social}>Facebook</Link>
            <Link to='/twitter' className={Footerstyle.footer_social}>Twitter</Link>
            <Link to='/instagram' className={Footerstyle.footer_social}>Instagram</Link>
            <Link to='/linkedin' className={Footerstyle.footer_social}>LinkedIn</Link>
        </div>
        <div className={Footerstyle.footer_contact}>
        <Link to='/facebook' className={Footerstyle.footer_contact}>Support</Link>
            <Link to='/help-center' className={Footerstyle.footer_contact}>Help Center</Link>
            <Link to='/faqs' className={Footerstyle.footer_contact}>FAQs</Link>
            <Link to='/terms' className={Footerstyle.footer_contact}>Terms of Service</Link>
            <Link to='/privacy' className={Footerstyle.footer_contact}>Privacy Policy</Link>
        </div>
    </footer>

    <div className={Footerstyle.footer_copyright}>
            <p>© 2025 Learnly. All rights reserved.</p>
        </div>
    </>
    
  )
}

export default Footer;