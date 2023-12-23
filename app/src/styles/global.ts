import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.colors['gray-600']};
        color: ${(props) => props.theme.colors['gray-300']};
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
    }

    :focus {
        outline: 0;
        box-shadow: none;
    }

    @media (max-width: 768px) {
        :root {
            font-size: 85%;
        }
    }
`
