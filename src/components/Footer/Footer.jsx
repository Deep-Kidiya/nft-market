import React, { useState, useEffect } from "react";
import "./footer.css";

import Logo_dark from "../../assets/logo.svg";
import Logo_ligth from "../../assets/logo-light.svg";

import { RxDiscordLogo, RxTwitterLogo, RxInstagramLogo } from 'react-icons/rx'
import { AiOutlineYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="aboutbox">
            <a href="/" >
              <img src={Logo_dark} alt="Logo" className="logo-d footer-logo" />
              <img src={Logo_ligth} alt="Logo" className="logo-l footer-logo" />
            </a>
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join our community</p>
            <div className="icons">
              <a href='https://discord.com/' target='_blank'><RxDiscordLogo  /></a>
              <a href='https://www.youtube.com/channel/UCZBoCfV8u8rBTzVwrTA0KRA' target='_blank' ><AiOutlineYoutube  /></a>
              <a href='https://twitter.com/'  target='_blank' ><RxTwitterLogo /></a>
              <a  href='https://www.instagram.com/kidiyadeep/'  target='_blank'><RxInstagramLogo /></a>
            </div>
          </div>
          <div className="page-box">
            <h2>Explore</h2>
            <a href="">Marketplace</a>
            <a href="">Rankings</a>
            <a href="">Connect a wallet</a>
          </div>
          <div className="mail-box">
            <h2>Join our weekly digest</h2>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
            <div className="input">
              <form action="">
                <input type="email" placeholder="Enter your email here" />
                <button type="subscribe" className="btn">
                <samp>Subscribe</samp>
                </button>
              </form>
            </div>
          </div>
        </div>
          <div className="hr"></div>
          <h2 className="develop"> NFT Market Ⓒ Develop By Deep Kidiya. </h2>
      </div>
    </div>
  );
};

export default Footer;
