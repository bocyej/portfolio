import "../../index.css";
import "../../css/Body.css";
import Modal from "../Modal";
import { useState, type ReactNode } from "react";
import { systemImages } from "../projects/ImageData";

interface Props {
  label: string;
  projectTitle: string;
  description: string;
  techStack: ReactNode;
  images: string;
  githubLink: string;
  previewLink: string;
  otherLink: string;
  otherLinkLabel: string;
}

const ProjectRectangle = ({
  label,
  projectTitle,
  description,
  techStack,
  images,
  githubLink,
  previewLink,
  otherLink,
  otherLinkLabel,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <a onClick={openModal}>
        <section className="project-rectangle">{label}</section>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          children={
            <>
              <p className="modal-title">{projectTitle}</p>
              <p className="modal-description">{description}</p>
              <div className="modal-techstack">{techStack}</div>
              <div className="image-gallery">
                {systemImages.map((image) => (
                  <img
                    key={image.id}
                    src={image.src}
                    alt={projectTitle + image.id}
                  ></img>
                ))}
              </div>
              <div className="modal-links">
                <a href={githubLink} target="_blank">
                  GitHub Repository
                </a>
                <a href={previewLink}>Preview Demo</a>
                <a href={otherLink}>{otherLinkLabel}</a>
              </div>
            </>
          }
        ></Modal>
      </a>
    </>
  );
};

export default ProjectRectangle;
