import styled from 'styled-components'

export const Component = styled.div`
  .dropdown-container {
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['gray-500']};
    border: 1px solid ${(props) => props.theme['gray-700']};
    cursor: pointer;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-300']};

    &:focus-within {
      box-shadow: none;
      border: 1px solid ${(props) => props.theme['gray-700']};
    }

    .dropdown-heading {
      padding: 0;
      cursor: pointer;

      .gray {
        color: ${(props) => props.theme['gray-300']};
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
      }
    }

    .dropdown-content {
      max-width: max-content;

      .panel-content {
        background-color: ${(props) => props.theme['gray-500']};

        .item-renderer {
          color: ${(props) => props.theme['gray-300']};
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          padding: 0 1rem;

          input {
            display: none;
          }
        }

        .select-item:hover {
          background-color: ${(props) => props.theme['gray-400']};
        }

        .select-item.selected {
          background-color: ${(props) => props.theme['gray-600']};
        }
      }
    }
  }
`
