import { Container, Head, Logo, Navigation, ToggleTheme } from './styles.ts'
import { CheckCircle, ListChecks, Moon, Sun, TagSimple } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { NavLink } from 'react-router-dom'

interface Props {
  toggleTheme(): void
}

export function Header({ toggleTheme }: Props) {
  const { title } = useContext(ThemeContext)
  return (
    <Container>
      <Head>
        <Logo>
          Task<span>App</span>
          <CheckCircle weight={'bold'} size={20} />
        </Logo>
        <Navigation>
          <NavLink to="/">
            <ListChecks size={20} weight={'bold'} />
            <span>Tarefas</span>
          </NavLink>
          <NavLink to="/tags">
            <TagSimple size={20} weight={'bold'} />
            <span>Tags</span>
          </NavLink>
          <ToggleTheme onClick={toggleTheme}>
            {title === 'light' ? (
              <Sun
                size={32}
                data-tooltip-id="tooltip"
                data-tooltip-content="Modo Claro"
              />
            ) : (
              <Moon
                size={32}
                data-tooltip-id="tooltip"
                data-tooltip-content="Modo Escuro"
              />
            )}
          </ToggleTheme>
        </Navigation>
      </Head>
    </Container>
  )
}
