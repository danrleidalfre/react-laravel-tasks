import { Input } from '../../components/Input'
import { Article, Buttons, Form, Main, Section } from './styles.ts'
import { Button } from '../../components/Button'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { api } from '../../lib/axios.ts'
import ButtonFlat from '../../components/ButtonFlat'
import { toast } from 'react-toastify'
import * as Dialog from '@radix-ui/react-alert-dialog'
import { Modal } from '../../components/Modal'

interface Tag {
  value: number
  label: string
  created_at: string
}

export function Tags() {
  const [title, setTitle] = useState('')
  const [tags, setTag] = useState<Tag[]>([])
  const [id, setId] = useState(0)

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

  function fetchTags() {
    api
      .get('tags')
      .then((response) => {
        setTag(response.data.data)
      })
      .catch(({ message }) => {
        showToastError(message)
      })
  }

  function handleCreateTag(event: FormEvent) {
    event.preventDefault()

    if (title === '') {
      showToastWarning('Necessário informar o nome da Tag')
      return
    }

    if (id > 0) {
      api
        .put(`tags/${id}`, {
          title,
        })
        .then(() => {
          showToastSuccess(`Tag atualizada com sucesso`)
          fetchTags()
        })
        .catch(({ message }) => {
          showToastError(message)
        })
    } else {
      api
        .post('tags', {
          title,
        })
        .then(() => {
          showToastSuccess(`Tag criada com sucesso`)
          fetchTags()
        })
        .catch(({ message }) => {
          showToastError(message)
        })
    }
    setTitle('')
    setId(0)
  }

  function handleEditTag(tag: Tag) {
    setId(tag.value)
    setTitle(tag.label)
  }

  function onRemoveTag() {
    api
      .delete(`tags/${id}`)
      .then(() => {
        showToastSuccess(`Tag  removida com sucesso`)
        fetchTags()
      })
      .catch(({ message }) => {
        showToastError(message)
      })
  }

  useEffect(() => {
    fetchTags()
  }, [])

  const isEdit = id > 0

  return (
    <Main>
      <Form onSubmit={handleCreateTag}>
        <Input
          placeholder="Qual tag deseja criar?"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
        <Button isEdit={isEdit} />
      </Form>
      <Section>
        {tags.map((tag) => {
          return (
            <Article key={tag.value}>
              <h3>
                {tag.label}{' '}
                <span>
                  - Criada{' '}
                  <time dateTime={tag.created_at}>{tag.created_at}</time>
                </span>
              </h3>
              <Buttons>
                <ButtonFlat onClick={() => handleEditTag(tag)} />
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <ButtonFlat
                      isEdit={false}
                      onClick={() => setId(tag.value)}
                    />
                  </Dialog.Trigger>
                  <Modal type={'Tag'} handleConfirm={onRemoveTag} />
                </Dialog.Root>
              </Buttons>
            </Article>
          )
        })}
      </Section>
    </Main>
  )
}
