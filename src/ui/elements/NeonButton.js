import classes from "./NeonButton.module.css";

const NeonButton = (props) => {
  return (
    <a
      className={classes.button}
      onClick={props.onClick}
      href={props.href}
      target="_blank"
      disabled={props.disabled}
    >
      {props.children}
    </a>
  );
};

export default NeonButton;
