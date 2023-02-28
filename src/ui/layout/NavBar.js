import "./NavBar.css";
import { useState } from "react";
import GlobalStyles from "../global/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../global/Themes";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
// import { refs } from "../../App.js";
// import background from "../../../flagusa.png";

const NavBar = (props) => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const language = useSelector((state) => state.ui.language);
  const dispatch = useDispatch();
  const [languageButtonClass, setLanguageButtonClass] =
    useState("languagetoggle");

  const languageToggler = () => {
    language === "english"
      ? dispatch(uiActions.switchLanguage(props.sources.ruText))
      : dispatch(uiActions.switchLanguage(props.sources.engText));

    languageButtonClass === "languagetoggle"
      ? setLanguageButtonClass("languagetoggle moved")
      : setLanguageButtonClass("languagetoggle");
  };

  return (
    <div className={"navbar"}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
      </ThemeProvider>

      <div className={"logo"}>
        <div>
          <img className={"logopic"} src={"favicon.png"} />
        </div>
        <div className={"logotext"}>PalmGreen</div>
      </div>

      <div className={"mainbar"}>
        <button onClick={props.onClickMe}>Me</button>
        <button onClick={props.onClickMyself}>Myself</button>
        <button onClick={props.onClickAnd}>&</button>
        <button onClick={props.onClickI}>i</button>
      </div>

      {/* <div className={""}></div> */}

      <div className={"buttonbar"}>
        <div className={languageButtonClass} onClick={languageToggler}>
          <span className="label-up">English</span>
          <span className="label-up">Русский</span>
        </div>

        {/* <input type="checkbox" className="themetoggle" onClick={themeToggler} /> */}

        {/* <label className="themetoggle">
          <input type="checkbox" value="a" onClick={themeToggler} />
          <span></span>
        </label> */}

        <div className="themetoggle">
          <input type="checkbox" id="check" onClick={themeToggler} />
          <label for="check"></label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
