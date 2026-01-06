import type { ReactNode } from "react";

interface Props {
  image: string;
  cardTitle: string;
  description: string;
  link: string;
  toolsOrLanguage: ReactNode;
}

const ProjectCard = ({
  image,
  cardTitle,
  description,
  link,
  toolsOrLanguage,
}: Props) => {
  return (
    <>
      <div className="project-card">
        <div className="default-view">
          <img
            src={image}
            alt="Project Preview Image"
            className="project-preview-image"
          />
          <h2 className="project-title card-text">{cardTitle}</h2>
        </div>
        <a href={link} target="_blank">
          <div className="card-hover">
            <h3 className="card-text">{cardTitle}</h3>
            <p className="card-text">{description}</p>
            <ul className="tools-or-languages-list">
                {toolsOrLanguage}
            </ul>
          </div>
        </a>
      </div>
    </>
  );
};

export default ProjectCard;
