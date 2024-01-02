import React, { useState } from 'react';
import './Style.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { FaAlignJustify } from "react-icons/fa";


export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const logVal = localStorage.getItem("user")
  const logOption = logVal?true:false
  const handleLogout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    window.location.reload()
  }

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <Link to={"/"}>
        <img src={logo} alt='logo' width="250px"/>
        </Link>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/jobs">Jobs</a>    
        {logOption&&<a href="/addJob">Add Job</a>}    
      </div>
      <div>
        {logOption&&<Button onClick={handleLogout} variant='contained'>logOut</Button>
        // <Link to="/login">
        // <Button variant='contained'>Admin Login</Button>
        // </Link>
        }
      </div>
      <div className="menu-button" onClick={toggleMenu}>
        <FaAlignJustify/>
      </div>
    </nav>
  );
};


