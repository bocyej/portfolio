import AboutInfo from "../about/AboutInfo";
import TechStackSummary from "../tech/TechStackSummary";
import "../../index.css";
import "../../css/Body.css";
import ProjectRectangle from "../projects/ProjectRectangle";
import TechStackCard from "../tech/TechStackCard";

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
          content={
            <>
              <ProjectRectangle
                label="Vital Monitor"
                projectTitle={"Vital Monitor"}
                description={
                  "A straightforward, offline-ready application that focuses on tracking your vitals and generate shareable summaries that you can forward to your doctor."
                }
                techStack={
                  <>
                    <TechStackCard label={"Flutter"} />
                    <TechStackCard label={"Supabase"} />
                    <TechStackCard label={"Android"} />
                    <TechStackCard label={"iOS"} />
                  </>
                }
                images={""}
                githubLink={""}
                previewLink={""}
                otherLink={""}
                otherLinkLabel={""}
              />
              <ProjectRectangle
                label="Arkibo"
                projectTitle={"Arkibo"}
                description={
                  "Social networking platform with modern user interface."
                }
                techStack={
                  <>
                    <TechStackCard label={"Flutter"} />
                    <TechStackCard label={"Supabase"} />
                    <TechStackCard label={"Android"} />
                    <TechStackCard label={"iOS"} />
                  </>
                }
                images={""}
                githubLink={""}
                previewLink={""}
                otherLink={""}
                otherLinkLabel={""}
              />
              <ProjectRectangle
                label="Movie Website"
                projectTitle={""}
                description={""}
                techStack={
                  <>
                    <TechStackCard label={"HTML"} />
                    <TechStackCard label={"CSS"} />
                    <TechStackCard label={"JavaScript"} />
                    <TechStackCard label={"React"} />
                    <TechStackCard label={"Vite"} />
                  </>
                }
                images={""}
                githubLink={"https://github.com/bocyej/react-movie"}
                previewLink={""}
                otherLink={""}
                otherLinkLabel={""}
              />
              <ProjectRectangle
                label="Automated Login and Registration"
                projectTitle={"Automated Login and Registration"}
                description={
                  "An automated testing workflow that validates Facebook login and account creation."
                }
                techStack={
                  <>
                    <TechStackCard label={"Robot Framework"} />
                    <TechStackCard label={"Selenium"} />
                    <TechStackCard label={"Python"} />
                  </>
                }
                images={""}
                githubLink={
                  "https://github.com/bocyej/facebook-sign-up-automation"
                }
                previewLink={""}
                otherLink={""}
                otherLinkLabel={""}
              />
              <ProjectRectangle
                label="Silid: Securing Rooms for Individuals"
                projectTitle={"Silid: Securing Rooms for Individuals"}
                description={
                  "A rental booking and reservation application for students and professionals, accessible for both mobile and web."
                }
                techStack={
                  <>
                    <TechStackCard label={"Flutter"} />
                    <TechStackCard label={"Flutter Web"} />
                    <TechStackCard label={"Firebase"} />
                    <TechStackCard label={"Cloud"} />
                    <TechStackCard label={"Android"} />
                    <TechStackCard label={"iOS"} />
                    <TechStackCard label={"Web"} />
                  </>
                }
                images={""}
                githubLink={""}
                previewLink={""}
                otherLink={""}
                otherLinkLabel={""}
              />
              <ProjectRectangle
                label="Prioritize"
                projectTitle={"Prioritize"}
                description={
                  "Time management application that helps you maximize your productivity. My Google Gemini Competition entry as a solo developer."
                }
                techStack={
                  <>
                    <TechStackCard label={"Flutter"} />
                    <TechStackCard label={"Firebase"} />
                    <TechStackCard label={"Gemini"} />
                    <TechStackCard label={"AI"} />
                    <TechStackCard label={"Cloud"} />
                  </>
                }
                images={""}
                githubLink={"https://github.com/bocyej/prioritize"}
                previewLink={"https://youtu.be/ueek2k6JRZI?si=e1bnNuZVjPBW-BWK"}
                otherLink={
                  "https://ai.google.dev/competition/projects/prioritize"
                }
                otherLinkLabel={"Submission"}
              />
            </>
          }
          additionalClass="recent-projects"
        />
      </div>
    </>
  );
};

export default Tech;
