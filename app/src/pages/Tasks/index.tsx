import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Article, Form, Main, Section } from './styles.ts'
import { Button } from '../../components/Button'
import { Pen, Trash } from 'phosphor-react'

export function Tasks() {
  return (
    <Main>
      <Form>
        <Input placeholder="Qual tarefa vai realizar?" required />
        <Select />
        <Button />
      </Form>
      <Section>
        <Article>
          <input id="checkbox" type="checkbox" defaultChecked={false} />
          <label htmlFor="checkbox" />
          <div className="title">
            <h3>Task</h3>
            <div className="tags">
              <h4>Front End</h4>
              <h4>Back End</h4>
            </div>
          </div>
          <div className="buttons">
            <button title="Editar Tarefa">
              <Pen size={20} />
            </button>
            <button title="Excluir Tarefa">
              <Trash size={20} />
            </button>
          </div>
        </Article>
      </Section>
    </Main>
  )
}