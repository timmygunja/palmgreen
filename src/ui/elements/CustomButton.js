import { Button, styled } from "@material-ui/core";

const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: "0.25rem",
  width: "3.5rem",
  height: "1.5rem",
  paddingBottom: "0.7rem",
  fontFamily: ["Verdana", "Geneva", "Tahoma", "sans-serif"].join(","),
  color: "rgb(40, 200, 115)",
  letterSpacing: "1px",
  background: "transparent",
  border: "0.1em solid rgba(40, 200, 115, 0.8)",
  borderRadius: "4px",
  boxShadow:
    "0 0 0.25em 0 rgb(40, 200, 115), inset 0 0 0.5em 0 rgb(40, 200, 115)",
  textShadow: "0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em rgb(40, 200, 115)",
  transition: "all 200ms linear",
  // opacity: "0.5",

  "&:hover": {
    cursor: "pointer",
    color: "white",
    backgroundColor: "rgb(40, 200, 115)",
    textShadow: "none",
  },
}));

export default CustomButton;
