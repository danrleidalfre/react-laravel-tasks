import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Main } from './styles.ts'

export function Tasks() {
  return (
    <Main>
      <Input placeholder="Add Task" />
      <Select />
    </Main>
  )
}
