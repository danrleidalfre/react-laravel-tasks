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
import ButtonFlat from '../../components/ButtonFlat'
import { Checkbox } from '../../components/Checkbox'
import * as Dialog from '@radix-ui/react-alert-dialog'
import { Modal } from '../../components/Modal'
import { showToast } from '../../utils/toast.ts'

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

  function validate() {
    if (title === '') {
      showToast({
        type: 'warning',
        text: 'Necessário informar o nome da Tarefa',
      })
      return false
    }

    if (tags.length === 0) {
      showToast({
        type: 'warning',
        text: 'Necessário selecionar ao menos uma Tag',
      })
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
        showToast({ type: 'error', text: message })
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
          showToast({ type: 'success', text: 'Tarefa atualizada com sucesso' })
          fetchTasks()
        })
        .catch(({ message }) => {
          showToast({ type: 'error', text: message })
        })
    } else {
      api
        .post('tasks', {
          title,
          tags: tagsForm,
        })
        .then(() => {
          showToast({ type: 'success', text: 'Tarefa criada com sucesso' })
          fetchTasks()
        })
        .catch(({ message }) => {
          showToast({ type: 'error', text: message })
        })
    }
    setId(0)
    setTitle('')
    setTag([])
  }

  function handleSetTask(task: Task) {
    setId(task.id)
    setTitle(task.title)
    setTag(task.tags)
  }

  function onRemoveTask() {
    api
      .delete(`tasks/${id}`)
      .then(() => {
        showToast({ type: 'success', text: 'Tarefa removida com sucesso' })
        fetchTasks()
      })
      .catch(({ message }) => {
        showToast({ type: 'error', text: message })
      })
    setId(0)
  }

  function handleCompleteTask(task: Task) {
    if (task.completed_at) {
      return
    }
    api
      .put(`complete-task/${task.id}`)
      .then(() => {
        showToast({ type: 'success', text: 'Tarefa marcada como concluída' })
        fetchTasks()
      })
      .catch(({ message }) => {
        showToast({ type: 'error', text: message })
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
                  <time
                    dateTime={task.created_at}
                    data-tooltip-id="tooltip"
                    data-tooltip-content="Criação"
                  >
                    {task.created_at}
                  </time>
                </Date>
                {task.created_at !== task.updated_at &&
                  task.completed_at !== task.updated_at && (
                    <Date>
                      <Pen size={16} />
                      <time
                        dateTime={task.updated_at}
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Edição"
                      >
                        {task.updated_at}
                      </time>
                    </Date>
                  )}
                {task.completed_at && (
                  <Date>
                    <CheckCircle size={16} />
                    <time
                      dateTime={task.completed_at}
                      data-tooltip-id="tooltip"
                      data-tooltip-content="Conclusão"
                    >
                      {task.completed_at}
                    </time>
                  </Date>
                )}
              </Dates>
            </Content>
            <Buttons>
              <ButtonFlat onClick={() => handleSetTask(task)} />
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <ButtonFlat isEdit={false} onClick={() => setId(task.id)} />
                </Dialog.Trigger>
                <Modal type={'Tarefa'} handleConfirm={onRemoveTask} />
              </Dialog.Root>
            </Buttons>
          </Article>
        )
      })}
    </Main>
  )
}
