import { React, createContext, useState } from "react";
import "./App.css";

import { Navbar } from "./components";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="app" id={theme}>
        <div className="gradient__bg">
          <Navbar />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
