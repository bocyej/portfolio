import { useEffect } from "react";
import mobileToggleLogo from "../assets/photos/light-mode.png";
import { hideMobileNavModal, switchTheme } from "../utils/script";
import CloseIcon from "./icons/Close";

const MobileNavBar = () => {
  useEffect(() => {
    switchTheme();
  });

  const handleToggleTheme = () => {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
    switchTheme();
  };

  const toggleMobileModal = () => {
    hideMobileNavModal();
  };

  const scrollToAboutArea = () => {
    const scrollTarget = document.getElementById("about");

    if (scrollTarget) {
      const scrollOffset = scrollTarget.getBoundingClientRect();
      const topElement = scrollOffset.top + window.scrollY;
      const scrollToPosition = topElement - 25;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToContactArea = () => {
    const scrollTarget = document.getElementById("contact");

    if (scrollTarget) {
      const scrollOffset = scrollTarget.getBoundingClientRect();
      const topElement = scrollOffset.top + window.scrollY;
      const scrollToPosition = topElement - 25;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div id="mobile-nav-modal">
        <div className="modal-content">
          <a onClick={toggleMobileModal} className="close-icon">
            <CloseIcon />
          </a>
          <ul>
            <li>
              <a onClick={scrollToAboutArea}>// About</a>
            </li>
            <li>
              <a onClick={scrollToContactArea}>// Contact</a>
            </li>
            <li>
              <a onClick={handleToggleTheme}>
                <div id="toggleThemeButtonModal">
                  <img
                    id="toggle-theme-logo"
                    src={mobileToggleLogo}
                    alt="Toggle Theme"
                    className="toggle-theme-logo-modal"
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;
