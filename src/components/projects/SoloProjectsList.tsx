import ProjectCard from "./ProjectCard";
import ToolsOrLanguage from "./ToolsOrLanguage";

import arkiboThumbnail from "../../assets/photos/arkibo-thumbnail.png";
import facebookMockupThumbnail from "../../assets/photos/facebook-mockup-thumbnail.png";
import lobeThumbnail from "../../assets/photos/lobe-website-thumbnail.png";
import prioritizeThumbnail from "../../assets/photos/prioritize-thumbnail.png";
import twitterMockupThumbnail from "../../assets/photos/twitter-mockup-thumbnail.png";
import vitalMonitorThumbnail from "../../assets/photos/vital-monitor-thumbnail.png"
import weatherAppThumbnail from "../../assets/photos/weather-app-thumbnail.png";
import youtubeMockupThumbnail from "../../assets/photos/youtube-mockup-thumbnail.png";

const SoloProjectsList = () => {
  return (
    <>
      <section>
        <div className="limited-width">
          <section id="title">Solo Projects</section>
          <article id="projects-list">
            <ul>
              <ProjectCard
                image={vitalMonitorThumbnail}
                cardTitle={"Vital Monitor"}
                description={
                  "A straightforward, offline-ready application that focuses on tracking your vitals and generate shareable summaries that you can forward to your doctor."
                }
                link={"#"}
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"Flutter"} />
                    <ToolsOrLanguage toolsOrLanguage={"Supabase"} />
                    <ToolsOrLanguage toolsOrLanguage={"Android"} />
                    <ToolsOrLanguage toolsOrLanguage={"iOS"} />
                  </>
                }
              />
              <ProjectCard
                image={arkiboThumbnail}
                cardTitle={"Arkibo"}
                description={
                  "Social networking platform with modern user interface."
                }
                link={"#"}
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"Flutter"} />
                    <ToolsOrLanguage toolsOrLanguage={"Supabase"} />
                    <ToolsOrLanguage toolsOrLanguage={"Android"} />
                    <ToolsOrLanguage toolsOrLanguage={"iOS"} />
                  </>
                }
              />
              <ProjectCard
                image={prioritizeThumbnail}
                cardTitle={"Prioritize"}
                description={
                  "Time management application that helps you maximize your productivity. My Google Gemini Competition entry as a solo developer."
                }
                link={"https://github.com/bocyej/prioritize"}
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"Flutter"} />
                    <ToolsOrLanguage toolsOrLanguage={"Firebase"} />
                    <ToolsOrLanguage toolsOrLanguage={"Gemini"} />
                    <ToolsOrLanguage toolsOrLanguage={"AI"} />
                    <ToolsOrLanguage toolsOrLanguage={"Cloud"} />
                  </>
                }
              />
              <ProjectCard
                image={lobeThumbnail}
                cardTitle={"Lobe Website Mockup"}
                description={
                  "Lobe Website Mockup using HTML and CSS. The repository is not the official version and was created for learning purposes only."
                }
                link={"https://github.com/bocyej/Lobe-Website-Mockup"}
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"HTML"} />
                    <ToolsOrLanguage toolsOrLanguage={"CSS"} />
                  </>
                }
              />
              <ProjectCard
                image={weatherAppThumbnail}
                cardTitle={"Weather App UI Mockup"}
                description={
                  "Huawei Weather App mobile UI using Flutter. Created for learning purposes only."
                }
                link={"https://github.com/bocyej/Weather-App-UI-Mockup"}
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"Flutter"} />
                    <ToolsOrLanguage toolsOrLanguage={"Mobile"} />
                  </>
                }
              />
              <ProjectCard
                image={youtubeMockupThumbnail}
                cardTitle={"YouTube Mobile UI Mockup"}
                description={
                  "YouTube mobile UI (dark theme) using flutter. Created for learning purposes only."
                }
                link={"https://github.com/bocyej/YouTube-Mobile-UI-Mockup"}
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"Flutter"} />
                    <ToolsOrLanguage toolsOrLanguage={"Mobile"} />
                  </>
                }
              />
              <ProjectCard
                image={facebookMockupThumbnail}
                cardTitle={"Facebook Mobile UI Mockup"}
                description={
                  "Facebook mobile UI using flutter. Created for learning purposes only."
                }
                link={"https://github.com/bocyej/Facebook-Mobile-UI-Mockup"}
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"Flutter"} />
                    <ToolsOrLanguage toolsOrLanguage={"Mobile"} />
                  </>
                }
              />
              <ProjectCard
                image={twitterMockupThumbnail}
                cardTitle={"Twitter Mobile UI Mockup"}
                description={
                  "Facebook mobile UI using flutter. Created for learning purposes only."
                }
                link={"https://github.com/bocyej/Twitter-Mobile-UI-Mockup"}
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"Flutter"} />
                    <ToolsOrLanguage toolsOrLanguage={"Mobile"} />
                  </>
                }
              />
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default SoloProjectsList;
