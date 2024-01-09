import Contacts from "./Contacts";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        If you want to share interesting proejcts please contact me
      </p>
      <div className="footer-contacts">
        <Contacts />
      </div>
    </footer>
  );
}

export default Footer;
