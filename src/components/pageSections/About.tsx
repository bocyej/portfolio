import AboutInfo from "../about/AboutInfo";
import CertificationTimeline from "../about/CertificationTimeline";
import ExperienceTimeline from "../about/ExperienceTimeline";
import Divider from "../Divider";

const About = () => {
  return (
    <>
      <div id="about">
        <AboutInfo title={"Work Experience"} content={<ExperienceTimeline />} />

        <Divider />

        <AboutInfo title={"Certifications"} content={<CertificationTimeline />} />
      </div>
    </>
  );
};

export default About;
