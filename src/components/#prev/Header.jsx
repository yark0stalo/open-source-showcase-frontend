import Contacts from "./Contacts";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="contacts-container">
        <Contacts />
      </div>
      <p className="current-section">Current</p>
      <select className="section-selector">
        <option value="" key="">
          About
        </option>
        <option value="" key="">
          Balena
        </option>
        <option value="" key="">
          Librera
        </option>
      </select>
    </header>
  );
}

export default Header;
