import ExperienceCircle from "./ExperienceCircle";
import "../../index.css";
import "../../css/Body.css";
import BackButton from "../BackButton";

const ExperienceTimeline = () => {
  return (
    <>
      <BackButton title={"Experiences"} />
      <div className="center-horizontally fadeInUp-animation">
        <div></div>
        <section className="background-rectangle">
          <article className="timeline">
            <ul>
              <ExperienceCircle
                company={"Rakso Computer Technology Inc."}
                role={"Intern, Research and Design"}
                duration={"January 2025 - April 2025"}
              />
              <ExperienceCircle
                company={"Serbiz Inc."}
                role={"Contractual, Full-Stack Flutter Developer"}
                duration={"January 2025 - March 2025"}
              />
              <ExperienceCircle
                company={"Freelance Web Developer"}
                role={""}
                duration={"July 2023 - April 2025"}
              />
              <ExperienceCircle
                company={"St. Paul University Manila"}
                role={"Contractual, Full-Stack Web Developer"}
                duration={"April 2023 - May 2024"}
              />
            </ul>
          </article>
        </section>
        <div></div>
      </div>
    </>
  );
};

export default ExperienceTimeline;
