import { React } from "react";
import "./App.css";

import { Navbar } from "./components";


const App = () => {

  return (
      <div className="app">
        <div className="gradient__bg">
          <Navbar />
        </div>
      </div>
  );
};

export default App;
