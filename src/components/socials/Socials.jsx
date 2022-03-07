import "./socials.css";
import twitter from "./icons/twitter.svg";
import linkedin from "./icons/linkedin.svg";
import github from "./icons/github.svg";
import whatsapp from "./icons/whatsapp.svg";

export const Socials = () => {
  return (
    <section className="socials-section">
      <div className="socials-text-section">
        <h2>Check out my socials</h2>
        <p>Feel free to send me a message, I'm always open to new ideas.</p>
      </div>
      <div className="social-buttons">
        <a
          className="social-btn"
          href="https://twitter.com/PiermariniRena"
          target="_blank"
        >
          <img className="social-img twitter" src={twitter} />
        </a>
        <a
          className="social-btn"
          href="https://www.linkedin.com/in/renato-piermarini-106378232/"
          target="_blank"
        >
          <img className="social-img linkedin" src={linkedin} />
        </a>
        <a
          className="social-btn"
          target="_blank"
          href="https://github.com/renatopiermarini?tab=repositories"
        >
          <img className="social-img github" src={github} />
        </a>
        <a
          className="social-btn"
          target="_blank"
          href="https://wa.me/542494605138"
        >
          <img className="social-img whatsapp" src={whatsapp} />
        </a>
      </div>
    </section>
  );
};
