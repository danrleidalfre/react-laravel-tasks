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
          <ListChecks />
        </Logo>
        <Navigation>
          <NavLink to="/">
            <CheckCircle size={20} />
            <span>Tarefas</span>
          </NavLink>
          <NavLink to="/tags">
            <TagSimple size={20} />
            <span>Tags</span>
          </NavLink>
          <ToggleTheme onClick={toggleTheme}>
            {title === 'light' ? <Sun size={35} /> : <Moon size={35} />}
          </ToggleTheme>
        </Navigation>
      </Head>
    </Container>
  )
}
