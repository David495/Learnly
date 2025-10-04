import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderStyle from '../components/navbarstyle.module.css';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <header className={HeaderStyle.header}>
      <Link to="/" className={HeaderStyle.Logo}>Learnly</Link>

      <nav>
        <ul className={`${HeaderStyle.nav_links} ${open ? HeaderStyle.open : HeaderStyle.close}`}>
          <button><Link to="/" className={HeaderStyle.navLinks} onClick={() => setOpen(false)}>Home</Link></button>
          <button><Link to="/about" className={HeaderStyle.navLinks} onClick={() => setOpen(false)}>About</Link></button>
          <button><Link to="/contact" className={HeaderStyle.navLinks} onClick={() => setOpen(false)}>Contact</Link></button>
          <button><Link to="/login" className={HeaderStyle.navLinks} onClick={() => setOpen(false)}>Login</Link></button>
          <button><Link to="/register" className={HeaderStyle.navLinks} onClick={() => setOpen(false)}>Sign Up</Link></button>
          <button><Link to="/dashboard" className={HeaderStyle.navLinks} onClick={() => setOpen(false)}>Dashboard</Link></button>
          <li><Link to="/logout" className={HeaderStyle.navLinks} onClick={() => setOpen(false)}>Profile</Link></li>
        </ul>
      </nav>

      <div className={HeaderStyle.menu_icon} onClick={toggle}>
        {open ? <X /> : <Menu />}
      </div>
    </header>
  );
};

export default Header;
