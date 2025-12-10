import AboutInfo from "../about/AboutInfo";
import CertificationTimelineSummary from "../about/CertificationTimelineSummary";
import ExperienceTimelineSummary from "../about/ExperienceTimelineSummary"
import "../../index.css";
import "../../css/Body.css";;

const About = () => {
  return (
    <>
      <div id="about">
        <AboutInfo
          title={"Work Experience"}
          content={<ExperienceTimelineSummary />}
          additionalClass="work-experience"
        />

        <AboutInfo
          title={"Certifications"}
          content={<CertificationTimelineSummary />}
          additionalClass="certifications"
        />
      </div>
    </>
  );
};

export default About;
