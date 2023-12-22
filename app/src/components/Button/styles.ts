import styled from 'styled-components'

export const Component = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: ${(props) => props.theme['blue-dark']};
    color: ${(props) => props.theme['gray-100']};
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    transition: background-color 0.2s;
    text-transform: uppercase;

    &:hover {
      background-color: ${(props) => props.theme.blue};
    }

    span {
      margin-left: 0.25rem;
    }
  }
`
