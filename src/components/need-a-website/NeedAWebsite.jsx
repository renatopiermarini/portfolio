import { NavLink } from "react-router-dom";
import "./need-a-website.css";

export const NeedAWebsite = () => {
  return (
    <section className="need-section">
      <div className="need-div">
        <h1>Start a project</h1>

        <p>Looking for a new website?</p>

        <NavLink to="/work-with-me">Send message</NavLink>
      </div>
    </section>
  );
};
