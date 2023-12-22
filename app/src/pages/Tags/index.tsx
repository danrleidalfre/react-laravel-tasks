import { Input } from '../../components/Input'
import { Article, Form, Main, Section } from './styles.ts'
import { Button } from '../../components/Button'
import { Pen, Trash } from 'phosphor-react'

export function Tags() {
  return (
    <Main>
      <Form>
        <Input placeholder="Qual tag deseja criar?" required />
        <Button />
      </Form>
      <Section>
        <Article>
          <h3>
            #1 Tag <span>- Criada em 20/12/2023 11:00</span>
          </h3>
          <div className="buttons">
            <button title="Editar Tag">
              <Pen size={20} />
            </button>
            <button title="Excluir Tag">
              <Trash size={20} />
            </button>
          </div>
        </Article>
      </Section>
    </Main>
  )
}
