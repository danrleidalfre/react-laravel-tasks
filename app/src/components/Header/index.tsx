import { Container, Head, Logo, Navigation } from './styles.ts'
import { NavLink } from 'react-router-dom'
import { CheckCircle, CircleWavyCheck, TagSimple } from 'phosphor-react'

export function Header() {
  return (
    <Container>
      <Head>
        <Logo>
          <CircleWavyCheck weight={'fill'} />
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
        </Navigation>
      </Head>
    </Container>
  )
}
