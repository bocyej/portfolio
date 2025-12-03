import AboutInfo from "../about/AboutInfo";
import TechStackCard from "../tech/TechStackCard";
import TechStackSummary from "../tech/TechStackSummary";

const Tech = () => {
  return (
    <>
      <div id="tech">
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
