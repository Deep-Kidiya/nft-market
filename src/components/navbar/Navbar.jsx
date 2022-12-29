import React from "react";

import Logo_dark from "../../assets/logo.svg";
import Logo_ligth from "../../assets/logo-light.svg";
import { AiOutlineUser } from "react-icons/ai";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={Logo_dark} alt="Logo" className="dark-logo" />
          <img src={Logo_ligth} alt="Logo" className="ligth-logo" />
        </div>
        <div className="nav-links">
          <h2 className="nav-link">Marketplace</h2>
          <h2 className="nav-link">Rankings</h2>
          <h2 className="nav-link">Connect a wallet</h2>
          <button className="nav-btn"><AiOutlineUser /> <span>Sign Up</span></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
