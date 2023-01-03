import { React } from "react";
import "./App.css";

import { Home } from "./Pages";
import { Navbar, Footer } from "./components";


const App = () => {

  return (
      <div className="app">
        <div className="gradient__bg">
          <Navbar />
          <Home />
          <Footer />

        </div>
      </div>
  );
};

export default App;
