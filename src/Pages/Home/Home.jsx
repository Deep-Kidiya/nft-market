import React from "react";
import { MagicMashrooms, Discover } from "../../components";
import { Header, Trendingsection, How, Join } from "../../containers";

const Home = () => {
  return (
    <div>
      <Header />
      <Discover />
      <MagicMashrooms />
      <How />
      <Join />
    </div>
  );
};

export default Home;
