import gitLogo from "../assets/images/github-project.svg";
import webLogo from "../assets/images/web.svg";
import downloadLogo from "../assets/images/download.svg";

import "./ProjectLinks.css";

function ProjectLinks() {
  return (
    <ul className="project-links-list">
      <li key="project-git">
        <a href="https://github.com/yark0stalo">
          <img src={gitLogo} alt="github" />
        </a>
      </li>
      <li key="project-page">
        <a href="https://www.instagram.com/yark0.stalo/">
          <img src={webLogo} alt="instagram" />
        </a>
      </li>
      <li key="project-download">
        <a href="https://twitter.com/yark0stalo">
          <img src={downloadLogo} alt="twitter" />
        </a>
      </li>
    </ul>
  );
}

export default ProjectLinks;
