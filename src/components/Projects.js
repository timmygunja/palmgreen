import { useEffect } from "react";
import "./Projects.css";

const cheerio = require("cheerio");

const Projects = (props) => {
  // const projects = [];

  // useEffect(() => {
  //   try {
  //     fetch(
  //       "https://api.codetabs.com/v1/proxy?quest=https://github.com/timmygunja"
  //     )
  //       .then((response) => response.text())
  //       .then((text) => {
  //         // console.log(text);
  //         const $ = cheerio.load(text);
  //         let body = $(".body");
  //         let projects = body.find(".your-repos-filter");

  //         projects.each((i, project) => {
  //           let title = project.children("a");
  //           console.log(project);
  //           console.log(title);
  //         });

  //         console.log(projects);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <div className={"projects"}>
      <a
        className="project-card"
        href="https://mern-timmygunja.vercel.app"
        target="_blank"
      >
        <div className="project-card-prev hard-centered">
          <div>
            <div className="project-card-logo">
              <img src={"../../layers.png"}></img>
            </div>
            <p>mern-learn</p>
          </div>
        </div>
        <div className="centered-vertically">
          <div className="project-card-info">
            <p>Simple Fullstack E-Commerce Website</p>
            <p>MongoDB Express React NodeJS</p>
            <p>
              <a
                href="https://github.com/timmygunja/mern-learn-frontend"
                target="_blank"
                className="project-link"
              >
                Frontend: 24 folders / 82 files / 4442 code lines
              </a>
            </p>
            <p>
              <a
                href="https://github.com/timmygunja/mern-learn-backend"
                target="_blank"
                className="project-link"
              >
                Backend: 7 folders / 17 files / 934 code lines
              </a>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Projects;
