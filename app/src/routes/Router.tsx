import { Route, Routes } from 'react-router-dom'
import { Layout } from '../layouts/Layout'
import { Tasks } from '../pages/Tasks'
import { Tags } from '../pages/Tags'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Tasks />} />
        <Route path="/tags" element={<Tags />} />
      </Route>
    </Routes>
  )
}
