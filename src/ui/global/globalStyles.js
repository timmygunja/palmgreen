import { createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
  body, a {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
    transition: all 0.25s linear;
  }
  `

export default GlobalStyles
