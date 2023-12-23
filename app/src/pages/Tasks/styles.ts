import styled from 'styled-components'

export const Main = styled.main`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Form = styled.form`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: 2fr 2fr auto;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    button {
      width: 100%;
    }
  }
`

export const Section = styled.section`
  max-width: 70rem;
  margin: 1.5rem 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1rem;
      font-weight: 700;

      &:first-child {
        color: ${(props) => props.theme.colors.blue};

        span {
          background-color: ${(props) => props.theme.colors.blue};
        }
      }

      &:last-child {
        color: ${(props) => props.theme.colors.purple};

        span {
          background-color: ${(props) => props.theme.colors.purple};
        }
      }

      span {
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => props.theme.colors['gray-400']};
        font-size: 0.875rem;
        margin-left: 0.5rem;
        padding: 0.15rem 0.5rem;
        border-radius: 10px;
      }
    }
  }
`

export const Article = styled.article`
  background-color: ${(props) => props.theme.colors['gray-500']};
  box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;

  input {
    position: absolute;
    opacity: 0;
  }

  input + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  input + label:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1.5rem;
    height: 1.5rem;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.blue};
    transition:
      border 0.2s,
      background-color 0.2s;
  }

  input:hover + label:before {
    border: 2px solid ${(props) => props.theme.colors['blue-dark']};
  }

  input:checked + label:before {
    background-color: ${(props) => props.theme.colors['purple-dark']};
    border: 2px solid ${(props) => props.theme.colors['purple-dark']};
  }

  input:checked:hover + label:before {
    background-color: ${(props) => props.theme.colors.purple};
    border: 2px solid ${(props) => props.theme.colors.purple};
  }

  input:checked + label:after {
    content: '';
    background-image: url('/public/check.svg');
    background-repeat: no-repeat;
    background-position: center 5px;
    background-size: 1rem 1rem;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .title {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;

    h3 {
      font-size: 1rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors['gray-100']};
      width: 100%;
    }

    .tags {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;

      h4 {
        display: flex;
        font-weight: 500;
        align-items: center;
        font-size: 0.75rem;
        background-color: ${(props) => props.theme.colors['purple-dark']};
        color: ${(props) => props.theme.colors.white};
        padding: 0.125rem 0.5rem;
        border-radius: 0.5rem;
        transition: background-color 0.2s;
        cursor: default;
      }
    }

    .date {
      display: flex;
      margin-top: 0.5rem;
      gap: 0.5rem;

      span {
        display: flex;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 400;
        color: ${(props) => props.theme.colors['gray-300']};

        svg {
          margin-right: 0.25rem;
        }
      }
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`
