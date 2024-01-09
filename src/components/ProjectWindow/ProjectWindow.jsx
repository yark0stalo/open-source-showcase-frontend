import PropTypes from "prop-types";
import ImageGallery from "../ImageGallery/ImageGallery";
import "./ProjectWindow.css";
function ProjectWindow({ project = {} }) {
  return (
    <div className="background">
      <div className="project-window">
        <div className="content-container">
          <img className="project-logo" src="" alt="logo" />
          <p className="project-name">{project.name || "Project Name"}</p>
          <p className="project-description">
            {project.description || "Project description"}
          </p>
          <p className="project-description">
            {project.description || "Project description"}
          </p>
          <a className="project-link" href="">
            <div className="project-button"></div>
          </a>
          <a className="github-link" href="">
            <img className="github-button" src="" alt="" />
          </a>
        </div>
        <ImageGallery imagesPath={project.imagesPaths}></ImageGallery>
      </div>
    </div>
  );
}

ProjectWindow.propTypes = {
  project: PropTypes.object,
};
export default ProjectWindow;
