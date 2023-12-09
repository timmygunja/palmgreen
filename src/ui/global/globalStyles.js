import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  
  a, 
  button,
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

  .mainbar button:hover, 
  .mainbar button:focus,
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

  .toggle {
    border-color: ${({ theme }) => theme.toggleBorderColor};
  }

  g.logoBlend {
    mix-blend-mode: ${({ theme }) => theme.blendMode};
  }
  
  g.logoBlend > rect {
    fill: ${({ theme }) => theme.cardsBackground};
  }
  
  g.logoBlend > path {
    stroke: ${({ theme }) => theme.pathStroke};
  }

  .education-card,
  .project-card {
    background-color: ${({ theme }) => theme.cardsBackground};
    border: ${({ theme }) => theme.cardsBorder};
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
  }
  `;

export default GlobalStyles;
