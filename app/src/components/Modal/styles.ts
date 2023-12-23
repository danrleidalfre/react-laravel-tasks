import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-alert-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 32rem;
  border-radius: 8px;
  padding: 1.5rem 0;
  background-color: ${(props) => props.theme.colors['gray-700']};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Description = styled(Dialog.Description)`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors['gray-100']};
  margin-bottom: 1rem;
`

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
`

export const Cancel = styled(Dialog.Cancel)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  height: 2.25rem;
  background-color: ${(props) => props.theme.colors.red};
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.2s;
  text-transform: uppercase;

  &:hover {
    opacity: 0.9;
  }

  svg {
    margin-right: 0.1rem;
  }
`

export const Confirm = styled(Dialog.Action)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  height: 2.25rem;
  background-color: ${(props) => props.theme.colors['purple-dark']};
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.2s;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple};
  }

  svg {
    margin-right: 0.1rem;
  }
`
