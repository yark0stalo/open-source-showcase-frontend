import ProjectLinks from "./ProjectLinks";
import "./ProjectSection.css";

function ProjectSection() {
  return (
    <section className="section project-section">
      <div className="heading-container">
        <a href="">
          <img className="project-logo" src="" alt="Project Logo" />
        </a>
        <p className="project-name">Project Name</p>
      </div>
      <p className="project-text">Here will be project description</p>
      <div className="img-gallery">
        <div className="gallery-img-container">
          <img src="" alt="img-1" />
        </div>
        <div className="gallery-img-container">
          <img src="" alt="img-1" />
        </div>
        <div className="gallery-img-container">
          <img src="" alt="img-1" />
        </div>
      </div>
      <div className="project-links-container">
        <p className="project-text links-text">
          You can check project using these links:
        </p>
        <ProjectLinks />
      </div>
    </section>
  );
}

export default ProjectSection;
