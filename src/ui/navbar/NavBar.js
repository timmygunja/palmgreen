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
                <h3>Logo</h3>
            </div>

            <div className={"mainbar"}>
                <a href={"#"}>link</a>
            </div>

            <div className={"buttonbar"}>
                <button onClick={themeToggler}>Switch Theme</button>
            </div>

            <hr />
            <hr />
            <hr />

        </div>
    )
}

export default NavBar