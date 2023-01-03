import React from "react";
import './How.css'

import Wallet from "../../assets/imgs/wallet.svg";
import Collection from "../../assets/imgs/collection.svg";
import Earning from "../../assets/imgs/earning.svg";

const How = () => {
  return (
    <div className="how-section">
      <div className="container">
        <div className="how-container">
          <h2 className="section-title">How it works</h2>
          <p className="section-pera">Find out how to get started</p>
          <div className="cards">
            <div className="card">
              <div className="card-img">
              <img src={Wallet} alt="" />
              </div>
              <div className="card-text">
                <h2 className="card-title">Setup Your wallet</h2>
                <p className="card-pera">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
              <img src={Collection} alt="" />
              </div>
              <div className="card-text">
                <h2 className="card-title">Create Collection</h2>
                <p className="card-pera">Upload your work and setup your collection. Add a description, social links and floor price.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
              <img src={Earning} alt="" />
              </div>
              <div className="card-text">
                <h2 className="card-title">Start Earning</h2>
                <p className="card-pera">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
