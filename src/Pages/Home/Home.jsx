import React from "react";
import { MagicMashrooms } from "../../components";
import { Header, Trendingsection, How, Join } from "../../containers";

const Home = () => {
  return (
    <div>
      <Header />
      <Trendingsection />
      <MagicMashrooms />
      <How />
      <Join />
    </div>
  );
};

export default Home;
