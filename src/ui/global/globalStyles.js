import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s linear;
  }
  
  a, 
  button,
  .logotext, 
  .skill-titles {
    color: ${({ theme }) => theme.text};
  }
  
  .navbar {
    background: ${({ theme }) => theme.navBack};
    border-bottom: 1px solid ${({ theme }) => theme.navBorder};
    transition: all 0.3s linear;
  }
  
  .skill-titles h3 {
    border-bottom: 1px solid ${({ theme }) => theme.skillTitlesBorder};
  }

  .mainbar button:hover, 
  .mainbar button:focus,
  .skill-titles h3:hover,
  .skill-titles h3:focus {
    background-color: ${({ theme }) => theme.navLinkHover};
  }
  
  .section-outline {
    border: 2px solid ${({ theme }) => theme.sectionOutline};
  }

  .section-legend {
    color: ${({ theme }) => theme.sectionLegend};
  }

  .toggle {
    border-color: ${({ theme }) => theme.toggleBorderColor};
  }

  g.logoBlend {
    mix-blend-mode: ${({ theme }) => theme.blendMode};
  }
  
  g.logoBlend > rect {
    fill: ${({ theme }) => theme.cardsBackground};
    transition: fill 0.3s linear;
  }
  
  g.logoBlend > path {
    stroke: ${({ theme }) => theme.pathStroke};
  }

  .education-card,
  .project-card {
    background-color: ${({ theme }) => theme.cardsBackground};
    box-shadow: ${({ theme }) => theme.cardsBoxShadow};
  }

  .project-card-links-button {
    color: ${({ theme }) => theme.projectCardLinkColor};;
    border: 2px solid ${({ theme }) => theme.projectCardLinkBorderColor};;
  }

  .project-modal-container {
    background-color: ${({ theme }) => theme.cardsBackground};
    color: ${({ theme }) => theme.text};
  }

  .project-modal-description-title,
  .project-modal-description-secondary-structure-title {
    color: ${({ theme }) => theme.projectModalDescTitleColor};
  }

  .footer {
    background-color: ${({ theme }) => theme.footerBackground};
    background-image: ${({ theme }) => theme.footerBackgroundImage};
  }
  `;

export default GlobalStyles;
