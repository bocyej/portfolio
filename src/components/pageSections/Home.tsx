import GitHubIcon from "../icons/Github";
import InstagramIcon from "../icons/Instagram";
import LinkedinIcon from "../icons/Linkedin";
import SocialMediaButton from "../SocialMediaButton";
import About from "./About";
import Contact from "./Contact";
import TechStack from "./Tech";

const Home = () => {
  return (
    <>
      <div id="home">
        <section className="introduction">
          <div className="limited-width">
            <article className="introduction-description">
              <h1>
                What's Up? I'm <span className="sparkle">Jacob Laurel</span>
              </h1>
              <p>
                I am a Full Stack Developer and have experience in building
                applications and websites using Flutter and web technologies. I
                enjoy coding, so if I think I can create an application, I'll
                try to do it in my free time. :)
              </p>
              <p>
                Interested? Check out more information about me and what I do,
                and you can contact me through my socials.
              </p>
            </article>

            <div className="to-projects">
              <a href="projects.html">
                <p>
                  See what I do!{" "}
                  <i
                    className="fa fa-long-arrow-right"
                    id="arrow"
                    aria-hidden="true"
                  ></i>
                </p>
              </a>
            </div>

            <div className="social-media">
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
      </div>

      <About />

      <TechStack />

      <Contact />
    </>
  );
};

export default Home;
