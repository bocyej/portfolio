import CollaborationProjectsList from "./CollaborationProjectsList";
import SoloProjectsList from "./SoloProjectsList";

const ViewAllProjects = () => {
  return (
    <>
      <div id="projects">
        
        <SoloProjectsList />

        <CollaborationProjectsList />
        
      </div>
    </>
  );
};

export default ViewAllProjects;
