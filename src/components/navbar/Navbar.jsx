import React, { useState, useEffect } from "react";

import Logo_dark from "../../assets/logo.svg";
import Logo_ligth from "../../assets/logo-light.svg";
import { AiOutlineUser } from "react-icons/ai";
import { RxSun } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";

import "./navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState('dark')
  const [icon, setIcon] = useState('dark')
  const toggleTheme = () => {
    if(theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
    setIcon(!icon)
  };

  useEffect(() => {
    document.body.id = theme
  }, [theme]);

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={icon ? (Logo_dark) : (Logo_ligth)} alt="Logo" />
        </div>
        <div className="nav-links">
          <h2 className="nav-link">Marketplace</h2>
          <h2 className="nav-link">Rankings</h2>
          <h2 className="nav-link">Connect a wallet</h2>
          <button className="nav-btn">
            <AiOutlineUser /> <span>Sign Up</span>
          </button>
          <button className="theme-btn" onClick={() => toggleTheme()}>
          {icon ? <RxSun /> : <IoMoonOutline />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
