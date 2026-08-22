import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" aria-label="Home">A</Link>
      <div></div> {/* Restored for spacing and centering */}
      <ul className="navbar-list">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
