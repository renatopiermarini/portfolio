import { NavLink } from "react-router-dom";
import "./need-a-website.css";

export const NeedAWebsite = () => {
  return (
    <section className="need-section">
      <div className="need-div">
        <h1>Start a project</h1>

        <p>Interested in working together? We should queue up a chat.</p>

        <NavLink to="/work-with-me">Let's do this</NavLink>
      </div>
    </section>
  );
};
