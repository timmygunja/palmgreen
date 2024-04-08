import { Button, styled } from "@material-ui/core";

const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: "0.25rem",
  width: "3.5rem",
  height: "1.5rem",
  paddingBottom: "0.7rem",
  fontFamily: ["Verdana", "Geneva", "Tahoma", "sans-serif"].join(","),
  color: "rgb(34, 224, 123)",
  letterSpacing: "1px",
  background: "transparent",
  border: "0.1em solid rgba(34, 224, 123, 0.8)",
  borderRadius: "4px",
  boxShadow:
    "0 0 0.25em 0 rgb(34, 224, 123), inset 0 0 0.5em 0 rgb(34, 224, 123)",
  textShadow: "0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em rgb(34, 224, 123)",
  transition: "all 200ms linear",

  "&:hover": {
    cursor: "pointer",
    color: "white",
    backgroundColor: "rgb(34, 224, 123)",
    textShadow: "none",
  },
}));

export default CustomButton;
