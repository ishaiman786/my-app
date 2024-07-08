import React, { useState } from 'react';
import './NavbarStyle.css';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo2.png" alt="Logo" />
      </div>
      <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
        <li>
          <a href="#todos" onClick={toggleMenu}>Todos</a>
        </li>
        <li>
          <a href="#pending" onClick={toggleMenu}>Pending</a>
        </li>
        <li>
          <a href="#complete" onClick={toggleMenu}>Completed</a>
        </li>
      </ul>
      <div className={`menu-icon ${showMenu ? 'hide' : ''}`} onClick={toggleMenu}>
        <i className="fas fa-bars"></i> {/* Replace with your menu icon */}
      </div>
      <div className={`close-icon ${showMenu ? '' : 'hide'}`} onClick={toggleMenu}>
        <i className="fas fa-times"></i> {/* Replace with your close icon (X) */}
      </div>
    </nav>
  );
};

export default NavBar;




