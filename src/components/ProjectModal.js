import React, { useState } from "react";
import "./ProjectModal.css";
// import { Button, TextField } from "@material-ui/core";
import BasicModal from "../ui/elements/BasicModal";
import Section from "../ui/Section";
import { useSelector } from "react-redux";
import EmblaCarousel from "../ui/elements/EmblaCarousel";

const ProjectModal = (props) => {
  const {
    previewImg,
    title,
    caption,
    redirectToGit,
    redirectToProject,
    descriptionMain,
    // descriptionDevteam,
    descriptionStack,
    descriptionImagePath,
    images,
  } = props;

  const { projectDescMainTitle, projectDescStructure } = useSelector(
    (state) => state.ui.currentText
  );

  return (
    <BasicModal open={props.open} handleClose={props.onClose}>
      <div className="project-modal-container">
        <Section name="Project overview">
          <div className="project-modal-content">
            <div className="project-modal-head">
              <div class="project-modal-title">
                <span>{title}</span>
                <span class="project-card-caption">{caption}</span>
              </div>
              <div className="project-modal-links">
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

            {images.length > 1 ? (
              <div className="project-modal-slider">
                <div className="project-modal-slider-carousel">
                  <EmblaCarousel options={{ loop: true }} images={images} />
                </div>
              </div>
            ) : (
              <div className="project-modal-slider">
                <div className="project-modal-img hard-centered">
                  <img src={previewImg} alt="Project" />
                </div>
              </div>
            )}

            <div className="project-modal-description">
              <div className="project-modal-description-main">
                <div className="project-modal-description-title">
                  {projectDescMainTitle}
                </div>
                {descriptionMain}
              </div>

              {/* <div className="project-modal-description-secondary">
                <div className="project-modal-description-secondary-structure-title">
                  {projectDescStructure}
                </div>
                <div className="project-modal-description-secondary-img">
                  <img src={descriptionImagePath} alt="project structure" />
                </div>
                <div className="project-modal-description-secondary-text">
                  <div>
                    {descriptionStack.map((d) => {
                      return <div>{d}</div>;
                    })}
                  </div>
                  <div>{descriptionDevteam}</div>
                </div>
              </div> */}
            </div>
          </div>
        </Section>
      </div>
    </BasicModal>
  );
};

export default ProjectModal;
