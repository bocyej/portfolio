import CollaborationProjectsList from "../projects/CollaborationProjectsList";
import SoloProjectsList from "../projects/SoloProjectsList";

const Projects = () => {
  return (
    <>
      <div id="projects">
        
        <SoloProjectsList />

        <CollaborationProjectsList />
        
      </div>
    </>
  );
};

export default Projects;
