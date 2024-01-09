import PropTypes from "prop-types";
import Gallery from "../Gallery/Gallery";
import "./Main.css";
function Main({ projects = [] }) {
  const bgText = (
    <p className="main-background-text">
      Open-source showcase - This project was created to share useful and
      interesting open-source projects that help to conveniently replace popular
      proprietary programs.
    </p>
  );
  return (
    <main className="main">
      <Gallery projects={projects} />
      {bgText}
    </main>
  );
}

Main.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

export default Main;
