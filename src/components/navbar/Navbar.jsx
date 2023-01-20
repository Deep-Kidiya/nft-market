import React, { useState, useEffect } from "react";

import Logo_dark from "../../assets/logo.svg";
import Logo_ligth from "../../assets/logo-light.svg";
import { AiOutlineUser } from "react-icons/ai";
import { RxSun } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";

import "./navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [icon, setIcon] = useState("dark");
  const [navbar, setNavbar] = useState("false");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    setIcon(!icon);
  };

  useEffect(() => {
    document.body.id = theme;
  }, [theme]);

  const toggleNav = () => {
    setNavbar(!navbar);
  };

  useEffect(() => {
    const labels = document.querySelectorAll(".animated-button span");
    labels.forEach((label) => {
      const characters = label.textContent.split("");
      label.innerHTML = "";
      characters.forEach((char, i) => {
        label.innerHTML += `<em>${char}</em>`;
      });
    });
  }, []);

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">
            <img src={icon ? Logo_dark : Logo_ligth} alt="Logo" />
          </a>
        </div>
        <div className="nav-btns">
          <div className={navbar ? "nav-links" : "nav-links active"}>
            <a href="" className="nav-link marker ">
              <span className="animated-button">
                {" "}
                <span>Marketplace</span>
              </span>
            </a>
            <a href="" className="nav-link ranking">
              <span className="animated-button">
                {" "}
                <span>Rankings</span>
              </span>
            </a>
            <a href="" className="nav-link connect">
              <span className="animated-button">
                {" "}
                <span>Connect a wallet</span>
              </span>
            </a>

            <button className="nav-btn animated-btn">
              <AiOutlineUser /> <span className="animated-button"><span>Sign Up</span></span>
            </button>
          </div>

          <button
            className={navbar ? "burger" : "burger active"}
            onClick={toggleNav}
          >
            {navbar ? <GiHamburgerMenu /> : <GiCrossMark />}
          </button>
          <button className="theme-btn animated-btn" onClick={() => toggleTheme()}>
            {icon ? <RxSun /> : <IoMoonOutline />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
