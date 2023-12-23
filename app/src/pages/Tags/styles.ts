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
  background-color: ${(props) => props.theme.colors['gray-500']};
  box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  h3 {
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors['gray-100']};
    line-height: 140%;
    text-align: left;
    width: 100%;

    span {
      font-size: 0.75rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors['gray-300']};
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`
