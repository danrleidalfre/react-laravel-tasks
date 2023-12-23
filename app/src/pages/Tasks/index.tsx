import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Article, Form, Main, Section } from './styles.ts'
import { Button } from '../../components/Button'
import { CheckCircle, Flag, Pen, Trash } from 'phosphor-react'
import { api } from '../../lib/axios.ts'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

interface Tag {
  value: number
  label: string
  created_at: string
}

interface Task {
  id: number
  title: string
  tags: Tag[]
  created_at: string
  updated_at: string
  completed_at: string | null
}

export function Tasks() {
  const [tasks, setTask] = useState<Task[]>([])
  const [tags, setTag] = useState<Tag[]>([])
  const [title, setTitle] = useState('')
  const [id, setId] = useState(0)

  function handleSetSelectedTags(tags: Tag) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setTag(tags)
  }

  function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    if (tags.length === 0) {
      return
    }

    const tagsForm = tags.map((tag) => {
      return tag.value
    })

    if (id > 0) {
      api
        .put(`tasks/${id}`, {
          title,
          tags: tagsForm,
        })
        .then(() => {
          api.get('tasks').then((response) => {
            setTask(response.data.data)
          })
        })
    } else {
      api
        .post('tasks', {
          title,
          tags: tagsForm,
        })
        .then(() => {
          api.get('tasks').then((response) => {
            setTask(response.data.data)
          })
        })
    }
    setId(0)
    setTitle('')
    setTag([])
  }

  function handleEditTask(task: Task) {
    setId(task.id)
    setTitle(task.title)
    setTag(task.tags)
  }

  function handleRemoveTask(id: number) {
    api.delete(`tasks/${id}`).then(() => {
      api.get('tasks').then((response) => {
        setTask(response.data.data)
      })
    })
  }

  function handleCompleteTask(task: Task) {
    if (task.completed_at) {
      return
    }
    api.put(`complete-task/${task.id}`).then(() => {
      api.get('tasks').then((response) => {
        setTask(response.data.data)
      })
    })
  }

  useEffect(() => {
    api.get('/tasks').then((response) => {
      setTask(response.data.data)
    })
  }, [])

  const isEdit = id > 0

  const { created, completed } = tasks.reduce(
    (acc, task) => {
      acc.created += 1
      if (task.completed_at) {
        acc.completed += 1
      }
      return acc
    },
    { created: 0, completed: 0 },
  )

  let progress = '0'

  if (created > 0) {
    const percentage = ((completed / created) * 100).toFixed(0)
    progress = `${completed} (${percentage}%)`
  }

  return (
    <Main>
      <Form onSubmit={handleCreateTask}>
        <Input
          placeholder="Qual tarefa vai realizar?"
          required
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
        <Select onSelectedTags={handleSetSelectedTags} tags={tags} />
        <Button isEdit={isEdit} />
      </Form>
      <Section>
        <div>
          <h2>
            Total de Tarefas <span>{created}</span>
          </h2>
          <h2>
            Concluídas <span>{progress}</span>
          </h2>
        </div>
      </Section>
      {tasks.map((task) => {
        return (
          <Article key={task.id}>
            <input
              id={`checkbox-${task.id}`}
              type="checkbox"
              checked={!!task.completed_at}
              onChange={() => handleCompleteTask(task)}
            />
            <label htmlFor={`checkbox-${task.id}`} />
            <div className="title">
              <h3>{task.title}</h3>
              <div className="tags">
                {task.tags.map((tag) => {
                  return <h4 key={tag.value}>{tag.label}</h4>
                })}
              </div>
              <div className="date">
                <span title="Criação">
                  <Flag size={16} />
                  {task.created_at}
                </span>
                {task.updated_at &&
                  task.updated_at !== task.created_at &&
                  task.updated_at !== task.completed_at && (
                    <span title="Edição">
                      <Pen size={16} />
                      {task.updated_at}
                    </span>
                  )}
                {task.completed_at && (
                  <span title="Conclusão">
                    <CheckCircle size={16} />
                    {task.completed_at}
                  </span>
                )}
              </div>
            </div>
            <div className="buttons">
              <button
                title="Editar Tarefa"
                type="button"
                onClick={() => handleEditTask(task)}
              >
                <Pen size={20} />
              </button>
              <button
                type="button"
                onClick={() => handleRemoveTask(task.id)}
                title="Excluir Tarefa"
              >
                <Trash size={20} />
              </button>
            </div>
          </Article>
        )
      })}
    </Main>
  )
}
