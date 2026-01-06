import AboutInfo from "../about/AboutInfo";
import TechStackCard from "../tech/TechStackCard";
import TechStackSummary from "../tech/TechStackSummary";
import "../../index.css";
import "../../css/Body.css";

const Tech = () => {
  return (
    <>
      <div id="tech" className="fadeInUp-animation">
        <AboutInfo
          title={"Tech Stack"}
          content={<TechStackSummary />}
          additionalClass="stack"
        />

        <AboutInfo
          title={"Recent Projects"}
          content={<TechStackCard label="lol" />}
          additionalClass="recent-projects"
        />
      </div>
    </>
  );
};

export default Tech;
