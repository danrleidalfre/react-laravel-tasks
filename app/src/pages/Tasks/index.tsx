import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Form, Main } from './styles.ts'
import { Button } from '../../components/Button'

export function Tasks() {
  return (
    <Main>
      <Form>
        <Input placeholder="Qual tarefa vai realizar?" required />
        <Select />
        <Button />
      </Form>
    </Main>
  )
}
