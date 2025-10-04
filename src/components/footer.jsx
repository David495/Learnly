import React from 'react'
import { Link } from 'react-router-dom'
import Footerstyle from './footer.module.css'

const Footer = () => {
  return (
    <>
    <footer className={Footerstyle.footer}>
        <div className={Footerstyle.inner}>
          <div className={Footerstyle.brand}>
            <Link to='/' className={Footerstyle.brand_name}>Learnly</Link>
            <p className={Footerstyle.brand_tagline}>Learn smarter, create faster, achieve more.</p>
          </div>

          <nav className={Footerstyle.column} aria-label="Company">
            <h3 className={Footerstyle.column_title}>Company</h3>
            <ul className={Footerstyle.link_list}>
              <li><Link to='/about' className={Footerstyle.link}>About</Link></li>
              <li><Link to='/contact' className={Footerstyle.link}>Contact</Link></li>
              <li><Link to='/privacy' className={Footerstyle.link}>Privacy</Link></li>
              <li><Link to='/terms' className={Footerstyle.link}>Terms</Link></li>
            </ul>
          </nav>

          <nav className={Footerstyle.column} aria-label="Social">
            <h3 className={Footerstyle.column_title}>Social</h3>
            <ul className={Footerstyle.link_list}>
              <li><Link to='/facebook' className={Footerstyle.link}>Facebook</Link></li>
              <li><Link to='/twitter' className={Footerstyle.link}>Twitter</Link></li>
              <li><Link to='/instagram' className={Footerstyle.link}>Instagram</Link></li>
              <li><Link to='/linkedin' className={Footerstyle.link}>LinkedIn</Link></li>
            </ul>
          </nav>

          <nav className={Footerstyle.column} aria-label="Support">
            <h3 className={Footerstyle.column_title}>Support</h3>
            <ul className={Footerstyle.link_list}>
              <li><Link to='/support' className={Footerstyle.link}>Support</Link></li>
              <li><Link to='/help-center' className={Footerstyle.link}>Help Center</Link></li>
              <li><Link to='/faqs' className={Footerstyle.link}>FAQs</Link></li>
              <li><Link to='/terms' className={Footerstyle.link}>Terms of Service</Link></li>
              <li><Link to='/privacy' className={Footerstyle.link}>Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>
      </footer>

      <div className={Footerstyle.copyright}>
        <p>© 2025 Learnly. All rights reserved.</p>
      </div>
    </>
    
  )
}

export default Footer;