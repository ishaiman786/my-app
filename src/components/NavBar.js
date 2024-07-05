import React from 'react';
import './NavbarStyle.css';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo2.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#todos">Todos</a>
        </li>
        <li>
          <a href="#pending">Pending</a>
        </li>
        <li>
          <a href="#complete">Completed</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;