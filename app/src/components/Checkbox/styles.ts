import styled from 'styled-components'

export const Component = styled.div`
  display: flex;

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
    background-image: url('/check.svg');
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
`
