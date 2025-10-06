import ProjectCard from "./ProjectCard";
import ToolsOrLanguage from "./ToolsOrLanguage";

import ingatThumbnail from "../../assets/photos/ingat-thumbnail.png";
import innotrashThumbnail from "../../assets/photos/innotrash-thumbnail.png";
import liamsThumbnail from "../../assets/photos/liams-thumbnail.png";
import mkmsThumbnail from "../../assets/photos/mkms-thumnail.png";
import payoThumbnail from "../../assets/photos/payo-thumbnail.png";
import silidThumbnail from "../../assets/photos/silid-thumbnail.png";


const CollaborationProjectsList = () => {
  return (
    <>
      <section>
        <div className="limited-width">
          <section id="title" className="collaboration">
            Collaboration Projects
          </section>
          <article id="projects-list">
            <ul>
              <ProjectCard
                image={silidThumbnail}
                cardTitle={"Silid: Securing Rooms for Individuals"}
                description={
                  "A rental booking and reservation application for students and professionals, accessible for both mobile and web."
                }
                link={"#"}
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"Flutter"} />
                    <ToolsOrLanguage toolsOrLanguage={"Flutter Web"} />
                    <ToolsOrLanguage toolsOrLanguage={"Firebase"} />
                    <ToolsOrLanguage toolsOrLanguage={"Cloud"} />
                    <ToolsOrLanguage toolsOrLanguage={"Android"} />
                    <ToolsOrLanguage toolsOrLanguage={"iOS"} />
                    <ToolsOrLanguage toolsOrLanguage={"Web"} />
                  </>
                }
              />
              <ProjectCard
                image={payoThumbnail}
                cardTitle={"Payo"}
                description={
                  "A university guidance counseling scheduling appointment application."
                }
                link={"#"}
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"Flutter"} />
                    <ToolsOrLanguage toolsOrLanguage={"Firebase"} />
                    <ToolsOrLanguage toolsOrLanguage={"Cloud"} />
                    <ToolsOrLanguage toolsOrLanguage={"Android"} />
                    <ToolsOrLanguage toolsOrLanguage={"iOS"} />
                  </>
                }
              />
              <ProjectCard
                image={ingatThumbnail}
                cardTitle={"INGAT"}
                description={
                  "This project aims to revolutionize community safety by providing crime data location and date and safety alerts through a user-friendly mobile application."
                }
                link={
                  "https://crystalline-dewberry-1d8.notion.site/INGAT-The-Future-of-Crime-Awareness-Technology-and-Community-Safety-1ade0822cce34457b0fa9f0cba56a9e0"
                }
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"Flutter"} />
                    <ToolsOrLanguage toolsOrLanguage={"Firebase"} />
                    <ToolsOrLanguage toolsOrLanguage={"Google Maps"} />
                    <ToolsOrLanguage toolsOrLanguage={"Cloud"} />
                    <ToolsOrLanguage toolsOrLanguage={"Notion"} />
                  </>
                }
              />
              <ProjectCard
                image={mkmsThumbnail}
                cardTitle={"Multimedia Keys Monitoring System (MKMS)"}
                description={
                  "Ease of use the borrowing and returning of multimedia keys in the ICT of the university."
                }
                link={
                  "https://www.facebook.com/spumanila/posts/look-students-faculty-and-staff-engaged-in-their-institutional-friday-mass-on-ma/802490218584559/"
                }
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"HTML"} />
                    <ToolsOrLanguage toolsOrLanguage={"CSS"} />
                    <ToolsOrLanguage toolsOrLanguage={"Java Springboot"} />
                    <ToolsOrLanguage toolsOrLanguage={"MySQL"} />
                    <ToolsOrLanguage toolsOrLanguage={"Notion"} />
                  </>
                }
              />
              <ProjectCard
                image={liamsThumbnail}
                cardTitle={"Library Attendance Monitoring System (LiAMS)"}
                description={
                  "Digitalized the monitoring attendance of the university library visitors."
                }
                link={
                  "https://www.facebook.com/spumanila/posts/look-students-faculty-and-staff-engaged-in-their-institutional-friday-mass-on-ma/802490218584559/"
                }
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"HTML"} />
                    <ToolsOrLanguage toolsOrLanguage={"CSS"} />
                    <ToolsOrLanguage toolsOrLanguage={"Bootstrap"} />
                    <ToolsOrLanguage toolsOrLanguage={"PHP"} />
                    <ToolsOrLanguage toolsOrLanguage={"MySQL"} />
                  </>
                }
              />
              <ProjectCard
                image={innotrashThumbnail}
                cardTitle={"Project: iNNOTRASH"}
                description={
                  "iNNOTRASH is a solution that would motivate people to throw their trash properly and would later lessen the land pollution while earning points which they can use on their next purchases."
                }
                link={"https://www.youtube.com/watch?v=aQQebqGWRwo"}
                toolsOrLanguage={
                  <>
                    <ToolsOrLanguage toolsOrLanguage={"Python"} />
                    <ToolsOrLanguage toolsOrLanguage={"Tensorflow"} />
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

export default CollaborationProjectsList;
