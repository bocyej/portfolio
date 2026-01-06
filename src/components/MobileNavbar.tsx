import mobileToggleLogo from "../assets/photos/light-mode.png";
import { hideMobileNavModal, } from "../utils/script";

const MobileNavBar = () => {
  const toggleMobileModal = () => {
    hideMobileNavModal();
  };

  return (
    <>
      <div id="mobile-nav-modal">
        <div className="modal-content">
          <a href="#" onClick={toggleMobileModal} className="close-icon">
            <i className="fa fa-times"></i>x
          </a>
          <ul>
            <li>
              <a href="#about">// About</a>
            </li>
            <li>
              <a href="#projects">// Projects</a>
            </li>
            <li>
              <a href="#contact">// Contact</a>
            </li>
            <li>
              <div id="toggleThemeButtonModal">
                <img
                  id="toggle-theme-logo"
                  src={mobileToggleLogo}
                  alt="Toggle Theme"
                  className="toggle-theme-logo-modal"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;