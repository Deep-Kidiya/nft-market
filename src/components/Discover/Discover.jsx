import React from "react";
import "./discover.css";

import { AiOutlineEye } from "react-icons/ai";

import img1 from "../../assets/imgs/img1.png";
import img2 from "../../assets/imgs/Image2.png";
import img3 from "../../assets/imgs/Image3.png";
import Avetar from "../../assets/avetar/Avatar1.svg";
import Avetar2 from "../../assets/avetar/Asset2.svg";
import Avetar3 from "../../assets/avetar/Avatar3.svg";

const Discover = () => {
  return (
    <div className="discover">
      <div className="container">
        <div className="discover-containr">
          <div className="title">
            <div className="title-section">
              <h2 className="section-title">Discover More NFTs</h2>
              <p className="section-pera">Explore new trending NFTs</p>
            </div>
            <button className="section-btn title-1">
              <AiOutlineEye /> <span>See All</span>{" "}
            </button>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-img">
                <img src={img1} alt="" />
              </div>
              <div className="card-content">
                <h2 className="card-title">Distant Galaxy</h2>
                <div className="creater-containr">
                  <img src={Avetar} alt="" />
                  <h2>MoonDancer</h2>
                </div>
                <div className="price">
                  <div className="low-price">
                    <h3>Price</h3>
                    <h2 className="card-price">1.63 ETH</h2>
                  </div>
                  <div className="low-price">
                    <h3>Highest Bid</h3>
                    <h2 className="card-price">0.33 wETH</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={img2} alt="" />
              </div>
              <div className="card-content">
                <h2 className="card-title">Life On Edena</h2>
                <div className="creater-containr">
                  <img src={Avetar2} alt="" />
                  <h2 className="card-creater">NebulaKid</h2>
                </div>
                <div className="price">
                  <div className="low-price">
                    <h3>Price</h3>
                    <h2 className="card-price">1.63 ETH</h2>
                  </div>
                  <div className="low-price">
                    <h3>Highest Bid</h3>
                    <h2 className="card-price">0.33 wETH</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={img3} alt="" />
              </div>
              <div className="card-content">
              <h2 className="card-title">AstroFiction</h2>
              <div className="creater-containr">
                <img src={Avetar3} alt="" />
                <h2 className="card-creater">Spaceone</h2>
              </div>
              <div className="price">
                <div className="low-price">
                  <h3>Price</h3>
                  <h2 className="card-price">1.63 ETH</h2>
                </div>
                <div className="low-price">
                  <h3>Highest Bid</h3>
                  <h2 className="card-price">0.33 wETH</h2>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="title">
            <button className="section-btn title-2">
              <AiOutlineEye /> <span>See All</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
