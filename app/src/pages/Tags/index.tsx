import { Input } from '../../components/Input'
import { Article, Buttons, Form, Main, Section } from './styles.ts'
import { Button } from '../../components/Button'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { api } from '../../lib/axios.ts'
import { ButtonFlat } from '../../components/ButtonFlat'

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

  function handleCreateTag(event: FormEvent) {
    event.preventDefault()
    if (id > 0) {
      api
        .put(`tags/${id}`, {
          title,
        })
        .then(() => {
          api.get('tags').then((response) => {
            setTag(response.data.data)
          })
        })
    } else {
      api
        .post('tags', {
          title,
        })
        .then(() => {
          api.get('tags').then((response) => {
            setTag(response.data.data)
          })
        })
    }
    setTitle('')
    setId(0)
  }

  function handleEditTag(id: number, title: string) {
    setId(id)
    setTitle(title)
  }

  function handleRemoveTag(id: number) {
    api.delete(`tags/${id}`).then(() => {
      api.get('tags').then((response) => {
        setTag(response.data.data)
      })
    })
  }

  useEffect(() => {
    api.get('tags').then((response) => {
      setTag(response.data.data)
    })
  }, [])

  const isEdit = id > 0

  return (
    <Main>
      <Form onSubmit={handleCreateTag}>
        <Input
          placeholder="Qual tag deseja criar?"
          required
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
                <ButtonFlat
                  onClick={() => handleEditTag(tag.value, tag.label)}
                />
                <ButtonFlat
                  onClick={() => handleRemoveTag(tag.value)}
                  isEdit={false}
                />
              </Buttons>
            </Article>
          )
        })}
      </Section>
    </Main>
  )
}
