import React, { useEffect, useRef, useState } from "react";
import "./Magic.css";
import Creater from "../../assets/avetar/magicavatar.svg";

import { AiOutlineEye } from "react-icons/ai";

const MagicMashrooms = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("feb 12, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24 ));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / (1000));

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="magic-section">
      <div className="container">
        <div className="magic-container">
          <div className="magic-text">
            <div className="creater-name">
              <img className="artist-img" src={Creater} alt="" />
              <h4>Shroomie</h4>
            </div>
            <h2>Magic Mashrooms</h2>
            <div className="magic-timer mobile-timer">
            <h3>Auction ends in:</h3>
            <div className="magic-clock">
              <div className="clock-Hours">
                <p className="numbers">{timerDays}</p>
                <p>Days</p>
              </div>
              <div className="clock-Hours">
                <p className="numbers">{timerHours}</p>
                <p>Hours</p>
              </div>
              <div className="clock-Hours">
                <p className="numbers">{timerMinutes}</p>
                <p>Minutes</p>
              </div>
              <div className="clock-seconds">
                <p className="numbers">{timerSeconds}</p>
                <p>Seconds</p>
              </div>
            </div>
          </div>
            <button className="btn">
              <AiOutlineEye /> <span>See NFT</span>
            </button>
          </div>
          <div className="magic-timer timer">
            <h3>Auction ends in:</h3>
            <div className="magic-clock">
              <div className="clock-Hours">
                <p className="numbers">{timerDays}</p>
                <p>Days</p>
              </div>
              <div className="clock-Hours">
                <p className="numbers">{timerHours}</p>
                <p>Hours</p>
              </div>
              <div className="clock-Hours">
                <p className="numbers">{timerMinutes}</p>
                <p>Minutes</p>
              </div>
              <div className="clock-seconds">
                <p className="numbers">{timerSeconds}</p>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicMashrooms;
