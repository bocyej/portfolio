import { useState } from "react";
import "../css/Header.css";

function Header() {
  function showMobileNavModal() {}

  return (
    <>
      <nav className="limited-width">
        <a href="index.html">
          <img
            id="header-logo"
            src="../assets/photos/logo-light.png"
            alt="Logo"
            className="header-logo"
          />
        </a>
        <a href="#" onClick={showMobileNavModal} className="hamburger">
          <i className="fa fa-bars"></i>
        </a>
        <ul>
          <li>
            <a href="about.html" className="nav-link underline">
              // About
            </a>
          </li>
          <li>
            <a href="projects.html" className="nav-link underline">
              // Projects
            </a>
          </li>
          <li>
            <a href="contact.html" className="nav-link underline">
              // Contact
            </a>
          </li>
        </ul>
        <a id="themeButton">
          <div id="toggleThemeButton">
            <img
              id="toggle-theme-logo"
              src="../assets/photos/light-mode.png"
              alt="Toggle Theme"
              className="toggle-theme-logo"
            />
          </div>
        </a>
      </nav>
    </>
  );
}

export default Header;
