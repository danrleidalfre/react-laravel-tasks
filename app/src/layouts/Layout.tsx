import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

interface Props {
  toggleTheme(): void
}

export function Layout({ toggleTheme }: Props) {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <Outlet />
    </>
  )
}
