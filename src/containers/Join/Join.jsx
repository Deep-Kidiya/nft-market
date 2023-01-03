import React from "react";
import "./join.css";

import JoinImg from "../../assets/imgs/join.png";
import JoinImg1 from "../../assets/imgs/join1.png";
import { HiOutlineMail } from "react-icons/hi";

const Join = () => {
  return (
    <div className="join-section">
      <div className="container">
        <div className="join-container">
          <div className="join-img">
            <img className="img-1" src={JoinImg} alt="Join-IMG" />
            <img className="img-2" src={JoinImg1} alt="Join-IMG" />
          </div>
          <div className="join-input">
            <h2>Join our weekly digest</h2>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
            <div className="input">
              <form action="">
                <input type="email" placeholder="Enter your email here" />
                <button type="subscribe" className="btn">
                  <HiOutlineMail /> <samp>Subscribe</samp>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
