import styled from 'styled-components'

export const Component = styled.div`
  .dropdown-container {
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors['gray-500']};
    border: 1px solid ${(props) => props.theme.colors['gray-500']};
    cursor: pointer;
    font-size: 1rem;
    color: ${(props) => props.theme.colors['gray-100']};

    &:focus-within {
      box-shadow: none;
      border: 1px solid ${(props) => props.theme.colors['gray-500']};
    }

    .dropdown-heading {
      padding: 0;
      cursor: pointer;

      .gray {
        color: ${(props) => props.theme.colors['gray-300']};
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
      }
    }

    .dropdown-content {
      left: 0;
      border-radius: 8px;
      padding: 0;
      margin-top: 0.5rem;

      .panel-content {
        background-color: ${(props) => props.theme.colors['gray-500']};

        .item-renderer {
          color: ${(props) => props.theme.colors['gray-300']};
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          padding: 0 1rem;

          input {
            display: none;
          }
        }

        .select-item:hover {
          background-color: ${(props) => props.theme.colors['gray-400']};

          span {
            color: ${(props) => props.theme.colors.white};
          }
        }

        .select-item.selected {
          background-color: ${(props) => props.theme.colors['gray-400']};

          span {
            color: ${(props) => props.theme.colors.white};
          }
        }
      }
    }
  }
`
