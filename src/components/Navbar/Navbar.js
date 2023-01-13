import React, { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import "./Nav.css";

const Nav = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className={`Nav ${theme}`}>
      <div className="navbar">
        <h1 className="header">Where in the world?</h1>
        <div className="icons">
          <CiDark className="icon-toggler" onClick={toggleTheme} />
          <p className="nav-para">Dark Mode</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
