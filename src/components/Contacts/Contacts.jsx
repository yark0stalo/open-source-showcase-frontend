import "./Contacts.css";
import gitLogo from "../../assets/images/github.svg";
import instLogo from "../../assets/images/linkedIn.svg";
import twitterLogo from "../../assets/images/twitter.svg";

function Contacts() {
  return (
    <ul className="contacts-list">
      <li key="contact-github">
        <a href="https://github.com/yark0stalo">
          <img src={gitLogo} alt="github" />
        </a>
      </li>
      <li key="contact-inst">
        <a href="https://www.instagram.com/yark0.stalo/">
          <img src={instLogo} alt="instagram" />
        </a>
      </li>
      <li key="contact-twitter">
        <a href="https://twitter.com/yark0stalo">
          <img src={twitterLogo} alt="twitter" />
        </a>
      </li>
    </ul>
  );
}

export default Contacts;
