import { useEffect } from "react";
import "./Projects.css";

const cheerio = require("cheerio");

const Projects = (props) => {
  // const projects = [];

  useEffect(() => {
    try {
      fetch(
        "https://api.codetabs.com/v1/proxy?quest=https://github.com/timmygunja"
      )
        .then((response) => response.text())
        .then((text) => {
          // console.log(text);
          const $ = cheerio.load(text);
          let body = $(".body");
          let projects = body.find(".your-repos-filter");

          projects.each((i, project) => {
            let title = project.children("a");
            console.log(project);
            console.log(title);
          });

          console.log(projects);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div className={"projects"}></div>;
};

export default Projects;
