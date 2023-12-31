import { Input } from '../../components/Input'
import { Article, Buttons, Form, Main, Section } from './styles.ts'
import { Button } from '../../components/Button'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { api } from '../../lib/axios.ts'
import ButtonFlat from '../../components/ButtonFlat'
import * as Dialog from '@radix-ui/react-alert-dialog'
import { Modal } from '../../components/Modal'
import { showToast } from '../../utils/toast.ts'

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

  function fetchTags() {
    api
      .get('tags')
      .then((response) => {
        setTag(response.data.data)
      })
      .catch(({ message }) => {
        showToast({ type: 'error', text: message })
      })
  }

  function handleCreateTag(event: FormEvent) {
    event.preventDefault()

    if (title === '') {
      showToast({
        type: 'warning',
        text: 'Necessário informar o nome da Tag',
      })
      return
    }

    if (id > 0) {
      api
        .put(`tags/${id}`, {
          title,
        })
        .then(() => {
          showToast({ type: 'success', text: 'Tag atualizada com sucesso' })
          fetchTags()
        })
        .catch(({ message }) => {
          showToast({ type: 'error', text: message })
        })
    } else {
      api
        .post('tags', {
          title,
        })
        .then(() => {
          showToast({ type: 'success', text: 'Tag criada com sucesso' })
          fetchTags()
        })
        .catch(({ message }) => {
          showToast({ type: 'error', text: message })
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
        showToast({ type: 'success', text: 'Tag removida com sucesso' })
        fetchTags()
      })
      .catch(({ message }) => {
        showToast({ type: 'error', text: message })
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
