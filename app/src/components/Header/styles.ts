import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['gray-700']};
`

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Logo = styled.div`
  height: 2.5rem;
  width: 2.5rem;

  svg {
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['gray-100']};
    border-radius: 8px;
    width: 100%;
    height: 100%;
    transition: background-color 0.2s;
  }

  &:hover svg {
    background-color: ${(props) => props.theme.purple};
  }
`

export const Navigation = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 2.5rem;
    background-color: ${(props) => props.theme['purple-dark']};
    border: 0;
    border-radius: 8px;
    color: ${(props) => props.theme['gray-100']};
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    transition: background-color 0.2s;
    text-transform: uppercase;

    svg {
      margin-right: 5px;
    }
  }

  a:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
