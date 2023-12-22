import styled from 'styled-components'

export const Component = styled.div`
  input {
    width: 100%;
    height: 4rem;
    padding-left: 1rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['gray-500']};
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
      font-size: 1rem;
    }
  }
`
