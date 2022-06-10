import React, { useState } from "react";
import logo from "../../assets/images/logo512.png";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

function Header() {
  const [theme, setTheme] = useState(false);
  const currentTheme = localStorage.getItem("theme");

  const handleTheme = () => {
    setTheme(!theme);
    localStorage.setItem("theme", theme);
  };

  if (currentTheme === "true") {
    document.body.classList.add("theme-switch");
  } else if (currentTheme === "false") {
    document.body.classList.remove("theme-switch");
  }

  return (
    <header className="header">
      <div className="container">
        <img src={logo} className="logo" alt="logo" />

        <button className="btn_theme" onClick={handleTheme}>
          {document.body.classList.contains("theme-switch") ? (
            <>
              <BsFillMoonFill className="btn_theme-icon" />
              <span>dark mode</span>
            </>
          ) : (
            <>
              <BsSunFill className="btn_theme-icon" />
              <span>light mode</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
