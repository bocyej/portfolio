import BackButton from "../BackButton";
import CollaborationProjectsList from "./CollaborationProjectsList";
import SoloProjectsList from "./SoloProjectsList";
import "../../index.css";
import "../../css/Body.css";

const ViewAllProjects = () => {
  return (
    <>
      <section>
        <BackButton title={""} />
      </section>
      <div id="projects">
        <SoloProjectsList />

        <CollaborationProjectsList />
      </div>
    </>
  );
};

export default ViewAllProjects;
