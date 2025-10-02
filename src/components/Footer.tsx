import "../css/Footer.css";
import GitHubIcon from "./icons/Github";
import LinkedinIcon from "./icons/Linkedin";
import InstagramIcon from "./icons/Instagram";

function Footer() {
  return (
    <>
      <footer>
        <section>
          <div className="limited-width">
            <p>Copyright&copy; 2025 by Jacob Laurel. All Rights Reserved.</p>
            <div className="footer-social-media">
              <a
                href="https://www.linkedin.com/in/laureljacob/"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
              <a href="https://github.com/bocyej" target="_blank">
                <GitHubIcon />
              </a>
              <a href="https://www.instagram.com/bocyej/" target="_blank">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
