import GitHubIcon from "../icons/Github";
import InstagramIcon from "../icons/Instagram";
import LinkedinIcon from "../icons/Linkedin";
import SocialMediaButton from "../SocialMediaButton";
import About from "./About";
import Contact from "./Contact";
import TechStack from "./Tech";
import "../../index.css";
import "../../css/Body.css";
import ArrowRight from "../icons/ArrowRight";

const scrollToTargetArea = () => {
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

const Home = () => {
  return (
    <>
      <div id="home">
        <section className="introduction fadeInUp-animation">
          <div>
            <article className="introduction-description">
              <div className="greeting">
                What's Up? I'm <span className="sparkle">Jacob Laurel</span>
              </div>
              <p>
                I am a Full Stack Developer and have experience in building
                applications and websites using Flutter and web technologies. I
                enjoy coding, so if I think I can create an application, I'll
                try to do it in my free time. :)
              </p>
              <p>
                Want to know more? Check out the information about me and what I
                do below! And contact me through my socials.
              </p>
            </article>

            <div className="to-projects">
              <a onClick={scrollToTargetArea}>
                <p>
                  See what I do!{" "}
                  <ArrowRight />
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
