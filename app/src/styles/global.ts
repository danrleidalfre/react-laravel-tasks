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

    #tooltip {
        background-color: ${(props) => props.theme.colors['gray-100']};
        color: ${(props) => props.theme.colors['gray-700']};
        box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        padding: 0.25rem;
        -webkit-font-smoothing: antialiased;
    }

    .Toastify div {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
    }

    @media (max-width: 768px) {
        :root {
            font-size: 85%;
        }
    }
`
