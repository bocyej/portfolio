import "../css/Footer.css";
import GitHubIcon from "./icons/Github";
import LinkedinIcon from "./icons/Linkedin";
import InstagramIcon from "./icons/Instagram";
import Copyright from "./Copyright";
import { useEffect } from "react";
import { switchTheme } from "../utils/script";
import SocialMediaButton from "./SocialMediaButton";

function Footer() {
  useEffect(() => {
    switchTheme();
  });

  return (
    <>
      <footer  className="fadeInUp-animation">
        <section>
          <div>
            <Copyright />
            <div className="footer-social-media">
              <SocialMediaButton
                link="https://www.linkedin.com/in/laureljacob/"
                icon={<LinkedinIcon />}
              />
              <SocialMediaButton
                link="https://github.com/bocyej/"
                icon={<GitHubIcon />}
              />
              <SocialMediaButton
                link="https://www.instagram.com/bocyej/"
                icon={<InstagramIcon />}
              />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
