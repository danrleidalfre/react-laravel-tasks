import { Route, Routes } from 'react-router-dom'
import { Layout } from '../layouts/Layout'
import { Tasks } from '../pages/Tasks'
import { Tags } from '../pages/Tags'

interface Props {
  toggleTheme(): void
}

export function Router({ toggleTheme }: Props) {
  return (
    <Routes>
      <Route path="/" element={<Layout toggleTheme={toggleTheme} />}>
        <Route path="/" element={<Tasks />} />
        <Route path="/tags" element={<Tags />} />
      </Route>
    </Routes>
  )
}
