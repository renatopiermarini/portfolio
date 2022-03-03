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
        <button className="social-btn">
          <img className="social-img twitter" src={twitter} />
        </button>
        <button className="social-btn">
          <img className="social-img linkedin" src={linkedin} />
        </button>
        <button className="social-btn">
          <img className="social-img github" src={github} />
        </button>
        <button className="social-btn">
          <img className="social-img whatsapp" src={whatsapp} />
        </button>
      </div>
    </section>
  );
};
