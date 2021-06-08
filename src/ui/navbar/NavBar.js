import "./NavBar.css"
import { useState } from "react";
import GlobalStyles from "../global/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../global/Themes"

const NavBar = () => {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <div className={"navbar"}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles/>
            </ThemeProvider>

            <div className={"logo"}>
                <div><img className={"logopic"} src={"favicon.png"}/></div>
                <div className={"logotext"}>PalmGreen</div>
            </div>

            <div className={"mainbar"}>
                <a href={"#"}><span>Me</span></a>
                <a href={"#"}>Myself</a>
                <a href={"#"}>&</a>
                <a href={"#"}>i</a>
            </div>

            <div className={"buttonbar"}>
                {/*<button onClick={themeToggler}>Switch Theme</button>*/}
                <input type="checkbox" className="toggle" onClick={themeToggler}/>
            </div>

        </div>
    )
}

export default NavBar