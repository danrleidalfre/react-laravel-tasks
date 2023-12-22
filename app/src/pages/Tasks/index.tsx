import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Article, Form, Main, Section } from './styles.ts'
import { Button } from '../../components/Button'
import { CheckCircle, Flag, Pen, Trash } from 'phosphor-react'
import { api } from '../../lib/axios.ts'
import { useEffect, useState } from 'react'

interface Task {
  id: number
  title: string
  tags: []
  created_at: string
  completed_at: string | null
}

export function Tasks() {
  const [tasks, setTask] = useState<Task[]>([])

  useEffect(() => {
    api.get('/tasks').then((response) => {
      setTask(response.data.data)
    })
  }, [])

  return (
    <Main>
      <Form>
        <Input placeholder="Qual tarefa vai realizar?" required />
        <Select />
        <Button />
      </Form>
      <Section>
        {tasks.map((task) => {
          return (
            <Article key={task.id}>
              <input
                id={`checkbox-${task.id}`}
                type="checkbox"
                defaultChecked={false}
              />
              <label htmlFor={`checkbox-${task.id}`} />
              <div className="title">
                <h3>{task.title}</h3>
                <div className="tags">
                  {task.tags.map((tag) => {
                    return <h4 key={tag}>{tag}</h4>
                  })}
                </div>
                <div className="date">
                  <span>
                    <Flag size={16} />
                    {task.created_at}
                  </span>
                  {task.completed_at && (
                    <span>
                      <CheckCircle size={16} />
                      {task.completed_at}
                    </span>
                  )}
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
          )
        })}
      </Section>
    </Main>
  )
}
