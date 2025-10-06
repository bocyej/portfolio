import "../css/Header.css";
import headerLogo from "../assets/photos/logo-light.png";
import toggleLogo from "../assets/photos/light-mode.png";
import { useEffect } from "react";
import { switchTheme, showMobileNavModal } from "../utils/script";

function Header() {
  useEffect(() => {
    switchTheme();
  });

  const handleToggleTheme = () => {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
    switchTheme();
  };

  const toggleMobileModal = () => {
    showMobileNavModal();
  };

  return (
    <>
      <header>
        <nav className="limited-width">
          <a href="index.html">
            <img
              id="header-logo"
              src={headerLogo}
              alt="Logo"
              className="header-logo"
            />
          </a>
          <a
            onClick={toggleMobileModal}
            className="hamburger"
            id="hamburger-icon"
          >
            <i className="fa fa-bars"></i>
            []
          </a>
          <ul>
            <li>
              <a href="#about" className="nav-link underline">
                // About
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link underline">
                // Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link underline">
                // Contact
              </a>
            </li>
          </ul>
          <a id="themeButton" onClick={handleToggleTheme}>
            <div id="toggleThemeButton">
              <img
                id="toggle-theme-logo"
                src={toggleLogo}
                alt="Toggle Theme"
                className="toggle-theme-logo"
              />
            </div>
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
