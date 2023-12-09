import { useSelector } from "react-redux";
import "./ProjectCard.css";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = (props) => {
  const {
    previewImg,
    title,
    caption,
    gitLink,
    projectLink,
    descriptionMain,
    // descriptionDevteam,
    descriptionStack,
    descriptionImagePath,
    images,
  } = props;

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const redirectToProject = () => {
    // window.location.assign(projectLink);
    window.open(projectLink, "_blank");
  };

  const redirectToGit = () => {
    // window.location.assign(gitLink);
    window.open(gitLink, "_blank");
  };

  return (
    <>
      {/* PROJECT VIEW WINDOW MODAL*/}
      <ProjectModal
        open={modalOpen}
        onClose={handleClose}
        previewImg={previewImg}
        title={title}
        caption={caption}
        redirectToProject={redirectToProject}
        redirectToGit={redirectToGit}
        descriptionMain={descriptionMain}
        // descriptionDevteam={descriptionDevteam}
        descriptionStack={descriptionStack}
        descriptionImagePath={descriptionImagePath}
        images={images}
      />

      <div class="project-card">
        <div class="project-card-head" onClick={handleOpen}>
          <div className="project-card-img">
            <img src={previewImg} alt="Project" />
          </div>
        </div>

        <div class="project-card-body">
          <div class="project-card-title" onClick={handleOpen}>
            <span>{title}</span>
            <span class="project-card-caption">{caption}</span>
          </div>
          <div className="project-card-links">
            <div
              className="hard-centered project-card-links-button"
              onClick={redirectToGit}
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </div>
            <div
              className="hard-centered project-card-links-button"
              onClick={redirectToProject}
            >
              <i className="fa fa-paperclip" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
