import { createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  
  a, 
  .logotext, 
  .section-legend,
  .skill-titles {
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  
  .navbar {
    background: ${({ theme }) => theme.navBack};
    border-bottom: 1px solid ${({ theme }) => theme.navBorder};
    transition: all 0.25s linear;
  }
  
  .skill-titles h3 {
    border-bottom: 1px solid ${({ theme }) => theme.skillTitlesBorder};
    transition: all 0.25s linear;
  }

  .mainbar a:hover, 
  .mainbar a:focus,
  .skill-titles h3:hover,
  .skill-titles h3:focus {
    background-color: ${({ theme }) => theme.navLinkHover};
  }
  
  .section-outline {
    border: 2px solid ${({ theme }) => theme.sectionOutline};
    transition: all 0.25s linear;
  }

  .section-legend {
    color: ${({ theme }) => theme.sectionLegend};
    transition: all 0.25s linear;
  }
  `

export default GlobalStyles
