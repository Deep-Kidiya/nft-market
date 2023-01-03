import React from "react";
import { useSpring, animated } from "react-spring";
import "./header.css";
import Cardimg from "../../assets/Image 1.png";
import Creater from "../../assets/avetar/Avatar.svg";
import { IoRocketOutline } from "react-icons/io5";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-section">
          <div className="header-text">
            <h1 className="header-title">
              Discover digital art & Collect NFTs
            </h1>
            <p className="head-pera">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <div className="usear-section">
              <button className="btn">
                <IoRocketOutline />
                <span>Get Started</span>
              </button>
              <div className="usear-numbers">
                <div>
                  <h2>
                    {" "}
                    <Number n={240} />
                    k+{" "}
                  </h2>
                  <h2 className="number-text">Total Sale</h2>
                </div>
                <div>
                  <h2>
                    <Number n={100} />
                    k+{" "}
                  </h2>
                  <h2 className="number-text">Auctions</h2>
                </div>
                <div>
                  <h2>
                    <Number n={240} />
                    k+{" "}
                  </h2>
                  <h2 className="number-text">Artists</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="header-card">
            <div className="head-card">
              <img className="art-img" src={Cardimg} alt="" />
              <div className="card-text">
                <h4 className="card-name">Space Walking</h4>
                <div className="creater-name">
                  <img className="artist-img" src={Creater} alt="" />
                  <h4>Animakid</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-section">
            <button className="btn">
              <IoRocketOutline />
              <span>Get Started</span>
            </button>
            <div className="usear-numbers">
              <div>
                <h2>
                  <Number n={240} />
                  k+{" "}
                </h2>
                <h2 className="number-text">Total Sale</h2>
              </div>
              <div>
                <h2> <h2><Number n={100} />k+ </h2>k+ </h2>
                <h2 className="number-text">Auctions</h2>
              </div>
              <div>
                <h2> <h2><Number n={240} />k+ </h2>k+ </h2>
                <h2 className="number-text">Artists</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
