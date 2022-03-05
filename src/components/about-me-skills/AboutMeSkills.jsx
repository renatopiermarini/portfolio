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
import curriculum from "./CVRenatoPiermarini.pdf";

export const AboutMeSkills = () => {
  return (
    <section className="purple-background">
      <div className="about-me">
        <h2>About me</h2>
        <p>
          I'm a 22 years old Front-end Developer and entrepeneur from Argentina.
          I started my journey in 2019 moving to Spain where I learned
          everything about ecommerce and Facebook ads. I explored several niches
          with multiple ecommerce websites made on Shopify but I slowly realized
          how much I enjoyed coding things from scratch by myself without using
          platforms like Shopify. A year later I decided to learn programming
          and dedicate my life to bringing ideas to life in the browser. I'm
          confident, naturally curious, and perpetually working on improving my
          coding skills one problem at a time.
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
      <a className="download-cv" target="_blank" download href={curriculum}>
        DOWNLOAD CV
      </a>
    </section>
  );
};
