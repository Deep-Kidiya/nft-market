import { React } from "react";
import "./App.css";

import { Home } from "./Pages";
import { Navbar } from "./components";


const App = () => {

  return (
      <div className="app">
        <div className="gradient__bg">
          <Navbar />
          <Home />

        </div>
      </div>
  );
};

export default App;
