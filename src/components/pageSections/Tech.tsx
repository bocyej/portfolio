import AboutInfo from "../about/AboutInfo";
import TechStackCard from "../about/TechStackCard";

const Tech = () => {
  return (
    <>
      <div id="tech">
        <AboutInfo
          title={"Tech Stack"}
          content={<TechStackCard label="lol" />}
          additionalClass=""
        />

        <AboutInfo
          title={"Recent Projects"}
          content={<TechStackCard label="lol" />}
          additionalClass=""
        />
      </div>
    </>
  );
};

export default Tech;
