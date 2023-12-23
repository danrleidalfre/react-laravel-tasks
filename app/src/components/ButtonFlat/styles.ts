import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors['gray-300']};
  cursor: pointer;
  display: flex;

  svg {
    transition: color 0.2s;
  }
`
export const IconEdit = styled.div`
  &:hover svg {
    color: ${(props) => props.theme.colors.yellow};
  }
`

export const IconRemove = styled.div`
  &:hover svg {
    color: ${(props) => props.theme.colors.red};
  }
`
