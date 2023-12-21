import styled from 'styled-components'

export const Component = styled.div`
  input {
    width: 100%;
    height: 4rem;
    padding-left: 1rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-100']};
    border: 1px solid ${(props) => props.theme['gray-700']};
  }
`
