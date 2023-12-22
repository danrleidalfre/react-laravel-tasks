import styled from 'styled-components'

export const Main = styled.main`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Form = styled.form`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: 4fr auto;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    button {
      width: 100%;
    }
  }
`

export const Section = styled.section``

export const Article = styled.article`
  margin-top: 1rem;
  background-color: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  h3 {
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-100']};
    line-height: 140%;
    text-align: left;
    width: 100%;

    span {
      font-size: 0.75rem;
      font-weight: 400;
      color: ${(props) => props.theme['gray-300']};
    }
  }

  .buttons {
    display: flex;
    gap: 0.5rem;

    button {
      background-color: transparent;
      border: none;
      color: ${(props) => props.theme['gray-300']};
      cursor: pointer;
      transition:
        background-color 0.2s,
        color 0.2s;
      padding: 5px;
      border-radius: 4px;
      display: flex;

      &:nth-child(1):hover {
        background-color: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme.yellow};
      }

      &:nth-child(2):hover {
        background-color: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme.red};
      }
    }
  }
`
