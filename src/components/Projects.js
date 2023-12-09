import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = (props) => {
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
          previewImg={"mernProject.png"}
          title={mernProjectTitle}
          caption={mernProjectCaption}
          gitLink={mernProjectGitLink}
          projectLink={mernProjectLink}
          descriptionMain={mernProjectDescMain}
          // descriptionDevteam={mernProjectDescDevteam}
          descriptionStack={mernProjectDescStack}
          descriptionImagePath={mernProjectDescImgPath}
          images={[
            "mernProject.png",
            "mernProject2.png",
            "mernProject3.png",
            "mernProject4.png",
            "mernProject5.png",
            "mernProject6.png",
          ]}
        />
        <ProjectCard
          previewImg={"news.png"}
          title={newsBotProjectTitle}
          caption={newsBotProjectCaption}
          gitLink={newsBotProjectGitLink}
          projectLink={newsBotProjectLink}
          descriptionMain={newsBotProjectDescMain}
          // descriptionDevteam={mernProjectDescDevteam}
          descriptionStack={newsBotProjectDescStack}
          descriptionImagePath={newsBotProjectDescImgPath}
          images={["news.png"]}
        />
        <ProjectCard
          previewImg={"todos.png"}
          title={todosProjectTitle}
          caption={todosProjectCaption}
          gitLink={todosProjectGitLink}
          projectLink={todosProjectLink}
          descriptionMain={todosProjectDescMain}
          // descriptionDevteam={mernProjectDescDevteam}
          descriptionStack={todosProjectDescStack}
          descriptionImagePath={todosProjectDescImgPath}
          images={["todos.png"]}
        />
        <ProjectCard
          previewImg={"mlFaces.png"}
          title={mlFacesProjectTitle}
          caption={mlFacesProjectCaption}
          gitLink={mlFacesProjectGitLink}
          projectLink={mlFacesProjectLink}
          descriptionMain={mlFacesProjectDescMain}
          // descriptionDevteam={mernProjectDescDevteam}
          descriptionStack={mlFacesProjectDescStack}
          descriptionImagePath={mlFacesProjectDescImgPath}
          images={["mlFaces.png"]}
        />
        <ProjectCard
          previewImg={"weather.png"}
          title={weatherBotProjectTitle}
          caption={weatherBotProjectCaption}
          gitLink={weatherBotProjectGitLink}
          projectLink={weatherBotProjectLink}
          descriptionMain={weatherBotProjectDescMain}
          // descriptionDevteam={mernProjectDescDevteam}
          descriptionStack={weatherBotProjectDescStack}
          descriptionImagePath={weatherBotProjectDescImgPath}
          images={["weather.png"]}
        />
        <ProjectCard
          previewImg={"kaggle.png"}
          title={kaggleProjectTitle}
          caption={kaggleProjectCaption}
          gitLink={kaggleProjectGitLink}
          projectLink={kaggleProjectLink}
          descriptionMain={kaggleProjectDescMain}
          // descriptionDevteam={mernProjectDescDevteam}
          descriptionStack={kaggleProjectDescStack}
          descriptionImagePath={kaggleProjectDescImgPath}
          images={["kaggle.png"]}
        />
      </div>
    </>
  );
};

export default Projects;
