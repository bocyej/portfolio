import "../css/Header.css";
import headerLogo from "../assets/photos/logo-light.png";
import toggleLogo from "../assets/photos/light-mode.png";
import { useEffect } from "react";
import { switchTheme, showMobileNavModal } from "../utils/script";
import MenuIcon from "./icons/Menu";
import { Link } from "react-router-dom";

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
        <nav>
          <Link to="/">
            <img
              id="header-logo"
              src={headerLogo}
              alt="Logo"
              className="header-logo"
            />
          </Link>
          <a
            onClick={toggleMobileModal}
            className="hamburger"
            id="hamburger-icon"
          >
            <MenuIcon />
          </a>
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
