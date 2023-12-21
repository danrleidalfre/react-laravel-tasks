import { HeaderContainer } from './styles.ts'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">Tasks</NavLink>
      <NavLink to="/tags">Tags</NavLink>
    </HeaderContainer>
  )
}
