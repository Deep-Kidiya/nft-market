import React from "react";
import "./Magic.css";
import Creater from "../../assets/avetar/magicavatar.svg";

const MagicMashrooms = () => {
  return (
    <div className="magic-section">
      <div className="container">
        <div className="magic-container">
          <div className="creater-name">
            <img className="artist-img" src={Creater} alt="" />
            <h4>Shroomie</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicMashrooms;
