import React from "react";
import { Backdrop, Box, Fade, Modal } from "@material-ui/core";
import classes from "./BasicModal.module.css";

const screenWidth = window.innerWidth;
let width = undefined;
let padding = 0;
let translateTop = "-50%";

if (screenWidth < 400) {
  translateTop = "-60%";
  width = screenWidth * 0.9;
} else if (screenWidth < 600) {
  width = screenWidth * 0.8;
  translateTop = "-57%";
} else if (screenWidth < 800) {
  width = screenWidth * 0.7;
  translateTop = "-55%";
} else if (screenWidth < 1000) {
  width = screenWidth * 0.6;
  translateTop = "-55%";
} else if (screenWidth < 1200) {
  width = screenWidth * 0.55;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: `translate(-50%, ${translateTop})`,
  width: width,
  border: "2px solid #000",
  borderRadius: 15 + padding,
  boxShadow: 24,
  p: padding,
  outline: "none",
};

export default function BasicModal(props) {
  return (
    <div className={classes["modal-container"]}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={props.open}>
          <Box sx={props.style ? props.style : style}>{props.children}</Box>
        </Fade>
      </Modal>
    </div>
  );
}
