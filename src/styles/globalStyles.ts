import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  html,
  body {
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({theme}) => theme.colors.background.primary};
    padding: 0;
    margin: 0;
    font-size: 10px;
    font-family: 'Roboto Mono', monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
