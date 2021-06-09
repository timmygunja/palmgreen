import { createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  
  a, .logotext {
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  
  .navbar {
    background: ${({ theme }) => theme.navBack};
    border-bottom: 1px solid ${({ theme }) => theme.navBorder};
    transition: all 0.25s linear;
  }

  .mainbar a:hover,
  .mainbar a:focus {
    background-color: ${({ theme }) => theme.navLinkHover};
  }
  
  `

export default GlobalStyles
