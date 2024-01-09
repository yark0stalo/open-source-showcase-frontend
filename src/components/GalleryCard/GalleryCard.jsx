import PropTypes from "prop-types";
import { useState } from "react";
import "./GalleryCard.css";
import react from "../../assets/react.svg";
function GalleryCard({ project = {}, isActive }) {
  const [active, setActive] = useState(isActive);
  return (
    <li key={project.name} className={`gallery-card ${active ? "active" : ""}`}>
      <img className="card-logo" src={react} alt="logo" />
      <h3 className="card-project-name">{project.name || "Project name"}</h3>
      <p className="card-project-description">Project description</p>
      <div className="card-button">
        <p className="card-button-text">More</p>
      </div>
    </li>
  );
}

GalleryCard.propTypes = {
  project: PropTypes.object,
  isActive: PropTypes.bool,
};

export default GalleryCard;
