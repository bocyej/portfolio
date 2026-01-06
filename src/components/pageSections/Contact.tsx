import ContactCard from "../contact/ContactCard";
import GitHubIcon from "../icons/Github";
import InstagramIcon from "../icons/Instagram";
import LinkedinIcon from "../icons/Linkedin";
import TextType from "../reactbits/TextType";
import "../../index.css";
import "../../css/Body.css";

const Contact = () => {
  return (
    <>
      <div id="contact" className="fadeInUp-animation">
        <section>
          <section id="title">Contact</section>
          <article id="contact-area">
            <TextType
              text={[
                "Want to create something together?",
                "Connect with me in any of my socials!",
              ]}
            />
            <div className="socials-row">
              <ContactCard
                link={"https://www.github.com/bocyej/"}
                label={"GitHub: "}
                icon={<GitHubIcon />}
                username={"@bocyej"}
              />
              <ContactCard
                link={"https://www.instagram.com/bocyej/"}
                label={"Instagram: "}
                icon={<InstagramIcon />}
                username={"@bocyej"}
              />
              <ContactCard
                link={"https://www.linkedin.com/in/laureljacob/"}
                label={"LinkedIn: "}
                icon={<LinkedinIcon />}
                username={"Jacob Laurel"}
              />
            </div>
            <p className="email-paragraph">
              Or you can email me directly on{" "}
              <span>
                <a href="mailto:jacoblaurel.work@gmail.com" target="_blank">
                  jacoblaurel.work@gmail.com &#8599;
                </a>
              </span>{" "}
              if you have any attachments.
            </p>
            <p className="mobile-copyright">
              &copy; 2025 Jacob Laurel. All Rights Reserved.
            </p>
          </article>
        </section>
      </div>
    </>
  );
};

export default Contact;
