import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import {
  Article,
  Buttons,
  Content,
  Date,
  Dates,
  Form,
  Main,
  Section,
  Tag,
  Tags,
  Title,
} from './styles.ts'
import { Button } from '../../components/Button'
import { CheckCircle, Flag, Pen } from 'phosphor-react'
import { api } from '../../lib/axios.ts'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ButtonFlat } from '../../components/ButtonFlat'
import { Checkbox } from '../../components/Checkbox'
import { toast } from 'react-toastify'

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

  function showToastSuccess(text: string) {
    toast.success(text, {
      theme: 'colored',
      hideProgressBar: true,
    })
  }

  function showToastWarning(text: string) {
    toast.warning(text, {
      theme: 'colored',
      hideProgressBar: true,
    })
  }

  function showToastError(text: string) {
    toast.error(text, {
      theme: 'colored',
      hideProgressBar: true,
    })
  }

  function validate() {
    if (title === '') {
      showToastWarning('Necessário informar o nome da Tarefa')
      return false
    }

    if (tags.length === 0) {
      showToastWarning('Necessário selecionar ao menos uma Tag')
      return false
    }

    return true
  }

  function fetchTasks() {
    api
      .get('tasks')
      .then((response) => {
        setTask(response.data.data)
      })
      .catch(({ message }) => {
        showToastError(message)
      })
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    if (!validate()) {
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
          showToastSuccess(`Tarefa "${title}" atualizada com sucesso`)
          fetchTasks()
        })
        .catch(({ message }) => {
          showToastError(message)
        })
    } else {
      api
        .post('tasks', {
          title,
          tags: tagsForm,
        })
        .then(() => {
          showToastSuccess(`Tarefa "${title}" criada com sucesso`)
          fetchTasks()
        })
        .catch(({ message }) => {
          showToastError(message)
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

  function handleRemoveTask(task: Task) {
    api
      .delete(`tasks/${task.id}`)
      .then(() => {
        showToastSuccess(`Tarefa "${task.title}" removida com sucesso`)
        fetchTasks()
      })
      .catch(({ message }) => {
        showToastError(message)
      })
  }

  function handleCompleteTask(task: Task) {
    if (task.completed_at) {
      return
    }
    api
      .put(`complete-task/${task.id}`)
      .then(() => {
        showToastSuccess(`Tarefa "${task.title}" marcada como concluída`)
        fetchTasks()
      })
      .catch(({ message }) => {
        showToastError(message)
      })
  }

  useEffect(() => {
    fetchTasks()
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
            <Checkbox
              forId={`checkbox-${task.id}`}
              checked={!!task.completed_at}
              onChange={() => handleCompleteTask(task)}
            />
            <Content>
              <Title>{task.title}</Title>
              <Tags>
                {task.tags.map((tag) => {
                  return <Tag key={tag.value}>{tag.label}</Tag>
                })}
              </Tags>
              <Dates>
                <Date>
                  <Flag size={16} />
                  <time dateTime={task.created_at}>{task.created_at}</time>
                </Date>
                {task.created_at !== task.updated_at &&
                  task.completed_at !== task.updated_at && (
                    <Date>
                      <Pen size={16} />
                      <time dateTime={task.updated_at}>{task.updated_at}</time>
                    </Date>
                  )}
                {task.completed_at && (
                  <Date>
                    <CheckCircle size={16} />
                    <time dateTime={task.completed_at}>
                      {task.completed_at}
                    </time>
                  </Date>
                )}
              </Dates>
            </Content>
            <Buttons>
              <ButtonFlat onClick={() => handleEditTask(task)} />
              <ButtonFlat
                isEdit={false}
                onClick={() => handleRemoveTask(task)}
              />
            </Buttons>
          </Article>
        )
      })}
    </Main>
  )
}
