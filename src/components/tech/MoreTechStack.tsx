import BackButton from "../BackButton";
import Category from "./Category";
import TechStackCard from "./TechStackCard";
import "../../index.css";
import "../../css/Body.css";

const MoreTechStack = () => {
  return (
    <>
      <BackButton title={"Tech Stack"} />
      <p className="short-description">These are the tech stuff that I've used before. <span>**These may or may not be used everyday** </span></p>
      <section className="tech-background-rectangle">
        <div id="techstack">
          <Category
            label={"Frontend"}
            cards={
              <>
                <TechStackCard label={"JavaScript"} />
                <TechStackCard label={"TypeScript"} />
                <TechStackCard label={"React"} />
                <TechStackCard label={"Angular"} />
                <TechStackCard label={"CSS"} />
                <TechStackCard label={"LESS CSS"} />
                <TechStackCard label={"SASS CSS"} />
                <TechStackCard label={"Bootstrap"} />
                <TechStackCard label={"Vite"} />
                <TechStackCard label={"Prettier"} />
              </>
            }
          />
          <Category
            label={"Backend"}
            cards={
              <>
                <TechStackCard label={"Node.js"} />
                <TechStackCard label={"PHP"} />
                <TechStackCard label={"Firebase"} />
                <TechStackCard label={"Supabase"} />
                <TechStackCard label={"Python"} />
                <TechStackCard label={"Java"} />
                <TechStackCard label={"Spring Boot"} />
                <TechStackCard label={"Laravel"} />
                <TechStackCard label={"PostgreSQL"} />
                <TechStackCard label={"MySQL"} />
                <TechStackCard label={"MongoDB"} />
                <TechStackCard label={"OAuth"} />
                <TechStackCard label={"REST"} />
              </>
            }
          />
          <Category
            label={"DevOps & Cloud"}
            cards={
              <>
                <TechStackCard label={"Docker"} />
                <TechStackCard label={"GitHub Actions"} />
                <TechStackCard label={"Google Cloud"} />
                <TechStackCard label={"Azure"} />
              </>
            }
          />
          <Category
            label={"CMS & No-Code"}
            cards={
              <>
                <TechStackCard label={"WordPress"} />
                <TechStackCard label={"Microsoft Power Platform"} />
              </>
            }
          />
          <Category
            label={"Dev Tools"}
            cards={
              <>
                <TechStackCard label={"Git"} />
                <TechStackCard label={"GitHub"} />
                <TechStackCard label={"VS Code"} />
                <TechStackCard label={"Docker"} />
                <TechStackCard label={"Postman"} />
                <TechStackCard label={"JIRA"} />
                <TechStackCard label={"Trello"} />
                <TechStackCard label={"Slack"} />
                <TechStackCard label={"Discord"} />
                <TechStackCard label={"Microsoft Teams"} />
                <TechStackCard label={"Google Meet"} />
              </>
            }
          />
        </div>
      </section>
    </>
  );
};

export default MoreTechStack;
