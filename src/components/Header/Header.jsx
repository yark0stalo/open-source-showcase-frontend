import PropTypes from "prop-types";
import "./Header.css";
function Header({ currentProjectName = "Current" }) {
  return (
    <header className="header">
      <h2 className="current-project-name">{currentProjectName}</h2>
    </header>
  );
}

Header.propTypes = {
  currentProjectName: PropTypes.string,
};

export default Header;
