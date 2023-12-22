import { Input } from '../../components/Input'
import { Article, Form, Main, Section } from './styles.ts'
import { Button } from '../../components/Button'
import { Pen, Trash } from 'phosphor-react'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { api } from '../../lib/axios.ts'

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
                {tag.label} <span>- Criada em {tag.created_at}</span>
              </h3>
              <div className="buttons">
                <button
                  title="Editar Tag"
                  type="button"
                  onClick={() => handleEditTag(tag.value, tag.label)}
                >
                  <Pen size={20} />
                </button>
                <button
                  title="Excluir Tag"
                  type="button"
                  onClick={() => handleRemoveTag(tag.value)}
                >
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
