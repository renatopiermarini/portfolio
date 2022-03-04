import "./recent-work.css";
import visit from "./pictures/open.png";
import github from "./pictures/github.png";

export const RecentWork = () => {
  return (
    <section className="projects-section">
      <div className="projects-text-div">
        <h2>Projects</h2>
        <p>Here are a few projects I've worked on recently.</p>
      </div>
      <div className="projects">
        <div className="project-div">
          <label>Real Estate Website</label>
          <span />
          <a
            href="https://www.inmobiliariamarinatortarolo.com/"
            target="_blank"
          >
            <div className="project inmobiliaria"></div>
          </a>
          <div className="visit-code">
            <a
              href="https://www.inmobiliariamarinatortarolo.com/"
              target="_blank"
            >
              <img src={visit} />
            </a>
            <a
              href="https://github.com/renatopiermarini/inmobiliaria-react/tree/main"
              target="_blank"
            >
              <img src={github} />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>Construction Company Website</label>
          <span />
          <a
            href="https://renatopiermarini.github.io/senderos-construcciones/"
            target="_blank"
          >
            <div className="project senderos"></div>
          </a>
          <div className="visit-code">
            <a
              href="https://renatopiermarini.github.io/senderos-construcciones/"
              target="_blank"
            >
              <img src={visit} />
            </a>
            <a
              href="https://github.com/renatopiermarini/senderos-construcciones/tree/main"
              target="_blank"
            >
              <img src={github} />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>Journal App</label>
          <span />
          <a
            href="https://renatopiermarini.github.io/react-journal-app/"
            target="_blank"
          >
            <div className="project journal"></div>
          </a>
          <div className="visit-code">
            <a
              href="https://renatopiermarini.github.io/react-journal-app/"
              target="_blank"
            >
              <img src={visit} />
            </a>
            <a
              href="https://github.com/renatopiermarini/react-journal-app"
              target="_blank"
            >
              <img src={github} />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>Hero App</label>
          <span />
          <a href="https://react-hero-app.vercel.app/" target="_blank">
            <div className="project heros"></div>
          </a>
          <div className="visit-code">
            <a href="https://react-hero-app.vercel.app/" target="_blank">
              <img src={visit} />
            </a>
            <a
              href="https://github.com/renatopiermarini/react-hero-app"
              target="_blank"
            >
              <img src={github} />
            </a>
          </div>
        </div>
        <div className="project-div">
          <label>Giphy Expert App</label>
          <span />
          <a
            href="https://renatopiermarini.github.io/gif-expert-app/"
            target="_blank"
          >
            <div className="project giphy"></div>
          </a>
          <div className="visit-code">
            <a
              href="https://renatopiermarini.github.io/gif-expert-app/"
              target="_blank"
            >
              <img src={visit} />
            </a>
            <a
              href="https://github.com/renatopiermarini/gif-expert-app"
              target="_blank"
            >
              <img src={github} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
