import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

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

  const {
    mernProjectTitle,
    mernProjectCaption,
    mernProjectDescMain,
    // mernProjectDescDevteam,
    mernProjectDescStack,
    mernProjectDescImgPath,
    mernProjectLinkFront,
    mernProjectLinkBack,
    mernProjectLink,
    mernProjectGitLink,

    newsBotProjectTitle,
    newsBotProjectCaption,
    newsBotProjectDescMain,
    // newsBotProjectDescDevteam,
    newsBotProjectDescStack,
    newsBotProjectDescImgPath,
    newsBotProjectLink,
    newsBotProjectGitLink,

    todosProjectTitle,
    todosProjectCaption,
    todosProjectDescMain,
    // todosProjectDescDevteam,
    todosProjectDescStack,
    todosProjectDescImgPath,
    todosProjectLink,
    todosProjectGitLink,

    mlFacesProjectTitle,
    mlFacesProjectCaption,
    mlFacesProjectDescMain,
    // mlFacesProjectDescDevteam,
    mlFacesProjectDescStack,
    mlFacesProjectDescImgPath,
    mlFacesProjectLink,
    mlFacesProjectGitLink,

    weatherBotProjectTitle,
    weatherBotProjectCaption,
    weatherBotProjectDescMain,
    // weatherBotProjectDescDevteam,
    weatherBotProjectDescStack,
    weatherBotProjectDescImgPath,
    weatherBotProjectLink,
    weatherBotProjectGitLink,

    kaggleProjectTitle,
    kaggleProjectCaption,
    kaggleProjectDescMain,
    // kaggleProjectDescDevteam,
    kaggleProjectDescStack,
    kaggleProjectDescImgPath,
    kaggleProjectLink,
    kaggleProjectGitLink,
  } = useSelector((state) => state.ui.currentText);

  return (
    <>
      <div className="projects">
        <ProjectCard
          previewImg={"../../mernProject.png"}
          title={mernProjectTitle}
          caption={mernProjectCaption}
          gitLink={mernProjectGitLink}
          projectLink={mernProjectLink}
          descriptionMain={mernProjectDescMain}
          // descriptionDevteam={mernProjectDescDevteam}
          descriptionStack={mernProjectDescStack}
          descriptionImagePath={mernProjectDescImgPath}
        />
        <ProjectCard
          previewImg={"../../news.png"}
          title={newsBotProjectTitle}
          caption={newsBotProjectCaption}
          gitLink={newsBotProjectGitLink}
          projectLink={newsBotProjectLink}
          descriptionMain={newsBotProjectDescMain}
          // descriptionDevteam={mernProjectDescDevteam}
          descriptionStack={newsBotProjectDescStack}
          descriptionImagePath={newsBotProjectDescImgPath}
        />
        <ProjectCard
          previewImg={"../../todos.png"}
          title={todosProjectTitle}
          caption={todosProjectCaption}
          gitLink={todosProjectGitLink}
          projectLink={todosProjectLink}
          descriptionMain={todosProjectDescMain}
          // descriptionDevteam={mernProjectDescDevteam}
          descriptionStack={todosProjectDescStack}
          descriptionImagePath={todosProjectDescImgPath}
        />
        <ProjectCard
          previewImg={"../../mlFaces.png"}
          title={mlFacesProjectTitle}
          caption={mlFacesProjectCaption}
          gitLink={mlFacesProjectGitLink}
          projectLink={mlFacesProjectLink}
          descriptionMain={mlFacesProjectDescMain}
          // descriptionDevteam={mernProjectDescDevteam}
          descriptionStack={mlFacesProjectDescStack}
          descriptionImagePath={mlFacesProjectDescImgPath}
        />
        <ProjectCard
          previewImg={"../../weather.png"}
          title={weatherBotProjectTitle}
          caption={weatherBotProjectCaption}
          gitLink={weatherBotProjectGitLink}
          projectLink={weatherBotProjectLink}
          descriptionMain={weatherBotProjectDescMain}
          // descriptionDevteam={mernProjectDescDevteam}
          descriptionStack={weatherBotProjectDescStack}
          descriptionImagePath={weatherBotProjectDescImgPath}
        />
        <ProjectCard
          previewImg={"../../kaggle.png"}
          title={kaggleProjectTitle}
          caption={kaggleProjectCaption}
          gitLink={kaggleProjectGitLink}
          projectLink={kaggleProjectLink}
          descriptionMain={kaggleProjectDescMain}
          // descriptionDevteam={mernProjectDescDevteam}
          descriptionStack={kaggleProjectDescStack}
          descriptionImagePath={kaggleProjectDescImgPath}
        />
      </div>
    </>
  );
};

export default Projects;
