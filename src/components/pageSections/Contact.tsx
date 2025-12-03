import ContactCard from "../contact/ContactCard";
import GitHubIcon from "../icons/Github";
import InstagramIcon from "../icons/Instagram";
import LinkedinIcon from "../icons/Linkedin";

const Contact = () => {
  return (
    <>
      <section>
        <div className="limited-width">
          <section id="title">Contact</section>
          <article id="contact-area">
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
          </article>
        </div>
      </section>
    </>
  );
};

export default Contact;
