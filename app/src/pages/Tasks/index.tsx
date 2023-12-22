import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Article, Form, Main, Section } from './styles.ts'
import { Button } from '../../components/Button'
import { CheckCircle, Flag, Pen, Trash } from 'phosphor-react'

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
            <h3>#1 Task</h3>
            <div className="tags">
              <h4>Front End</h4>
              <h4>Back End</h4>
            </div>
            <div className="date">
              <span>
                <Flag size={16} />
                20/12/2023 11:00
              </span>
              <span>
                <CheckCircle size={16} />
                20/12/2023 12:00
              </span>
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
