import { createGlobalStyle } from 'styled-components'

export interface DefaultTheme {
  body: string
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['gray-100']};
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
    }

    :focus {
        outline: 0;
        box-shadow: none;
    }
`
