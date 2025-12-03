import AboutInfo from "../about/AboutInfo";
import CertificationTimeline from "../about/CertificationTimeline";
import ExperienceTimeline from "../about/ExperienceTimeline";

const About = () => {
  return (
    <>
      <div id="about">
        <AboutInfo
          title={"Work Experience"}
          content={<ExperienceTimeline />}
          additionalClass="work-experience"
        />

        <AboutInfo
          title={"Certifications"}
          content={<CertificationTimeline />}
          additionalClass="certifications"
        />
      </div>
    </>
  );
};

export default About;
