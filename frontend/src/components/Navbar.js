// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/">
            Therapy App
      </Link>
    </div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/entry">Add Entry</Link></li>
      <li><Link to="/calendar">Calendar</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default Navbar;
