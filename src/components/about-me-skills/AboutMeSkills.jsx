import "./about-me-skills.css";
import frontend from "../pictures/frontend.svg";
import html from "../pictures/skills/html.png";
import css from "../pictures/skills/css.png";
import sass from "../pictures/skills/sass.png";
import tailwind from "../pictures/skills/tailwind.png";
import javascript from "../pictures/skills/javascript.png";
import reactjs from "../pictures/skills/reactjs.png";
import git from "../pictures/skills/git.png";
import firebase from "../pictures/skills/firebase.png";
import npm from "../pictures/skills/npm.png";

export const AboutMeSkills = () => {
  return (
    <section className="purple-background">
      <div className="about-me">
        <h2>About me</h2>
        <p>
          I'm a passionate Front-end Developer and I love coding beautifully
          simple things. I'm a passionate Front-end Developer and I love coding
          beautifully simple things. I'm a passionate Front-end Developer and I
          love coding beautifully simple things.
        </p>
      </div>
      <div className="skills">
        <img src={frontend} className="frontend-img" />
        <h2>Skills</h2>
        <div className="skills-pictures-div">
          <div className="skill-div">
            <img src={html} />
            <label>Html-5</label>
          </div>
          <div className="skill-div">
            <img src={css} />
            <label>Css3</label>
          </div>
          <div className="skill-div">
            <img src={sass} />
            <label>Sass</label>
          </div>
          <div className="skill-div">
            <img src={tailwind} />
            <label>Tailwind</label>
          </div>
          <div className="skill-div">
            <img src={javascript} />
            <label>JavaScript</label>
          </div>
          <div className="skill-div">
            <img src={reactjs} />
            <label>React JS</label>
          </div>
          <div className="skill-div">
            <img src={git} />
            <label>Git</label>
          </div>
          <div className="skill-div">
            <img src={firebase} />
            <label>Firebase</label>
          </div>
          <div className="skill-div">
            <img src={npm} />
            <label>Npm</label>
          </div>
        </div>
      </div>
      <a className="download-cv">DOWNLOAD CV</a>
    </section>
  );
};
