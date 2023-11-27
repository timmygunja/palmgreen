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
  const [themeClass, setThemeClass] = useState("themetoggle");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    themeClass === "themetoggle"
      ? setThemeClass("themetoggle switched")
      : setThemeClass("themetoggle");
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

  const { navMe, navEducation, navSkills, navProjects } = useSelector(
    (state) => state.ui.currentText
  );

  console.log(navEducation);

  return (
    <div className={"navbar"}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
      </ThemeProvider>

      <div className={"logo"}>
        <div className="hard-centered">
          <img className={"logopic"} src={"favicon.png"} />
        </div>
        <div className={"logotext"}>PalmGreen</div>
      </div>

      <div className={"mainbar"}>
        <button onClick={props.onClickMe}>{navMe}</button>
        <button onClick={props.onClickMyself}>{navEducation}</button>
        <button onClick={props.onClickAnd}>{navSkills}</button>
        <button onClick={props.onClickI}>{navProjects}</button>
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

        <div className={themeClass}>
          <input type="checkbox" id="check" onClick={themeToggler} />
          <label for="check"></label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
