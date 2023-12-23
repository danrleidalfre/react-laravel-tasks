import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors['gray-700']};
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

export const Logo = styled.h1`
  display: flex;
  font-weight: 700;
  cursor: default;
  transition: color 0.2s;
  color: ${(props) => props.theme.colors.blue};

  &:hover {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    height: 2.5rem;
    background-color: ${(props) => props.theme.colors['purple-dark']};
    border: 0;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    transition: background-color 0.2s;
    text-transform: uppercase;

    &.active {
      background-color: ${(props) => props.theme.colors.purple};
    }

    svg {
      margin-right: 5px;
    }
  }

  a:hover {
    background-color: ${(props) => props.theme.colors.purple};
  }
`

export const ToggleTheme = styled.div`
  svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors['gray-100']};
  }
`
