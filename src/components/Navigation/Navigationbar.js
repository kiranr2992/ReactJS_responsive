import React from "react";

import { NavLink } from 'react-router-dom';
import ImageLogo from '../../assets/logo.png';
import userLogo from '../../assets/userlogo.png';

import './navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Navigationbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
            <img src={ImageLogo} alt="Logo"/>        
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/findjobs">FIND JOB</NavLink>
            </li>
            <li>
              <NavLink to="/appliedjobs">APPLIED JOBS</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/messages">Messages</NavLink>
            </li>
          </ul>
        </div>
        <div className="userlogo">
            <FontAwesomeIcon icon={faBell} className="notificationIcon icon1" style={{cursor: "pointer"}} />
            <img src={userLogo} alt="user Logo"/>        
        </div>
      </div>
    </nav>
  )
}
export default Navigationbar;